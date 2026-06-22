'use client';

const SERVICES = [
  {
    id: 1,
    title: 'Managed Cloud Security',
    description: 'Protect and optimize your cloud environments with modern solutions like CNAPP (Cloud-Native Application Protection Platform) to ensure comprehensive, scalable cloud security.'
  },
  {
    id: 2,
    title: 'Security for AI',
    description: 'Test and strengthen your AI models against evolving threats with GenAI Risk Assurance, ensuring your Large Language Models (LLMs) are secure, ethical, and reliable.'
  },
  {
    id: 3,
    title: 'Zero Trust Network Access',
    description: 'Implement a Zero Trust architecture with services like SSE, UEBA, DLP, and SSO, delivering secure, identity-driven access without exposing internal resources.'
  },
  {
    id: 4,
    title: 'Extended Detection & Response',
    description: 'Get 24/7 security operations and extended threat detection and response (MDR), ensuring real-time monitoring, rapid incident handling, and continuous peace of mind.'
  },
  {
    id: 5,
    title: 'Identity and Access Management',
    description: 'Secure user access and streamline identity management with ISPM, IGA, PAM, and SSO solutions, reducing risks of credential abuse and improving compliance.'
  },
  {
    id: 6,
    title: 'Post-Quantum Cryptography',
    description: 'Prepare your organization to withstand future quantum computing threats with proactive cryptographic assessments and quantum-safe transition strategies.'
  }
];

export default function ManagedServicesGrid() {
  return (
    <div className="w-full text-white py-16 px-5 lg:px-24 2xl:px-[150px] space-y-10">
      
      {/* Header Slogan */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold leading-tight">
          Seamless, Scalable and Smart Next-Gen Managed Services
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-light leading-relaxed">
          We offer a full spectrum of managed security and resilience services designed for the evolving digital landscape helping organizations stay secure, compliant, and confidently ahead of emerging threats.
        </p>
      </div>

      {/* Responsive 3 Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-6">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col p-6 rounded-lg bg-black/45 border border-[#242424] backdrop-blur-[12px] hover:border-white/20 hover:bg-black/60 transition-all duration-300 group"
          >
            {/* Header Accent Line & Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-gradient-to-b from-[#3B73CC] to-[#1A3F7E] rounded-full"></div>
              <h3 className="text-base sm:text-[17px] font-bold group-hover:text-[#3B73CC] transition-colors">
                {service.title}
              </h3>
            </div>
            
            {/* Description Details */}
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed flex-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
