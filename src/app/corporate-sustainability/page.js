'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function CorporateSustainabilityPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName || 'Sustainability Consultation');
    setIsAssessmentOpen(true);
  };

  const pillars = [
    {
      title: 'Environmental Footprint',
      desc: 'We actively engage in practices that minimize our carbon emissions, optimize office power, reduce digital waste, and work towards a cleaner planet.',
      image: '/images/CorporateSustainability/Environmental.webp'
    },
    {
      title: 'Social Responsibility',
      desc: 'We believe in making a meaningful contribution to society by promoting social welfare, diversity, equal opportunities, and active community engagement.',
      image: '/images/CorporateSustainability/Socialresponsibility.webp'
    },
    {
      title: 'Responsible Economic Value',
      desc: 'We create economic value responsibly, ensuring our growth supports local economies, ethical trading, and clean cybersecurity architectures.',
      image: '/images/CorporateSustainability/Economicimpact.webp'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Sustainability Hero Section */}
        <section className="bg-[#07111A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-widest bg-[#3B73CC]/10 px-3 py-1 rounded-full">
              Growth with Purpose
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto uppercase">
              Corporate Sustainability
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Beyond profit, purpose. Building a better future by weaving ESG (Environmental, Social, and Governance) principles into our growth strategy, impacting lives everywhere.
            </p>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
          <div className="max-w-[1920px] mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Three Pivotal Pillars
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                We are committed to fostering a sustainable future through innovative practices. Our dedication revolves around three key domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {pillars.map((pil, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#3B73CC]/25 transition-all text-left">
                  <div className="h-48 overflow-hidden relative bg-gray-200">
                    <img 
                      src={pil.image} 
                      alt={pil.title} 
                      className="w-full h-full object-cover select-none" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-extrabold text-lg text-gray-800 tracking-wide">
                      {pil.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical AI Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-[#07111A] text-white relative">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Illustration Left */}
            <div className="flex justify-center order-last lg:order-first">
              <div className="relative rounded-2xl border-8 border-white/5 overflow-hidden shadow-2xl">
                <img 
                  src="/images/CorporateSustainability/privacyprovisions.webp" 
                  alt="AI Governance Ethics" 
                  className="w-full max-w-[500px] h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Info Right */}
            <div className="space-y-6 text-left">
              <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-wider bg-[#3B73CC]/10 px-3 py-1 rounded-full">
                AI & Ethics Governance
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Supervising Artificial Intelligence: Emphasizing Fundamental Principles
              </h2>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                In the realm of artificial intelligence management, it remains crucial to uphold foundational principles. Despite the rapid advancements in AI technologies, the basics continue to be of paramount importance.
              </p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                We design and support algorithms that respect user privacy by default, operate transparently without racial or language bias, and strictly avoid unsafe data training collections.
              </p>
            </div>

          </div>
        </section>

        {/* Final Statement */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Guiding Progress for a Brighter Future
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              We continually audits our supply chain, emissions data, and employee welfare programs to keep our operations transparent and positive.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => handleOpenAssessment("Sustainability ESG Query")}
                className="px-6 py-3 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg"
              >
                Contact our ESG Board
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
      <AssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
        selectedService={selectedService} 
      />
    </div>
  );
}
