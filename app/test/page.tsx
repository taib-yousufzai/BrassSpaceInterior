import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { generateMetadata as genMeta } from '@/components/SEOHead';

export const metadata = genMeta({
  title: "Test Page - Brass Space Interior Solutions",
  description: "Temporary test page for development and experiments.",
  canonical: "/test"
});

export default function TestPage() {
  return (
    <>
      {/* Test Page Hero Header */}
      <PageHero
        title="Test Page Sandbox"
        subtitle="Temporary page for feature testing & experimentations"
      />

      {/* Main Content / Testing Area */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Notice Banner */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg shadow-sm mb-12">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <h2 className="text-lg font-bold text-amber-900">Developer Note</h2>
                  <p className="text-amber-800 text-sm">
                    This is a temporary test page. Route: <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-mono">/test</code> (File: <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-mono">app/test/page.tsx</code>). You can safely edit or delete this page later.
                  </p>
                </div>
              </div>
            </div>

            {/* Test Sandbox Containers */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Test Section 1</h3>
                <p className="text-gray-600 mb-4">
                  Use this container to quickly test components, UI layouts, or custom React hooks.
                </p>
                <div className="p-4 bg-white rounded-lg border border-dashed border-gray-300 text-center text-gray-500">
                  [ Placeholder for component test #1 ]
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Test Section 2</h3>
                <p className="text-gray-600 mb-4">
                  Secondary test module container for side-by-side comparison or additional logic.
                </p>
                <div className="p-4 bg-white rounded-lg border border-dashed border-gray-300 text-center text-gray-500">
                  [ Placeholder for component test #2 ]
                </div>
              </div>
            </div>

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
