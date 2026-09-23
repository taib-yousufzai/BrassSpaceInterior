import { NextRequest, NextResponse } from 'next/server';

interface HubBatch {
  id: string;
  urls: string[];
  createdAt: number;
  expiresAt: number;
}

// Global in-memory cache for active 24h batches across Next.js reloads
const globalForHub = globalThis as unknown as {
  activeHubBatches?: Map<string, HubBatch>;
};

if (!globalForHub.activeHubBatches) {
  globalForHub.activeHubBatches = new Map<string, HubBatch>();
}

const activeBatches = globalForHub.activeHubBatches;

function pruneExpiredBatches() {
  const now = Date.now();
  for (const [id, batch] of activeBatches.entries()) {
    if (now >= batch.expiresAt) {
      activeBatches.delete(id);
    }
  }
}

export async function POST(req: NextRequest) {
  const secretHeader = req.headers.get('x-hub-secret');
  const expectedSecret = process.env.BRASS_SPACE_HUB_SECRET || 'brassspace_hub_secret_key_2026';

  if (!secretHeader || secretHeader !== expectedSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    pruneExpiredBatches();

    const body = await req.json();
    const urls: string[] = body.urls || [];
    const ttlHours: number = body.ttlHours || 24;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const batchId = `b_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = Date.now();
    const expiresAt = now + ttlHours * 60 * 60 * 1000;

    const newBatch: HubBatch = {
      id: batchId,
      urls,
      createdAt: now,
      expiresAt,
    };

    activeBatches.set(batchId, newBatch);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brassspace.com';
    const batchUrl = `${siteUrl}/test?batch=${batchId}`;

    return NextResponse.json({
      success: true,
      batchId,
      batchUrl,
      urlsCount: urls.length,
      expiresAt: new Date(expiresAt).toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  pruneExpiredBatches();
  const batchId = req.nextUrl.searchParams.get('batch');

  if (batchId) {
    const batch = activeBatches.get(batchId);
    if (!batch || Date.now() >= batch.expiresAt) {
      return NextResponse.json({ error: 'Batch expired or not found' }, { status: 404 });
    }
    return NextResponse.json(batch);
  }

  const liveBatches = Array.from(activeBatches.values());
  return NextResponse.json({
    activeBatchCount: liveBatches.length,
    batches: liveBatches,
  });
}
