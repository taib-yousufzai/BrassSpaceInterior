import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { generateMetadata as genMeta } from '@/components/SEOHead';

export const metadata = genMeta({
  title: "Live Indexing Sandbox - Brass Space Interior Solutions",
  description: "Temporary 24-hour verification hub for external index submissions.",
  canonical: "/test"
});

export const revalidate = 0; // Fresh SSR rendering on every request

interface PageProps {
  searchParams: Promise<{ batch?: string }>;
}

export default async function TestPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const batchId = params.batch;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brassspace.com';

  let urls: string[] = [];
  let isExpired = false;

  if (batchId) {
    try {
      const res = await fetch(`${siteUrl}/api/indexing-hub?batch=${batchId}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        urls = data.urls || [];
      } else {
        isExpired = true;
      }
    } catch {
      isExpired = true;
    }
  } else {
    // Show most recent active batch if no batch specified
    try {
      const res = await fetch(`${siteUrl}/api/indexing-hub`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        const latestBatch = data.batches?.[data.batches.length - 1];
        if (latestBatch) {
          urls = latestBatch.urls || [];
        }
      }
    } catch {}
  }

  return (
    <>
      <PageHero
        title="Live Indexing Sandbox"
        subtitle="Temporary 24-hour verification hub for index submissions"
      />

      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg shadow-sm mb-12">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <h2 className="text-lg font-bold text-amber-900">Live Indexing Queue</h2>
                  <p className="text-amber-800 text-sm">
                    Links displayed on this sandbox page auto-expire and delete themselves after 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {isExpired ? (
              <div className="p-6 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-lg">
                <p className="font-semibold">Batch Expired / Removed</p>
                <p className="text-sm">This temporary indexing batch has completed its 24-hour verification cycle and was purged.</p>
              </div>
            ) : urls.length === 0 ? (
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center text-gray-500">
                No active indexing links currently queued.
              </div>
            ) : (
              <div className="space-y-3">
                {urls.map((targetUrl, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-500 transition">
                    <a
                      href={targetUrl}
                      rel="dofollow"
                      target="_blank"
                      className="text-[#b8860b] font-medium text-base hover:underline break-all block"
                    >
                      {targetUrl}
                    </a>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

      <CTABanner
        title="Testing Completed?"
        description="Navigate back to the main website when you are ready."
        buttonText="Back to Home"
        buttonHref="/"
        variant="secondary"
      />
    </>
  );
}
