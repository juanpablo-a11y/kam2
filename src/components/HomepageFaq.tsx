import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface HomepageFaqProps {
  onViewAllFaqs?: () => void;
  onShowVideos?: () => void;
}

const HomepageFaq: React.FC<HomepageFaqProps> = ({ onViewAllFaqs, onShowVideos }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const homepageFaqs: FaqItem[] = [
    {
      question: "What is TourHero's business model?",
      answer: "TourHero operates as a social travel platform connecting three key parties: Operators (like you), TourHeroes (trip organizers), and Travelers. Our platform enables TourHeroes to create custom group trips using your services, while we handle logistics, payments, and marketing. This creates a marketplace where operators get access to diverse traveler segments they couldn't reach directly, effectively reducing your customer acquisition costs while expanding your reach."
    },
    {
      question: "How does the partnership model work?",
      answer: "To begin our partnership, we need you to provide us with programs that will serve as the foundation of what we sell on your behalf. Programs are detailed travel packages that you've designed and are ready to offer to groups."
    },
    {
      question: "What makes TourHero different from other travel platforms?",
      answer: "Unlike traditional OTAs, TourHero is designed specifically to amplify your business as an operator. We're your business amplifier - we handle the entire customer acquisition process, bring qualified group bookings directly to you, and focus on higher value group trips with consistent demand."
    },
    {
      question: "What types of operators do you work with?",
      answer: "We primarily work with DMC (Destination Management Company) operators from around the world. We look for quality-focused providers with local expertise, cultural authenticity, and the ability to deliver exceptional on-ground experiences."
    },
    {
      question: "What's the onboarding process like?",
      answer: "Follow our step-by-step process:\n1. Fill out our operator waitlist form\n2. Create your TourHero account\n3. Upload 10+ signature itineraries\n4. Provide detailed pricing for 6 and 12 passengers\n5. Confirm access to our Airtable dashboard"
    },
    {
      question: "How do payments work?",
      answer: "TourHero handles all payment processing through our secure platform with:\n• Centralized payment management\n• Flexible payment plans for travelers\n• Individual payment tracking\n• Automated processing\n• Transparent reporting with real-time visibility"
    },
    {
      question: "What happens when a booking is made?",
      answer: "You'll be notified on your dashboard and via email. The trip status updates from 'No bookings received' to 'First booking received,' and you can proceed to block rooms and handle arrangements."
    },
    {
      question: "How do I upload trips and itineraries?",
      answer: "Log into your dashboard, go to 'Inventory | Itineraries' and click 'upload new.' You can also update pricing directly or in bulk by specifying percentage changes."
    },
    {
      question: "What are your quality standards?",
      answer: "We focus on four key elements:\n1. Speed - Responsive communication and quick turnaround\n2. Price - Competitive and transparent pricing\n3. Quality of on-ground experience - Exceptional service delivery\n4. Customization - Flexibility to adapt to group needs"
    },
    {
      question: "What's your cancellation policy?",
      answer: "60-day cancellation cutoff - payments to operators are refundable up to 60 days before trip departure. After this date, payments are non-refundable."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#112039' }}>Frequently asked</span> <span className="text-tourhero-red">questions</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about partnering with TourHero
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {homepageFaqs.map((faq, index) => (
            <div key={index} className="bg-background rounded-lg shadow-sm border border-border">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-hover rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tourhero-blue focus:ring-opacity-50"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewAllFaqs}
            className="inline-flex items-center bg-tourhero-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            View All FAQs
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button
            onClick={onShowVideos}
            className="inline-flex items-center bg-tourhero-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 ml-4"
          >
            Watch Videos
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageFaq;