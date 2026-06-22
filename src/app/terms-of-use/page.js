'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function TermsOfUsePage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsAssessmentOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Terms Header */}
        <section className="bg-[#07111A] text-white pt-28 pb-12 lg:pt-36 lg:pb-16 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xs text-gray-400 font-bold uppercase select-none">
              Effective Date: December 18, 2023
            </p>
          </div>
        </section>

        {/* Content body */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white text-left text-gray-800">
          <div className="max-w-4xl mx-auto space-y-8 text-xs md:text-sm font-light leading-relaxed">
            
            <p>
              The following terms and conditions (the &quot;Terms of Use&quot;) govern your use of the St. Fox website including https://www.stfox.com, https://www.saintfox.com and its affiliate websites (the &quot;Site&quot;). By using the Site, you signify your acceptance of these Terms of Use. If you do not agree to these Terms of Use, you may not use the Site.
            </p>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                1. Definitions
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>&quot;St. Fox&quot;</strong> refers to Saint Fox Consultancy (P) Ltd., its subsidiaries and affiliates.
                </li>
                <li>
                  <strong>&quot;Site&quot;</strong> refers to the website located at https://www.stfox.com and https://www.saintfox.com owned and operated by St. Fox.
                </li>
                <li>
                  <strong>&quot;User&quot;</strong> refers to you, the person browsing the Site.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                2. Revisions
              </h2>
              <p>
                St. Fox may revise these Terms of Use at any time without notice to you. You are responsible for regularly reviewing these Terms of Use. Your continued use of the Site following any such changes constitutes your acceptance of the revised Terms of Use.
              </p>
              <p>
                Certain areas of the Site may have different terms of use posted. If there is a conflict between these Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                3. Access Control &amp; Monitoring
              </h2>
              <p>
                St. Fox may terminate your access to the Site at any time for any reason. St. Fox reserves the right to monitor access to the Site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                4. Ownership &amp; Intellectual Property
              </h2>
              <p>
                All content, visuals, logs, and illustrations displayed on the Site are the exclusive intellectual property of Saint Fox Consultancy (P) Ltd. and may not be reproduced, copied, or hotlinked without explicit written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                5. Disclaimer of Warranties
              </h2>
              <p>
                THE SITE AND ITS CONTENTS ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. ST. FOX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND SECURITY FITNESS FOR PARTICULAR PURPOSES.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                6. Limitation of Liability
              </h2>
              <p>
                IN NO EVENT SHALL ST. FOX BE LIABLE FOR DIRECT, INDIRECT, CONSEQUENTIAL, OR SPECIAL DAMAGES RELATING TO SYSTEM DOWNTIME, SECURITY INCIDENTS, OR DATA DISCOVERY ERRORS ENCOUNTERED BY LOGGING OR BROWSING.
              </p>
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
