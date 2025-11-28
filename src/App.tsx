import React, { useState } from 'react';
import FaqRouter from './components/FaqRouter';
import StepByStepModal from './components/StepByStepModal';
import VideoLibraryModal from './components/VideoLibraryModal';
import {
  Users,
  Globe,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Play,
  ChevronDown,
  Menu,
  X,
  Search,
  Code,
  Megaphone,
  Handshake,
  FileText,
  Brain,
  Compass,
  Settings,
  Rocket,
  Database,
  UserCircle,
  Map,
  Bot
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStepByStepModalOpen, setIsStepByStepModalOpen] = useState(false);
  const [isVideoLibraryModalOpen, setIsVideoLibraryModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <img src="/tourhero_logo-01.png" alt="TourHero" className="h-40" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-600 hover:text-primary-600 transition-colors">How It Works</button>
              <button onClick={() => setIsStepByStepModalOpen(true)} className="text-slate-600 hover:text-primary-600 transition-colors">Step by Step Process</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-slate-600 hover:text-primary-600 transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection('getting-started')} className="text-slate-600 hover:text-primary-600 transition-colors">Getting Started</button>
              <button onClick={() => setIsVideoLibraryModalOpen(true)} className="text-slate-600 hover:text-primary-600 transition-colors">Videos</button>
              <a href="https://airtable.com/appaAfaapEmEoFrVm/pagDRYDgvUuEtjO0a/form" target="_blank" rel="noopener noreferrer" className="bg-tourhero-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Join Waitlist</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">How It Works</button>
                <button onClick={() => setIsStepByStepModalOpen(true)} className="text-left text-slate-600 hover:text-primary-600 transition-colors">Step by Step Process</button>
                <button onClick={() => scrollToSection('why-choose')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">Why Choose Us</button>
                <button onClick={() => scrollToSection('getting-started')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">Getting Started</button>
                <button onClick={() => { setIsVideoLibraryModalOpen(true); setIsMenuOpen(false); }} className="text-left text-slate-600 hover:text-primary-600 transition-colors">Videos</button>
                <a href="https://airtable.com/appaAfaapEmEoFrVm/pagDRYDgvUuEtjO0a/form" target="_blank" rel="noopener noreferrer" className="text-left bg-tourhero-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors w-fit">Join Waitlist</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Founded in 2020 • 4+ Years of Operation • 80+ Destinations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span style={{ color: '#112039' }}>We're not just another marketplace,</span>
              <span className="text-tourhero-red"> we're your partner in growth!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Grow your travel business with TourHero. We empower you to grow by connecting you to global demand, data, and technology, giving you the tools to attract new travelers and scale - no extra resources required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://airtable.com/appaAfaapEmEoFrVm/pagDRYDgvUuEtjO0a/form"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tourhero-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                Join Our Operator Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Learn How It Works
              </button>
            </div>
            <p className="text-sm text-slate-500 italic">
              "Bringing us closer as humans, one journey at a time"
            </p>
          </div>
        </div>
      </section>

      {/* Why Operators Choose TourHero */}
      <section id="why-choose" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Why us?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <p className="text-3xl md:text-4xl font-bold text-tourhero-red mb-2">
                  We partner, not compete
                </p>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  We grow together: operators bring the experiences and on-ground expertise; we bring the reach, tools, and insights.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-tourhero-red" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">You create, we connect</h3>
              <p className="text-slate-600 leading-relaxed">
                Focus on crafting exceptional experiences while we bring you qualified groups. No more chasing leads or managing complex sales funnels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-tourhero-navy" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Your business amplifier</h3>
              <p className="text-slate-600 leading-relaxed">
                We help operators access new markets and clients without increasing CAC, transforming how they grow and sustain their business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-tourhero-red" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">We manage the sales funnel</h3>
              <p className="text-slate-600 leading-relaxed">
                Handle the entire customer acquisition process with real-time insights. From discovery to booking, we've got it covered.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-tourhero-navy" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Consistent, high-value bookings</h3>
              <p className="text-slate-600 leading-relaxed">
                Group trips mean better margins and steady demand. No more one-off bookings or price competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loom Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See TourHero <span className="text-tourhero-red">in Action</span>
            </h2>
            <p className="text-xl text-slate-600">
              Watch how our platform connects operators with travelers through our unique ecosystem
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.loom.com/embed/976f7b580fa6406bbfbfe99c6818337e?sid=684ba27c-9b37-40a8-96d4-52d83f46b223"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="TourHero Platform Overview"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Three-Party Ecosystem */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: '#112039' }}>TourHero Three-Party</span> <span className="text-tourhero-red">Ecosystem</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Trust-Driven, Data-Powered Supply Flywheel connects operators, organizers, and travelers in a seamless ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-tourhero-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Operators (You)</h3>
              <p className="text-slate-600 leading-relaxed">
                Create amazing experiences and authentic local journeys. You focus on what you do best while we handle the rest.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-tourhero-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-800 transition-colors">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">TourHeroes</h3>
              <p className="text-slate-600 leading-relaxed">
                Trip organizers who discover your experiences and customize them for specific groups.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-tourhero-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Travelers</h3>
              <p className="text-slate-600 leading-relaxed">
                People seeking authentic, group travel experiences who join the customized journeys organized by TourHeroes.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsStepByStepModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-tourhero-red rounded-full hover:bg-red-700 transition-colors duration-300 cursor-pointer"
            >
              <span className="text-white font-medium">Step by Step Process</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Operational Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: '#112039' }}>Our Operational</span> <span className="text-tourhero-red">Pillars</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The strategic foundation that powers sustainable growth and exceptional partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-red-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-tourhero-red rounded-xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Insight-Driven Growth</h3>
              <p className="text-lg text-slate-600 mb-4">(Research & Understanding)</p>
              <p className="text-slate-700 leading-relaxed">
                Deep market research and customer insights drive every decision we make, ensuring we understand traveler needs and market dynamics to power sustainable growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-tourhero-navy rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Scalable Technology</h3>
              <p className="text-lg text-slate-600 mb-4">(Product & Infra)</p>
              <p className="text-slate-700 leading-relaxed">
                Robust infrastructure and innovative product development enable seamless operations at scale, connecting operators with global demand efficiently.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-red-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-tourhero-red rounded-xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Market Education</h3>
              <p className="text-lg text-slate-600 mb-4">(Marketing & Communication)</p>
              <p className="text-slate-700 leading-relaxed">
                Strategic marketing and clear communication build awareness and trust, educating the market about unique travel experiences and authentic local journeys.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-tourhero-navy rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Partnership Excellence</h3>
              <p className="text-lg text-slate-600 mb-4">(Relationship & Support)</p>
              <p className="text-slate-700 leading-relaxed">
                Long-term relationship building and dedicated support ensure mutual success, creating a thriving ecosystem where operators and travelers flourish together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Process */}
      <section id="getting-started" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: '#112039' }}>Getting Started</span> <span className="text-tourhero-red">is simple</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Five simple steps from application to receiving your first bookings
            </p>
          </div>

          {/* Horizontal Timeline - Desktop/Tablet */}
          <div className="hidden md:block">
            <div className="relative max-w-6xl mx-auto px-12">
              {/* Timeline Steps Container */}
              <div className="relative">
                {/* Gradient Bar */}
                <div className="absolute top-32 left-0 right-0 h-6 rounded-full overflow-hidden" style={{
                  background: 'linear-gradient(to right, #003366 0%, #1e4d7b 25%, #4169a8 50%, #6b87c4 75%, #c62328 100%)'
                }}>
                  {/* Connection dots on the bar */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-4 h-4 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { num: "01", title: "Fill Out the Form", desc: "Tell us about your business and what makes your experiences unique.", icon: FileText, color: "#003366" },
                    { num: "02", title: "Set Up Your Profile", desc: "Access your personalized operator dashboard to manage offerings and track performance.", icon: UserCircle, color: "#1e4d7b" },
                    { num: "03", title: "Submit Your Itineraries", desc: "Add your best trips, activities, and accommodations to showcase to global travelers.", icon: Map, color: "#4169a8" },
                    { num: "04", title: "Let Maya Do the Work", desc: "Our AI assistant markets and customizes your offerings automatically for each traveler.", icon: Bot, color: "#6b87c4" },
                    { num: "05", title: "Receive Bookings", desc: "Get confirmed groups and real-time insights—all without lifting a finger.", icon: Database, color: "#c62328" }
                  ].map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex flex-col items-center relative">
                        {/* Circle with Icon */}
                        <div
                          className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-8 relative z-10 shadow-lg border-4 transition-transform hover:scale-105"
                          style={{ borderColor: step.color }}
                        >
                          <IconComponent className="w-12 h-12" style={{ color: step.color }} strokeWidth={1.5} />
                        </div>

                        {/* Number and Title */}
                        <div className="mt-16 text-center">
                          <div className="text-3xl font-bold mb-2" style={{ color: step.color }}>
                            {step.num}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden max-w-3xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 w-0.5 bg-slate-300 top-0 bottom-0"></div>

            {/* Timeline Steps */}
            {[
              { num: "01", title: "Fill Out the Form", desc: "Tell us about your business and what makes your experiences unique.", icon: FileText, color: "#003366" },
              { num: "02", title: "Set Up Your Profile", desc: "Access your personalized operator dashboard to manage offerings and track performance.", icon: UserCircle, color: "#1e4d7b" },
              { num: "03", title: "Submit Your Itineraries", desc: "Add your best trips, activities, and accommodations to showcase to global travelers.", icon: Map, color: "#4169a8" },
              { num: "04", title: "Let Maya Do the Work", desc: "Our AI assistant markets and customizes your offerings automatically for each traveler.", icon: Bot, color: "#6b87c4" },
              { num: "05", title: "Receive Bookings", desc: "Get confirmed groups and real-time insights—all without lifting a finger.", icon: Database, color: "#c62328" }
            ].map((step, index) => {
              const IconComponent = step.icon;

              return (
                <div key={index} className="relative mb-12 last:mb-0 flex items-start">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full z-10 flex-shrink-0 shadow-lg mt-2" style={{ backgroundColor: step.color }}></div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 shadow-md flex-shrink-0"
                          style={{ borderColor: step.color }}
                        >
                          <IconComponent className="w-8 h-8" style={{ color: step.color }} strokeWidth={1.5} />
                        </div>
                        <div className="text-2xl font-bold" style={{ color: step.color }}>
                          {step.num}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: '#112039' }}>What TourHeroes say</span> <span className="text-tourhero-red">about us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear directly from the organizers and operators in our network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/618e1c71a67b4427949bdbda56e7b8c9?sid=5f710f36-78e5-4668-ac9e-23e15acf45cc"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="TourHero Testimonial 1"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-tourhero-navy text-white text-xs px-2 py-1 rounded-full font-medium">
                    Testimonial
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  TourHero Experience
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Hear from our community about their experience with TourHero
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/23a5036ca759481698a9b95b916123a2?sid=ae9ea208-f008-4dcc-a7b0-53516dea28fa"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="TourHero Testimonial 2"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-tourhero-navy text-white text-xs px-2 py-1 rounded-full font-medium">
                    Testimonial
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Partnership Success
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Learn how TourHero partnerships have helped grow businesses
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/3950eb93076b48a6b62ef041fdd615f2?sid=decfb806-473c-4046-ba02-71ea6494d4c7"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="TourHero Testimonial 3"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-tourhero-navy text-white text-xs px-2 py-1 rounded-full font-medium">
                    Testimonial
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Operator Insights
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Discover what operators appreciate about the TourHero platform
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/475600e7b6aa4d5baf7a847f15d1da75?sid=3164cb65-cd4d-4e69-896c-3731a85eb4cd"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="TourHero Testimonial 4"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-tourhero-navy text-white text-xs px-2 py-1 rounded-full font-medium">
                    Testimonial
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Community Feedback
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Real experiences from members of the TourHero community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="videos">
        <FaqRouter onShowVideos={() => setIsVideoLibraryModalOpen(true)} />
      </section>

      {/* Contact & Next Steps */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our operator waitlist and let's discuss how we can help grow your business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Join Our Operator Waitlist</h3>
              <div className="text-center">
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ready to expand your reach and grow your business? Join our operator waitlist to get started with TourHero.
                </p>
                <a
                  href="https://airtable.com/appaAfaapEmEoFrVm/pagDRYDgvUuEtjO0a/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-tourhero-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Join Our Operator Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <p className="text-sm text-slate-500 mt-4">
                  Takes less than 2 minutes to complete
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-tourhero-navy mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Americas/Asia Region</h4>
                    <p className="text-slate-600">Regional Team Contact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-tourhero-navy mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-slate-900">US/Europe/Africa/Oceania</h4>
                    <p className="text-slate-600">Regional Team Contact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-tourhero-red mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-slate-900">General Inquiries</h4>
                    <p className="text-slate-600">operators@tourhero.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img src="/tourhero_logo-03.png" alt="TourHero" className="h-8" />
                <span className="ml-2 text-xl font-bold">TourHero</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Bringing people together one journey at a time. Partner with us to expand your reach and grow your business.
              </p>
              <div className="text-sm text-slate-500">
                © 2024 TourHero. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Operators</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('why-choose')} className="hover:text-white transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('getting-started')} className="hover:text-white transition-colors">Getting Started</button></li>
                <li><button onClick={() => setIsVideoLibraryModalOpen(true)} className="hover:text-white transition-colors">Videos</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Regional Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Step by Step Modal */}
      <StepByStepModal
        isOpen={isStepByStepModalOpen}
        onClose={() => setIsStepByStepModalOpen(false)}
      />

      {/* Video Library Modal */}
      <VideoLibraryModal
        isOpen={isVideoLibraryModalOpen}
        onClose={() => setIsVideoLibraryModalOpen(false)}
      />
    </div>
  );
}

export default App;