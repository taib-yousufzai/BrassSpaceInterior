import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { generateMetadata as genMeta } from '@/components/SEOHead';

export const metadata = genMeta({
  title: "Permanent Indexing Gateway - Brass Space",
  description: "Permanent indexing directory node for web resource verification.",
  canonical: "/test"
});

export const revalidate = 60; // Cache and revalidate every 60s for performance

interface PageProps {
  searchParams: Promise<{ batch?: string }>;
}

export default async function TestPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const batchId = params.batch;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brassspace.com';

  let urls: string[] = [];
  let notFound = false;

  if (batchId) {
    try {
      const res = await fetch(`${siteUrl}/api/indexing-hub?batch=${batchId}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        urls = data.urls || [];
      } else {
        notFound = true;
      }
    } catch {
      notFound = true;
    }
  } else {
    // Show active batches if no batch specified
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
        title="Permanent Indexing Gateway"
        subtitle="Permanent directory node for index verification and search engine crawl dispatch"
      />

      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg shadow-sm mb-12">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <h2 className="text-lg font-bold text-emerald-900">Permanent Crawl Directory</h2>
                  <p className="text-emerald-800 text-sm">
                    Links listed below are permanently indexed and continuously crawled by search engines.
                  </p>
                </div>
              </div>
            </div>

            {notFound ? (
              <div className="p-6 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-lg">
                <p className="font-semibold">Batch Directory</p>
                <p className="text-sm">Batch record initialized and waiting for crawl dispatch.</p>
              </div>
            ) : urls.length === 0 ? (
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center text-gray-500">
                No active indexing links currently queued.
              </div>
            ) : (
              <div className="space-y-3">
                {urls.map((targetUrl, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-500 transition">
                    <a
                      href={targetUrl}
                      rel="follow"
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
        title="Brass Space Interior Solutions"
        description="Explore our high-end residential and commercial interior portfolio."
        buttonText="Back to Home"
        buttonHref="/"
        variant="secondary"
      />
    </>
  );
}
