'use client';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '../../data/servicesData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';
import DatasheetModal from '../../components/DatasheetModal';

export default function ServicePage({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isDatasheetOpen, setIsDatasheetOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeTab, setActiveTab] = useState('Introduction');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Unwrap params using React.use() or a simple useEffect
  useEffect(() => {
    paramsPromise.then(resolvedParams => {
      setParams(resolvedParams);
    });
  }, [paramsPromise]);

  if (!params) {
    return (
      <div className="min-h-screen bg-[#07111A] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3B73CC]"></div>
      </div>
    );
  }

  const slug = params.slug;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName || data.hero.h1);
    setIsAssessmentOpen(true);
  };

  const handleOpenDatasheet = () => {
    setIsDatasheetOpen(true);
  };

  // Tabs navigation list
  const tabs = [];
  if (data.introduction) tabs.push('Introduction');
  if (data.vigile) tabs.push('VIGILE');
  if (data.datasheet) tabs.push('Datasheet');
  if (data.whySetsApart) tabs.push('Why us?');
  if (data.faqs) tabs.push('FAQs');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(id === 'Whyus?' ? 'Why us?' : id);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="bg-[#07111A] bg-no-repeat bg-cover bg-center lg:min-h-[680px] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-16 text-white relative">
          <div className="px-6 md:px-12 lg:px-24 2xl:px-[150px] w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-[#3B73CC] uppercase tracking-wider font-semibold">
                <a href="/" className="hover:underline">Home</a>
                <span>/</span>
                <span className="text-gray-400">{data.isCategory ? 'Services' : slug.toUpperCase()}</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-[40px] font-bold leading-tight lg:leading-[52px]">
                {data.hero.h1}
              </h1>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-xl">
                {data.hero.subtitle}
              </p>

              <div>
                <button 
                  onClick={() => handleOpenAssessment(data.hero.h1)}
                  className="px-6 py-3 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg"
                >
                  {data.hero.buttonText}
                </button>
              </div>

              {/* Statistics (if available) */}
              {data.hero.stats && (
                <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                  {data.hero.stats.map((stat, i) => (
                    <div key={i} className="min-w-[100px]">
                      <span className="text-[#3B73CC] text-2xl md:text-3xl font-extrabold block">
                        {stat.value}
                      </span>
                      <p className="text-xs text-gray-400 mt-1 select-none font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Illustration/Image Column */}
            <div className="flex justify-center items-center">
              <img 
                src={data.hero.image} 
                alt={data.hero.h1} 
                className="w-full max-w-[500px] h-auto object-contain rounded-lg filter drop-shadow-2xl animate-fade-in"
              />
            </div>

          </div>
        </section>

        {/* 2. Anchor Navigation Tabs (Only for non-categories) */}
        {!data.isCategory && tabs.length > 0 && (
          <div className="sticky top-[64px] bg-[#060d16]/95 backdrop-blur-md border-b border-white/5 z-40 py-3 hidden md:block">
            <div className="max-w-[800px] mx-auto flex justify-between px-6 text-xs md:text-sm font-medium text-gray-400">
              {tabs.map((tab) => {
                const targetId = tab === 'Why us?' ? 'Whyus?' : tab;
                const isTabActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(targetId)}
                    className={`cursor-pointer transition-all duration-300 relative pb-1 hover:text-white ${isTabActive ? 'text-white font-bold' : ''}`}
                  >
                    {tab}
                    {isTabActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#3B73CC] rounded-full animate-pulse"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Anchor Navigation */}
        {!data.isCategory && tabs.length > 0 && (
          <div className="bg-white border-b border-gray-200 p-3 sticky top-[64px] z-40 block md:hidden shadow-sm">
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              {tabs.map((tab) => {
                const targetId = tab === 'Why us?' ? 'Whyus?' : tab;
                const isTabActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(targetId)}
                    className={`px-3 py-1 text-xs rounded-full border transition-all ${isTabActive ? 'bg-[#1A3F7E] text-white border-[#1A3F7E] font-semibold' : 'bg-gray-100 text-gray-600 border-gray-200'}`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Introduction / Capabilities Section */}
        {data.introduction && (
          <section id="Introduction" className="py-12 md:py-20 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
            <div className="max-w-[1920px] mx-auto text-center space-y-4">
              <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                {data.introduction.title}
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                {data.introduction.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 md:pt-12">
                {data.introduction.cards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-50 hover:bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3B73CC]/20 transition-all duration-300 text-left flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-[#3B73CC]/10 text-[#3B73CC] rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-[#1A3F7E] group-hover:text-white transition-all duration-300 select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-bold text-base text-gray-800 tracking-wide mt-4">
                        {card.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light mt-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. VIGILE Framework Section */}
        {data.vigile && (
          <section id="VIGILE" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-gradient-to-br from-[#060c14] to-[#0d1624] text-white">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-wider bg-[#3B73CC]/10 px-3 py-1 rounded-full">
                  Proprietary Framework
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight leading-snug">
                  {data.vigile.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {data.vigile.subtitle}
                </p>
                <div className="pt-4">
                  <a 
                    href="/vigile"
                    className="text-[#3B73CC] hover:text-[#5c92e8] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 group"
                  >
                    Learn about VIGILE Framework
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={data.vigile.image} 
                  alt="VIGILE Framework Integration" 
                  className="w-full max-w-[500px] h-auto object-contain rounded-lg filter drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* 5. Datasheet Download Section */}
        {data.datasheet && (
          <section id="Datasheet" className="py-12 md:py-20 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-[#DDE1E6] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none" style={{ backgroundImage: `url(${data.datasheet.bgImage})` }}></div>
            
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-[60%,40%] gap-8 items-center relative z-10">
              <div className="space-y-6 text-left">
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {data.datasheet.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light max-w-xl">
                  {data.datasheet.subtitle}
                </p>
                <div>
                  <button 
                    onClick={handleOpenDatasheet}
                    className="px-6 py-3 bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] hover:from-[#4a84e0] hover:to-[#2353a3] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded shadow-md transition-all cursor-pointer"
                  >
                    Download Datasheet
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={data.datasheet.image} 
                  alt={`${data.datasheet.name} Datasheet`} 
                  className="w-full max-w-[280px] h-auto object-contain rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* 6. Why Choose Us Section */}
        {data.whySetsApart && (
          <section id="Whyus?" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-[#07111A] text-white relative">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[40%,60%] gap-12 items-start">
              
              <div className="space-y-4 lg:sticky lg:top-[120px]">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  {data.whySetsApart.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-md">
                  We combine elite technical depth with proactive automation to build resilient organizations.
                </p>
              </div>

              <div className="space-y-8">
                {data.whySetsApart.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                    <img 
                      src="/images/SASE/frame.webp" 
                      alt="check" 
                      className="w-6 h-6 object-contain shrink-0 mt-0.5" 
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-base text-[#3B73CC] tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* 7. FAQs Accordion Section */}
        {data.faqs && (
          <section id="FAQs" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[40%,60%] gap-12">
              
              {/* Call to Action Left */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  {data.faqs.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  {data.faqs.subtitle}
                </p>
                <div>
                  <button 
                    onClick={() => handleOpenAssessment(data.faqs.buttonText)}
                    className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs md:text-sm font-semibold rounded shadow transition-all cursor-pointer"
                  >
                    {data.faqs.buttonText}
                  </button>
                </div>
              </div>

              {/* Accordion Right */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
                  Frequently Asked Questions
                </h3>
                {data.faqs.items.map((item, idx) => {
                  const isExpanded = expandedFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                        className="flex items-center justify-between w-full text-left text-gray-900 font-semibold bg-gray-50 p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 text-[#3B73CC] shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-xs md:text-sm font-bold text-gray-800">{item.question}</span>
                        </div>
                        <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="p-4 bg-white border-t border-gray-200 animate-slide-down">
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cookie Consent overlay */}
      <CookieBanner />

      {/* Assessment Form Modal overlay */}
      <AssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
        selectedService={selectedService} 
      />

      {/* Datasheet Form Modal overlay */}
      {data.datasheet && (
        <DatasheetModal 
          isOpen={isDatasheetOpen} 
          onClose={() => setIsDatasheetOpen(false)} 
          datasheetName={data.datasheet.name} 
        />
      )}
    </div>
  );
}
