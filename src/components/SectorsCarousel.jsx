'use client';

const SECTORS = [
  {
    id: 1,
    title: 'Banking, Finance & Insurance',
    description: 'Fortifying financial systems with zero-trust security, regulatory compliance, and real-time threat intelligence.',
    image: '/images/Landingpage/Banking_Finance.webp'
  },
  {
    id: 2,
    title: 'Healthcare & Life Sciences',
    description: 'Protecting patient data and research systems with HIPAA-compliant, privacy-focused cloud environments.',
    image: '/images/Landingpage/Healthcare.webp'
  },
  {
    id: 3,
    title: 'Retail & E-Commerce',
    description: 'Guarding customer data, payment systems, and inventory workflows while ensuring 24/7 operational uptime.',
    image: '/images/Landingpage/Retail_E-Commerce.webp'
  },
  {
    id: 4,
    title: 'Manufacturing',
    description: 'Securing OT/IT integration and supply chains with robust cloud frameworks and anomaly detection systems.',
    image: '/images/Landingpage/Manufacturing.webp'
  },
  {
    id: 5,
    title: 'Telecom & Media',
    description: 'Ensuring secure and scalable digital infrastructure for high-traffic content delivery, streaming, and connectivity services.',
    image: '/images/Landingpage/Telecom_Media.webp'
  },
  {
    id: 6,
    title: 'Agro and F&B Industries',
    description: 'Enabling traceability, IoT data protection, and digital supply chain resilience for agri-tech and food ecosystems.',
    image: '/images/Landingpage/Agro_Industries.webp'
  }
];

export default function SectorsCarousel() {
  // Double the list for seamless continuous infinite loop scroll
  const doubleSectors = [...SECTORS, ...SECTORS];

  return (
    <div className="w-full text-white py-16 overflow-hidden relative select-none">
      {/* Edge Fading Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#07111A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#07111A] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-5 lg:px-24 2xl:px-[150px] space-y-6 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold">
          Securing Every Sector
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
          From critical infrastructure to consumer-facing platforms, we customize cloud security and engineering solutions to meet the unique needs of every industry we touch.
        </p>
      </div>

      {/* Infinite scrolling track container */}
      <div className="flex w-max items-center">
        <div className="flex animate-scrollll gap-6 hover-pause py-4">
          {doubleSectors.map((sector, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-center p-6 rounded-[8px] bg-white/5 border border-white/10 backdrop-blur-[21px] h-[160px] w-[320px] sm:w-[380px] shrink-0 space-y-2 select-none hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Header Grid containing image icon and Title */}
              <div className="flex items-center gap-4">
                <img 
                  src={sector.image} 
                  alt={`${sector.title} icon`} 
                  className="w-10 h-10 object-contain filter invert brightness-200"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base font-semibold text-left">
                  {sector.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[11px] sm:text-xs text-gray-300 text-left leading-relaxed font-light">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
