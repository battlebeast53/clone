'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VigileVideo from '../components/VigileVideo';
import VigileStages from '../components/VigileStages';
import WhatWeDoBest from '../components/WhatWeDoBest';
import PartnersGrid from '../components/PartnersGrid';
import ManagedServicesGrid from '../components/ManagedServicesGrid';
import SectorsCarousel from '../components/SectorsCarousel';
import ExpertiseTabs from '../components/ExpertiseTabs';
import CtaSection from '../components/CtaSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import AssessmentModal from '../components/AssessmentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      {/* Navbar Header */}
      <Navbar onOpenAssessment={handleOpenModal} />

      <main className="flex-grow">
        {/* 1. Hero banner section with sliders */}
        <Hero onOpenAssessment={handleOpenModal} />

        {/* 2. Top-bg: Vigile video framework and interactive lifecycle phases */}
        <div className="bg-no-repeat pb-9 w-full overflow-hidden 2xl:bg-cover 2xl:bg-right bg-cover bg-[url('/images/Landingpage/mobile-bg-top-img.webp')] md:bg-top md:bg-[url('/images/Landingpage/horizontal-scroll-bg.webp')]">
          <VigileVideo />
          <VigileStages onOpenAssessment={handleOpenModal} />
        </div>

        {/* 3. Services tab details */}
        <WhatWeDoBest />

        {/* 4. Strategic technology partner logos */}
        <PartnersGrid />

        {/* 5. Sector-bg: Next-gen managed services grid & scrollable industry carousel */}
        <div className="bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/SecuringSector_Bg.jpg')]">
          <ManagedServicesGrid />
          <SectorsCarousel />
        </div>

        {/* 6. Bottom-bg: checklist ticks grid, CTA banners, and Blog posts */}
        <div className="bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/Innovate_Fearlessly_Bg.jpg')]">
          <ExpertiseTabs onOpenAssessment={handleOpenModal} />
          <CtaSection onOpenAssessment={handleOpenModal} />
          <BlogSection />
        </div>
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Cookie consent overlay banner */}
      <CookieBanner />

      {/* Form Submission modal overlay */}
      <AssessmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedService={selectedService} 
      />
    </div>
  );
}
