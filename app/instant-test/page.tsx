import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { generateMetadata as genMeta } from '@/components/SEOHead';

export const metadata = genMeta({
  title: "Instant Indexing Verification Test - Brass Space Interior",
  description: "Live verification test page for 5-layer instant indexing engine evaluation.",
  canonical: "/instant-test"
});

export const revalidate = 0;

export default function InstantTestPage() {
  const timestamp = new Date().toISOString();

  return (
    <>
      <PageHero
        title="Instant Indexing Test Page"
        subtitle="Verification Sandbox for Real-time Search Engine Crawl & Indexing"
      />

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h2 className="text-xl font-bold text-emerald-950">Live Indexing Verification Active</h2>
                  <p className="text-emerald-800 text-sm mt-1">
                    Timestamp generated: <code className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900 font-mono">{timestamp}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">About This Temporary Page</h3>
              <p>
                This temporary page is designed to validate real-time discovery and indexation across Google, Bing, Yandex, and major search engine crawlers using multi-layer instant indexing protocols.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Indexing API Direct Push</li>
                <li>BrassSpace Hub Backlink Sync</li>
                <li>HeadlessX Camoufox Stealth Browser Traffic</li>
                <li>IndexNow Protocol Broadcast</li>
                <li>Wayback Machine Snapshot Trigger</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for Interior Design Services?"
        description="Explore our complete interior design portfolios and get a free site consultation."
        buttonText="View Portfolio"
        buttonHref="/portfolio"
        variant="primary"
      />
    </>
  );
}
