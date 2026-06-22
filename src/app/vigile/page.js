'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';
import VigileVideo from '../../components/VigileVideo';
import VigileStages from '../../components/VigileStages';

export default function VigilePage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName || 'VIGILE Framework Consultation');
    setIsAssessmentOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* VIGILE Hero Header */}
        <section className="bg-[#07111A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-widest bg-[#3B73CC]/10 px-3 py-1 rounded-full">
              Proprietary Architecture
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Innovate Fearlessly, Protect Relentlessly with the VIGILE Framework
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Transform your cybersecurity strategy with St. Fox's comprehensive VIGILE Framework — designed for enterprises to combat evolving threats with confidence.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => handleOpenAssessment('Vigile Framework Audit')}
                className="px-6 py-3 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg"
              >
                Request VIGILE Alignment Audit
              </button>
            </div>
          </div>
        </section>

        {/* Video demonstration */}
        <section className="bg-white border-b border-gray-100">
          <VigileVideo />
        </section>

        {/* Six stages explanation */}
        <section className="bg-[#07111A] relative">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-[url('/images/Landingpage/horizontal-scroll-bg.webp')] bg-cover bg-top opacity-5 pointer-events-none"></div>
          <VigileStages onOpenAssessment={handleOpenAssessment} />
        </section>

        {/* Custom Framework Value Props */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Designed for CIOs, DPOs, and CISOs
              </h2>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
                VIGILE delivers measurable results by addressing modern threats and building resilient systems that adapt to change. With VIGILE, you are not just securing your organization; you are empowering it to thrive in a connected world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <div className="w-8 h-8 rounded bg-[#3B73CC]/10 text-[#3B73CC] flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-base text-gray-800">Business Aligned</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  We align cybersecurity controls with business goals, ensuring security is an enabler of speed, not a friction point.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <div className="w-8 h-8 rounded bg-[#3B73CC]/10 text-[#3B73CC] flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-base text-gray-800">Continuous Loop</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Threat metrics from detection phases (Identify, Guard) feed directly back into validation (Validate) and enhancement loops.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <div className="w-8 h-8 rounded bg-[#3B73CC]/10 text-[#3B73CC] flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-base text-gray-800">Compliance Native</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Every VIGILE process aligns with international compliance frameworks: ISO 27001, SOC 2, HIPAA, and GDPR/DPDPA.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer and modals */}
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
