import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, ArrowUp, Share2, Printer, ArrowLeft } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

interface FullFaqPageProps {
  onBackToHomepage?: () => void;
  onShowVideos?: () => void;
}

const FullFaqPage: React.FC<FullFaqPageProps> = ({ onBackToHomepage, onShowVideos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);

  const fullFaqs: FaqCategory[] = [
    {
      title: "About TourHero",
      items: [
        {
          question: "When was TourHero founded and how long have you been operating?",
          answer: "TourHero was founded in 2020 and has been operating for 4+ years. We've established ourselves as a trusted platform connecting operators, organizers, and travelers across 80+ destinations worldwide."
        },
        {
          question: "What is TourHero's business model?",
          answer: "TourHero operates as a social travel platform connecting three key parties: Operators (like you), TourHeroes (trip organizers), and Travelers. Our platform enables TourHeroes to create custom group trips using your services, while we handle logistics, payments, and marketing. This creates a marketplace where operators get access to diverse traveler segments they couldn't reach directly, effectively reducing your customer acquisition costs while expanding your reach."
        },
        {
          question: "What makes TourHero different from other travel platforms?",
          answer: "Unlike traditional OTAs that focus on individual bookings and price competition, TourHero is designed specifically to amplify your business as an operator. We're your business amplifier - we handle the entire customer acquisition process, bring qualified group bookings directly to you, and focus on higher value group trips with consistent demand. We build lasting partnerships, not just transactional relationships."
        },
        {
          question: "What is TourHero's mission and vision?",
          answer: "Our mission is 'Bringing people together one journey at a time.' We envision a world where authentic travel experiences connect people across cultures, creating meaningful relationships while supporting local operators and communities."
        }
      ]
    },
    {
      title: "Partnership & Business Model",
      items: [
        {
          question: "How does the partnership model work?",
          answer: "To begin our partnership, we need you to provide us with programs that will serve as the foundation of what we sell on your behalf. Programs are detailed travel packages that you've designed and are ready to offer to groups. Our TourHeroes then customize these programs, using Maya - our AI system  powered by your modular components.  We handle the sales process, publish the trip once ready and you receive confirmed bookings."
        },
        {
          question: "What are Programs?",
          answer: "Programs are comprehensive travel packages that include detailed itineraries, pricing structures, inclusions/exclusions, accommodation options, activity descriptions, and logistical information. They serve as the foundation for all trips we sell on your behalf."
        },
        {
          question: "What are the Program Requirements?",
          answer: "Programs must include:\n• Detailed day-by-day itinerary\n• Clear pricing for 6 and 12 passengers\n• Accommodation options and standards\n• Included meals and activities\n• Transportation details\n• Local guide information\n• Cancellation policies\n• Emergency contact procedures\n\n<div style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 16px;\"><iframe src=\"https://www.loom.com/embed/273bf90d6c4a4821a6e8a07b61046970?sid=3608476e-31cf-45f0-b12f-2412866a8ddf\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>"
        },
        {
          question: "What are Modular Components?",
          answer: "Modular components are flexible elements of your programs that can be mixed, matched, or customized. This includes:\n• Optional activities\n• Accommodation upgrades\n• Transportation options\n• Add-on experiences that TourHeroes can use to tailor trips to specific group needs"
        },
        {
          question: "How does the 6-step process work?",
          answer: "1. Submit programs ready to sell and modular components\n2. We train our team and AI systems on your offerings\n3. Your programs become available to our TourHero network\n4. Trips get customized for specific groups by the TourHeroes using our systems and your data\n5. We publish and manage the sales funnel\n6. Once the trip gets its first booking You receive a notification with real-time data and full trip details"
        },
        {
          question: "What types of operators do you work with?",
          answer: "We primarily work with DMC (Destination Management Company) operators from around the world. We look for quality-focused providers with local expertise, cultural authenticity, and the ability to deliver exceptional on-ground experiences."
        },
        {
          question: "What is a DMC?",
          answer: "A Destination Management Company (DMC) is a professional services company with extensive local knowledge, expertise, and resources, specializing in the design and implementation of events, activities, tours, transportation, and program logistics in their destination."
        },
        {
          question: "What makes an ideal operator partner?",
          answer: "Our ideal partners have:\n• 3+ years of operation experience\n• Strong local expertise and cultural knowledge\n• Proven track record of quality service\n• Ability to handle group bookings (6-30 people)\n• Flexible and responsive communication\n• Commitment to authentic experiences\n• Professional standards in safety and service"
        },
        {
          question: "What destinations do you currently operate in?",
          answer: "We operate in 80+ destinations worldwide, with strong presence in Asia, Europe, Americas, Africa, and Oceania. We're continuously expanding to new destinations based on demand and quality operator partnerships."
        }
      ]
    },
    {
      title: "Getting Started",
      items: [
        {
          question: "What's the onboarding process like?",
          answer: "Follow our step-by-step process:\n1. Fill out our operator waitlist form\n2. Create your TourHero account\n3. Upload 10+ signature itineraries\n4. Provide detailed pricing for 6 and 12 passengers\n5. Confirm access to our Airtable dashboard\n6. Complete training and quality review process"
        },
        {
          question: "Getting Started Checklist",
          answer: "□ Complete operator waitlist form\n□ Create TourHero account\n□ Upload minimum 10 signature programs\n□ Provide pricing for 6 and 12 passengers\n□ Set up Airtable dashboard access\n□ Complete operator training session\n□ Review and sign partnership agreement\n□ Test booking notification system\n□ Provide emergency contact information\n□ Submit quality assurance documentation"
        }
      ]
    },
    {
      title: "Operations & Processes",
      items: [
        {
          question: "How do I upload trips and itineraries?",
          answer: "Log into your operator dashboard, navigate to 'Inventory | Itineraries' and click 'upload new.' You can upload individual programs or use our bulk upload feature. Each program should include complete itinerary details, pricing, and all relevant information."
        },
        {
          question: "How do you handle pricing and availability updates?",
          answer: "You can update pricing directly in your dashboard or use our bulk update feature by specifying percentage changes. Availability is managed through our real-time system where you can block dates, update capacity, and set seasonal pricing adjustments."
        },
        {
          question: "How do payments work?",
          answer: "TourHero handles all payment processing through our secure platform. Features include:\n• Centralized payment management\n• Flexible payment plans for travelers\n• Individual payment tracking per booking\n• Automated processing and reconciliation\n• Transparent reporting with real-time visibility\n• Guaranteed payments to operators according to agreed terms"
        },
        {
          question: "What happens when a booking is made?",
          answer: "When a booking is confirmed:\n1. You receive immediate notification via dashboard and email\n2. Trip status updates from 'No bookings received' to 'First booking received'\n3. You can access full group details and special requests\n4. You proceed to block accommodations and confirm arrangements\n5. Ongoing communication is managed through our platform\n6. Payment is processed according to our agreed schedule"
        }
      ]
    },
    {
      title: "Policies & Procedures",
      items: [
        {
          question: "What are your quality standards?",
          answer: "We maintain high standards across four key elements:\n1. Speed - Responsive communication and quick turnaround times\n2. Price - Competitive and transparent pricing structures\n3. Quality of on-ground experience - Exceptional service delivery and authentic local experiences\n4. Customization - Flexibility to adapt programs to specific group needs and preferences"
        },
        {
          question: "What's your cancellation policy?",
          answer: "60-day cancellation cutoff policy: Payments to operators are fully refundable up to 60 days before trip departure date. After this 60-day cutoff, payments become non-refundable. This policy protects both operators and travelers while providing reasonable flexibility for trip planning changes."
        }
      ]
    },
    {
      title: "Contact Information",
      items: [
        {
          question: "How can I get support?",
          answer: "Contact options:\n• General Support: operators@tourhero.com\n• Platform Support: Available through your operator dashboard\n• Schedule a Call: Contact your dedicated Key Account Manager\n• Regional Support:\n  - Americas/Asia: Juan Pablo (Key Account Manager)\n  - US/Europe/Africa/Oceania: Regional Team Contact"
        }
      ]
    }
  ];

  // Filter FAQs based on search term
  const filteredFaqs = fullFaqs.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const toggleCategory = (index: number) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(index)) {
      newOpenCategories.delete(index);
    } else {
      newOpenCategories.add(index);
    }
    setOpenCategories(newOpenCategories);
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TourHero FAQ',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-tourhero-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {onBackToHomepage && (
            <div className="mb-8">
              <button
                onClick={onBackToHomepage}
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Homepage
              </button>
            </div>
          )}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: '#112039' }}>Frequently asked</span> <span className="text-tourhero-red">questions</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive guide to partnering with TourHero
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {fullFaqs.map((category, index) => (
                  <a
                    key={index}
                    href={`#category-${index}`}
                    className="block text-text-secondary hover:text-tourhero-red transition-colors duration-200 py-1"
                  >
                    {category.title}
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="mt-8 space-y-2">
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center px-4 py-2 border border-border rounded-lg hover:bg-hover transition-colors duration-200"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center px-4 py-2 border border-border rounded-lg hover:bg-hover transition-colors duration-200"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tourhero-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex} id={`category-${categoryIndex}`} className="scroll-mt-8">
                  <div className="bg-background border border-border rounded-lg shadow-sm">
                    <button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-hover transition-colors duration-200"
                    >
                      <h2 className="text-xl font-bold text-text-primary">{category.title}</h2>
                      <ChevronDown
                        className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
                          openCategories.has(categoryIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openCategories.has(categoryIndex) && (
                      <div className="border-t border-border">
                        <div className="p-6 space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="border border-border rounded-lg">
                              <button
                                onClick={() => toggleItem(categoryIndex, itemIndex)}
                                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-hover transition-colors duration-200"
                              >
                                <span className="font-medium text-text-primary pr-4">
                                  {item.question}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                                    openItems.has(`${categoryIndex}-${itemIndex}`) ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {openItems.has(`${categoryIndex}-${itemIndex}`) && (
                                <div className="px-4 pb-3 border-t border-border">
                                  <div className="pt-3">
                                    <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                                      {item.answer.includes('<iframe') ? (
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                      ) : (
                                        <p>{item.answer}</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <button
                onClick={onShowVideos}
                className="block text-text-secondary hover:text-tourhero-red transition-colors duration-200 py-1 text-left"
              >
                Videos
              </button>
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg">
                  No FAQs found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-tourhero-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FullFaqPage;