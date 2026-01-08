import PageHero from '@/components/PageHero';
import Accordion from '@/components/Accordion';
import CTABanner from '@/components/CTABanner';
import SchemaInjector from '@/components/SchemaInjector';
import { faqSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'What services does Brass Space offer?',
    answer: 'We offer comprehensive interior design services including residential interiors, commercial interiors, modular kitchens, wardrobes & storage solutions, and complete renovation & execution services.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Delhi NCR including Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. For projects outside these areas, please contact us to discuss possibilities.'
  },
  {
    question: 'How much does interior design cost?',
    answer: 'Interior design costs vary based on project scope, area, materials, and finish level. Typically, costs range from ₹1,200 to ₹3,500 per sq ft. Use our cost estimator for a quick estimate, or book a site visit for a detailed quotation.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary: Modular kitchens take 20-30 days, wardrobes 15-25 days, and complete home interiors 45-90 days depending on the scope. We provide a detailed timeline during the quotation phase.'
  },
  {
    question: 'Do you provide 3D designs before execution?',
    answer: 'Yes, we provide detailed 3D visualizations and walkthroughs for all projects so you can see exactly how your space will look before execution begins.'
  },
  {
    question: 'What is included in your quotation?',
    answer: 'Our quotations include design fees, materials, hardware, labor, installation, and project management. We provide a detailed breakdown with no hidden costs.'
  },
  {
    question: 'Do you provide warranty on your work?',
    answer: 'Yes, we provide a 1-year warranty on all workmanship and installation. Material warranties are as per manufacturer terms, typically ranging from 1-10 years.'
  },
  {
    question: 'Can I make changes during the project?',
    answer: 'Minor changes can be accommodated during execution. Major changes may affect the timeline and cost, which will be communicated transparently before implementation.'
  },
  {
    question: 'Do you handle structural modifications?',
    answer: 'Yes, we handle structural modifications with proper engineering consultation and necessary approvals. This includes wall removal, ceiling work, and other civil modifications.'
  },
  {
    question: 'What materials do you use?',
    answer: 'We use premium quality materials including marine-grade plywood, HDHMR, branded laminates, acrylics, and hardware from trusted brands like Hettich, Ebco, and Hafele.'
  },
  {
    question: 'Do you provide furniture and decor?',
    answer: 'Yes, we can source and supply furniture, lighting, and decor items as part of our turnkey solutions, or work with your preferred vendors.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply book a free site visit through our website or call us. Our designer will visit your site, understand your requirements, and provide initial ideas and a quotation.'
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We typically follow a milestone-based payment structure: 40% on order confirmation, 30% on material delivery, 20% on installation completion, and 10% on final handover.'
  },
  {
    question: 'Do you work on weekends?',
    answer: 'Yes, we can schedule work on weekends if required, especially for commercial projects where minimal business disruption is needed.'
  },
  {
    question: 'Can I see your previous work?',
    answer: 'Absolutely! Visit our portfolio page to see completed projects, or we can arrange site visits to ongoing or completed projects with client permission.'
  }
];

const schema = faqSchema(faqs);

export default function FAQPage() {
  return (
    <>
      <SchemaInjector schema={schema} />
      
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        backgroundImage="/images/living area/lr-14-1763103056-8khTI.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-700">
              Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>

          <Accordion items={faqs} />

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        description="Book a free consultation and let's bring your vision to life"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
