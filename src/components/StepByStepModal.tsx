import React from 'react';
import { X, Users, Settings, Globe, Bell, CheckCircle } from 'lucide-react';

interface StepByStepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StepByStepModal: React.FC<StepByStepModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      number: 1,
      icon: Users,
      title: "1,500 Weekly Conversations",
      subtitle: "Lead Generation",
      description: "Our BD team chats with around 1,500 qualified leads per week, identifying travelers ready for authentic group experiences.",
      color: "bg-[#E91E63]"
    },
    {
      number: 2,
      icon: Settings,
      title: "Leads Enter Our Flow",
      subtitle: "Trip Customization",
      description: "Interested travelers start using our platform to customize trips using your programs and experiences as the foundation.",
      color: "bg-[#C2185B]"
    },
    {
      number: 3,
      icon: Globe,
      title: "Go Live & Start Promoting",
      subtitle: "Trip Publishing",
      description: "The customized trip gets published and becomes bookable. The TourHero begins actively promoting it to their network.",
      color: "bg-[#9C27B0]"
    },
    {
      number: 4,
      icon: Bell,
      title: "You Get Notified",
      subtitle: "First Booking Alert",
      description: "The moment the trip gets its first booking, we notify you immediately. Time to confirm details and start making reservations.",
      color: "bg-[#7986CB]"
    },
    {
      number: 5,
      icon: CheckCircle,
      title: "Ready to Departure",
      subtitle: "Trip Confirmation",
      description: "Trip reaches minimum bookings and departure is confirmed. 75% of trips with 1+ booking successfully reach departure.",
      color: "bg-[#4F46E5]"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step by Step Process</h2>
            <p className="text-slate-600">From lead generation to successful trip departure</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 lg:p-8">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* All Steps in Single Container */}
              <div className="flex items-start gap-4">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const gradients = [
                    'bg-gradient-to-r from-[#E91E63] to-[#C2185B]',
                    'bg-gradient-to-r from-[#C2185B] to-[#9C27B0]',
                    'bg-gradient-to-r from-[#9C27B0] to-[#7986CB]',
                    'bg-gradient-to-r from-[#7986CB] to-[#4F46E5]'
                  ];

                  return (
                    <div key={index} className="flex-1 relative group">
                      {/* Connecting Line Segment */}
                      {index < steps.length - 1 && (
                        <div className={`absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-1 ${gradients[index]} rounded-full z-0`}>
                          {/* Success Rate Badge between Steps 4 and 5 */}
                          {index === 3 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="bg-white px-3 py-1 rounded-full shadow-md border border-slate-200 whitespace-nowrap">
                                <span className="text-xs font-semibold text-[#4F46E5]">75% fly rate</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Node */}
                      <div className="flex justify-center mb-6 relative z-10">
                        <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex items-center justify-center mb-4">
                          <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-center mb-2">{step.title}</h3>
                        <p className="text-sm font-medium text-tourhero-red text-center mb-3">{step.subtitle}</p>
                        <p className="text-sm text-slate-600 text-center leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index}>
                  <div className="relative">
                    {/* Connecting Line for Mobile */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300">
                        {/* Success Rate Badge between Steps 4 and 5 on Mobile */}
                        {index === 3 && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white px-2 py-1 rounded-full shadow-md border border-slate-200 whitespace-nowrap">
                              <span className="text-xs font-semibold text-[#4F46E5]">75%</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Node */}
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}>
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center mr-3`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm font-medium text-tourhero-red">{step.subtitle}</p>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Watch: How TourHero Operators Grow Their Business
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              2-3 minute detailed walkthrough of our partnership process
            </p>
            
            <a
              href="https://airtable.com/appaAfaapEmEoFrVm/pagDRYDgvUuEtjO0a/form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-tourhero-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ready to Get Started? Join Our Operator Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepModal;