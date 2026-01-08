"use client";

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { PROJECT_TYPES, BUDGET_RANGES, CITIES } from '@/lib/constants';

export default function BookSiteVisitPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    area: '',
    budget: '',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <>
        <PageHero title="Thank You!" subtitle="Your site visit request has been received" />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Booking Confirmed!</h2>
              <p className="text-gray-700 mb-4">
                Thank you for choosing Brass Space. We've received your site visit request and will confirm your appointment within 2 business hours.
              </p>
              <p className="text-gray-600">
                You'll receive a confirmation call at <strong>{formData.phone}</strong> and an email at <strong>{formData.email}</strong>.
              </p>
            </div>
            <div className="space-y-4">
              <a href="/" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition">
                Back to Home
              </a>
              <br />
              <a href="/portfolio" className="inline-block text-amber-700 hover:underline">
                Explore Our Portfolio
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Book Free Site Visit"
        subtitle="Let's discuss your project and create something beautiful together"
        backgroundImage="/images/home office/ho-1-1763115252-l3GLN.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-2">What to Expect:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Free consultation with our design expert</li>
              <li>✓ Site measurement and assessment</li>
              <li>✓ Initial design ideas and suggestions</li>
              <li>✓ Transparent cost estimation</li>
              <li>✓ No obligation to proceed</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  City / Area *
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select City</option>
                  {CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select Type</option>
                  {PROJECT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                  Approximate Area (sq ft)
                </label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="e.g., 1200"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select Budget</option>
                  {BUDGET_RANGES.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tell us more about your project requirements..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 mr-3"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to receive communication from Brass Space regarding my project inquiry. I understand that my information will be handled as per the Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition"
            >
              Book Free Site Visit
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>Or call us directly at <a href="tel:+919876543210" className="text-amber-700 font-semibold">+91-9876543210</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
