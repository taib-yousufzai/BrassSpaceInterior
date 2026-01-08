"use client";

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { PROJECT_TYPES } from '@/lib/constants';

export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [estimateData, setEstimateData] = useState({
    area: '',
    projectType: '',
    finishLevel: '',
    estimatedCost: { min: 0, max: 0 }
  });

  const calculateEstimate = () => {
    const area = parseInt(estimateData.area);
    const rates: Record<string, Record<string, { min: number; max: number }>> = {
      'Residential': {
        'Basic': { min: 1200, max: 1500 },
        'Premium': { min: 1800, max: 2200 },
        'Luxury': { min: 2500, max: 3500 }
      },
      'Commercial': {
        'Basic': { min: 1000, max: 1300 },
        'Premium': { min: 1500, max: 2000 },
        'Luxury': { min: 2200, max: 3000 }
      },
      'Kitchen': {
        'Basic': { min: 1500, max: 2000 },
        'Premium': { min: 2200, max: 2800 },
        'Luxury': { min: 3000, max: 4000 }
      },
      'Wardrobe': {
        'Basic': { min: 1200, max: 1600 },
        'Premium': { min: 1800, max: 2400 },
        'Luxury': { min: 2600, max: 3500 }
      },
      'Renovation': {
        'Basic': { min: 1000, max: 1400 },
        'Premium': { min: 1600, max: 2200 },
        'Luxury': { min: 2400, max: 3200 }
      }
    };

    const rate = rates[estimateData.projectType]?.[estimateData.finishLevel];
    if (rate && area) {
      setEstimateData({
        ...estimateData,
        estimatedCost: {
          min: Math.round(area * rate.min),
          max: Math.round(area * rate.max)
        }
      });
      setStep(2);
    }
  };

  return (
    <>
      <PageHero
        title="Get Instant Cost Estimate"
        subtitle="Quick calculator to estimate your interior project cost"
        backgroundImage="/images/living area/lr-13-1763103057-9PLx6.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {step === 1 ? (
            <>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-lg mb-2">How it works:</h3>
                <p className="text-gray-700">
                  Answer a few quick questions to get an approximate cost range for your project. This is an estimate only - actual costs may vary based on specific requirements, materials, and customizations.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Area (sq ft) *
                  </label>
                  <input
                    type="number"
                    value={estimateData.area}
                    onChange={(e) => setEstimateData({ ...estimateData, area: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="e.g., 1200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    value={estimateData.projectType}
                    onChange={(e) => setEstimateData({ ...estimateData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Type</option>
                    {PROJECT_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Finish Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Basic', 'Premium', 'Luxury'].map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setEstimateData({ ...estimateData, finishLevel: level })}
                        className={`p-4 border-2 rounded-lg text-center transition ${
                          estimateData.finishLevel === level
                            ? 'border-amber-700 bg-amber-50'
                            : 'border-gray-300 hover:border-amber-500'
                        }`}
                      >
                        <div className="font-bold text-lg mb-1">{level}</div>
                        <div className="text-sm text-gray-600">
                          {level === 'Basic' && 'Standard materials & finishes'}
                          {level === 'Premium' && 'High-quality materials'}
                          {level === 'Luxury' && 'Premium imported materials'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculateEstimate}
                  disabled={!estimateData.area || !estimateData.projectType || !estimateData.finishLevel}
                  className="w-full bg-amber-700 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Calculate Estimate
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Estimated Project Cost</h2>
                <div className="text-5xl font-bold text-amber-700 mb-2">
                  ₹{estimateData.estimatedCost.min.toLocaleString('en-IN')} - ₹{estimateData.estimatedCost.max.toLocaleString('en-IN')}
                </div>
                <p className="text-gray-600 mt-4">
                  For {estimateData.area} sq ft {estimateData.projectType} project with {estimateData.finishLevel} finish
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold mb-2">Important Notes:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• This is an approximate estimate based on typical projects</li>
                  <li>• Actual costs depend on specific materials, customizations, and site conditions</li>
                  <li>• Includes design, materials, and execution</li>
                  <li>• Excludes furniture, appliances, and decor (unless specified)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <a
                  href="/book-site-visit"
                  className="block w-full bg-amber-700 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition text-center"
                >
                  Book Free Site Visit for Detailed Quote
                </a>
                <button
                  onClick={() => setStep(1)}
                  className="block w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
                >
                  Calculate Again
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
