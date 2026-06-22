'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function CareersPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName || 'Careers Consultation');
    setIsAssessmentOpen(true);
  };

  const openPositions = [
    {
      title: 'Senior Pen-Tester (VAPT)',
      location: 'Pune, India (Hybrid)',
      type: 'Full-time',
      experience: '4+ Years',
      desc: 'Conduct manual and automated network/application penetration tests, source code analysis, and cloud configuration audits.'
    },
    {
      title: 'SOC Analyst (Tier 2)',
      location: 'Singapore (On-site)',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Monitor SIEM/EDR consoles, triage advanced incidents, coordinate containment, and engineer custom detection rules.'
    },
    {
      title: 'Cloud Security Architect',
      location: 'Remote (US/India)',
      type: 'Full-time',
      experience: '6+ Years',
      desc: 'Design secure landing zones on AWS and Azure, configure DSPM/CSPM toolsets, and implement secure DevSecOps pipelines.'
    },
    {
      title: 'Generative AI Security Engineer',
      location: 'Pune, India (Hybrid)',
      type: 'Full-time',
      experience: '2+ Years',
      desc: 'Conduct security reviews of LLM agents, implement BISAS filters, and perform prompt-injection stress testing.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Careers Hero Section */}
        <section className="bg-[#07111A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-widest bg-[#3B73CC]/10 px-3 py-1 rounded-full">
              Join the Tribe
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Crave a career that sparks your soul and feeds your curiosity.
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              We believe in lifelong learning and endless possibilities. Passion ignites. Growth propels. Join us on the journey.
            </p>
            <div className="pt-4">
              <a 
                href="#openings"
                className="px-6 py-3 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg inline-block"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Copy */}
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Burning Bright: A Culture Fueled by Passion
                </h2>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  St. Fox isn't just a company; it's a community. A vibrant tapestry woven from passionate individuals, united by a shared belief in the power of good culture, unwavering integrity, and the boundless potential of diversity.
                </p>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  At St. Fox, passion isn't just a buzzword; it's the lifeblood that pumps through the veins of every project, every interaction, every endeavor. We believe that when people ignite their passions, they illuminate the world around them. That's why we foster an environment where curiosity is celebrated, creativity is encouraged, and innovation thrives. We empower our people to take ownership, push boundaries, and chase ambitious dreams.
                </p>
              </div>

              <div className="space-y-4 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-800">
                  Building a Better Tomorrow, Together
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  We champion diversity and inclusion, knowing that different perspectives make us stronger, more innovative, and more attuned to the needs of the world around us. In everything we do, integrity is our guiding light. We operate with transparency, honesty, and fairness, both within our walls and in our dealings.
                </p>
              </div>
            </div>

            {/* Right Graphic/Illustration */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl border-8 border-gray-100 overflow-hidden shadow-2xl">
                <img 
                  src="/images/Aboutus/culture.webp" 
                  alt="St. Fox Tribe Culture" 
                  className="w-full max-w-[500px] h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Open Positions List */}
        <section id="openings" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1920px] mx-auto space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Current Open Opportunities
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light max-w-xl mx-auto">
                Ready to make security a catalyst for growth? Explore our open roles and apply to join the Tribe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {openPositions.map((pos, idx) => (
                <div 
                  key={idx} 
                  className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#3B73CC]/25 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="space-y-2 flex-1 text-left">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-extrabold text-lg text-gray-800 tracking-wide">
                        {pos.title}
                      </h3>
                      <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold rounded-full select-none">
                        Active
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-400 font-medium">
                      <span>{pos.location}</span>
                      <span>&bull;</span>
                      <span>{pos.type}</span>
                      <span>&bull;</span>
                      <span>Exp: {pos.experience}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light pt-1">
                      {pos.desc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href={`mailto:careers@stfox.com?subject=Application for ${pos.title}`}
                      className="px-5 py-2.5 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow inline-block"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-xs text-gray-500 font-light">
                Don't see your role? We're always looking for passionate builders. Send your resume to{' '}
                <a href="mailto:careers@stfox.com" className="text-[#1A3F7E] font-bold hover:underline">
                  careers@stfox.com
                </a>
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
