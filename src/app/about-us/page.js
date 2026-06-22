'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function AboutUsPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsAssessmentOpen(true);
  };

  const strengths = [
    {
      title: '300+ Years Leadership Experience',
      desc: 'Founded by leaders from global giants like Cisco, Microsoft, Wipro, and IBM.',
      icon: '/images/Aboutus/Leadership.webp'
    },
    {
      title: 'Alumni of Premier Institutes',
      desc: 'Our specialists are alumni of IITs, INSEAD, Wharton, and other global centers of excellence.',
      icon: '/images/Aboutus/institutes.webp'
    },
    {
      title: '110+ Certified Specialists',
      desc: 'Holding credentials like CCIE, CEH Master, ISO 27001 Lead Auditor, CISSP, and more.',
      icon: '/images/Aboutus/specialists.webp'
    },
    {
      title: 'Cross-Industry Exposure',
      desc: 'Serving leaders in Telecom, BFSI, Healthcare, Manufacturing, Retail, and AgriTech.',
      icon: '/images/Aboutus/exposure.webp'
    },
    {
      title: 'Culture of Learning & Innovation',
      desc: 'Regular upskilling, dedicated AI labs, and constant research into emerging threat matrices.',
      icon: '/images/Aboutus/culture.webp'
    },
    {
      title: 'Customer-First Mindset',
      desc: 'We map security controls to enable business agility and confidence, never constraint.',
      icon: '/images/Aboutus/mindset.webp'
    }
  ];

  const almaMaters = [
    { name: 'IIT Kharagpur', logo: '/images/Aboutus/indian_institute_of_technology_kharagpur.webp' },
    { name: 'INSEAD', logo: '/images/Aboutus/Insead.webp' },
    { name: 'Savitribai Phule', logo: '/images/Aboutus/savitribai_phule.webp' },
    { name: 'SOIL School of Business', logo: '/images/Aboutus/soil_n_management.webp' },
    { name: 'IIBM', logo: '/images/Aboutus/iibm.webp' }
  ];

  const certifications = [
    { name: 'CISSP', logo: '/images/Aboutus/CISSP.webp' },
    { name: 'CEH Master', logo: '/images/Aboutus/Cehmaster.webp' },
    { name: 'CCIE Security', logo: '/images/Aboutus/Cciesecurity.webp' },
    { name: 'CCIE Service Provider', logo: '/images/Aboutus/Ccieserviceprovider.webp' },
    { name: 'CCIE Switching', logo: '/images/Aboutus/Ccieswitching.webp' },
    { name: 'ISO', logo: '/images/Aboutus/iso.webp' }
  ];

  const clientLogos = [
    { src: '/images/OurCustomer/Amdocsnew.svg', alt: 'Amdocs' },
    { src: '/images/OurCustomer/Arcteranew.svg', alt: 'Arctera' },
    { src: '/images/OurCustomer/Emcurenew.svg', alt: 'Emcure' },
    { src: '/images/OurCustomer/Exela.svg', alt: 'Exela' },
    { src: '/images/OurCustomer/FIAT.svg', alt: 'FIAT' },
    { src: '/images/OurCustomer/Futuregenerali.svg', alt: 'Future Generali' },
    { src: '/images/OurCustomer/IBGroup.svg', alt: 'IB Group' },
    { src: '/images/OurCustomer/Kpitnew.svg', alt: 'KPIT' },
    { src: '/images/OurCustomer/Kytesnew.svg', alt: 'Kytes' },
    { src: '/images/OurCustomer/LTImindtree.svg', alt: 'LTI Mindtree' },
    { src: '/images/OurCustomer/Nimhansnew.svg', alt: 'NIMHANS' },
    { src: '/images/OurCustomer/Patternnew.svg', alt: 'Pattern' },
    { src: '/images/OurCustomer/Secureview.svg', alt: 'SecureView' },
    { src: '/images/OurCustomer/Skyflow.svg', alt: 'Skyflow' },
    { src: '/images/OurCustomer/Zensarnew.svg', alt: 'Zensar' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#07111A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-wider bg-[#3B73CC]/10 px-3 py-1 rounded-full">
                Get to Know Us
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                About Us
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
                United by Purpose. Strengthened by Expertise. Inspired by Innovation.
              </p>
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
                We call ourselves a Tribe because we believe in something deeper than just being a team — we believe in belonging, trust, and shared purpose. Our Tribe is a collective of seasoned cybersecurity professionals, cloud engineers, architects, data scientists, and innovators who bring global expertise and local insight to every engagement.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/Aboutus/Officeaboutus.webp" 
                alt="St. Fox Office" 
                className="w-full max-w-[500px] h-auto object-cover rounded-xl shadow-2xl filter drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
          <div className="max-w-[1920px] mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Our Strengths
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              We leverage deep industry wisdom and next-generation frameworks to secure and accelerate digital scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
              {strengths.map((str, i) => (
                <div key={i} className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-start text-left hover:shadow-md hover:border-[#3B73CC]/25 transition-all">
                  <img src={str.icon} alt={str.title} className="w-10 h-10 object-contain mb-6 select-none" />
                  <h3 className="font-bold text-base text-gray-800 tracking-wide">{str.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light mt-3">{str.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alma Mater Section */}
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-gray-50">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 select-none">
              Alma Mater
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4">
              {almaMaters.map((alma, i) => (
                <img 
                  key={i} 
                  src={alma.logo} 
                  alt={alma.name} 
                  className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all select-none" 
                  title={alma.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications Section */}
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white border-t border-gray-100">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 select-none">
              Professional Certifications
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4">
              {certifications.map((cert, i) => (
                <img 
                  key={i} 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all select-none" 
                  title={cert.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-[#07111A] text-white overflow-hidden relative">
          <div className="max-w-[1920px] mx-auto px-6 text-center space-y-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Trusted by Industry Leaders Across the Globe
            </h2>
            
            {/* Infinite Horizontal Logo Track */}
            <div className="relative w-full flex items-center overflow-hidden py-4">
              <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
                {clientLogos.concat(clientLogos).map((logo, idx) => (
                  <img 
                    key={idx} 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all select-none shrink-0" 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action: Join / Secure */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Let's Secure What Matters Most
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              Empower your enterprise with certified security analysts, automated compliance pipelines, and custom cyber defenses.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={() => handleOpenAssessment("About Us Consultation")}
                className="px-6 py-3 bg-[#1A3F7E] hover:bg-[#153468] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg"
              >
                Schedule an Assessment
              </button>
              <a 
                href="/careers"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer"
              >
                Join the Tribe
              </a>
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
