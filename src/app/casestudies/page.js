'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function CaseStudiesPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName || 'Case Studies consultation');
    setIsAssessmentOpen(true);
  };

  const blogPosts = [
    {
      title: 'Securing AI Before the Damage Is Visible',
      tag: 'AI Security',
      date: 'May 12, 2024',
      image: '/images/Blog/SecuringAIBeforeDamageDummy.png',
      desc: 'Exploring structural risks in LLM integrations and defensive guardrails.'
    },
    {
      title: 'Our Journey Towards CERT-In Empanelment',
      tag: 'Compliance',
      date: 'Apr 28, 2024',
      image: '/images/Blog/CertInEmpanelment.png',
      desc: 'Inside the testing cycles, controls mapping, and frameworks required for government auditing.'
    },
    {
      title: 'Cybershorts | Top 5 Cybersecurity Alerts',
      tag: 'Threat Intelligence',
      date: 'Apr 15, 2024',
      image: '/images/Blog/CybershortsTop5Dummy.png',
      desc: 'Weekly roundup of active malware, zero-day CVEs, and immediate remediation steps.'
    },
    {
      title: 'Protecting Our Digital World',
      tag: 'Cybersecurity',
      date: 'Mar 30, 2024',
      image: '/images/Blog/DigitalWorld.png',
      desc: 'The role of proactive threat hunting and active verification frameworks in protecting global brands.'
    },
    {
      title: 'Saviynt Partners with St. Fox to Build a Scalable, Trusted Identity Ecosystem for India',
      tag: 'Partnerships',
      date: 'Mar 10, 2024',
      image: '/images/Blog/Saviynt_SFC.png',
      desc: 'Converging premium IAM orchestration and identity governance with local sovereignty requirements.'
    },
    {
      title: 'Being Human in era of AI',
      tag: 'AI Ethics',
      date: 'Feb 24, 2024',
      image: '/images/Blog/eraofAI.png',
      desc: 'Balancing automated systems with human validation and behavioral analysis.'
    },
    {
      title: 'Prompt Injection - Practical Mitigations',
      tag: 'AI Security',
      date: 'Feb 12, 2024',
      image: '/images/Blog/Mitigations.png',
      desc: 'Step-by-step techniques to filter system inputs and secure your generative pipelines.'
    },
    {
      title: 'Cybersecurity Concerns and Preparedness for the Paris 2024 Olympics',
      tag: 'Cybersecurity',
      date: 'Jan 28, 2024',
      image: '/images/Blog/Olympics.png',
      desc: 'Analyzing threats against global massive events and coordinated response strategies.'
    },
    {
      title: 'Democratic Elections and AI',
      tag: 'AI Ethics',
      date: 'Jan 15, 2024',
      image: '/images/Blog/Democratic.png',
      desc: 'Addressing deepfakes, synthetic media, and information operations on democratic processes.'
    },
    {
      title: 'Navigating the Next Frontier: The State of Data Centers in India',
      tag: 'Cloud & Infrastructure',
      date: 'Dec 18, 2023',
      image: '/images/Blog/Navigating.png',
      desc: 'Green facilities, latency optimization, and localized cloud computing scaling.'
    },
    {
      title: 'AI Attack Mitigation',
      tag: 'AI Security',
      date: 'Nov 30, 2023',
      image: '/images/Blog/aimitigation.png',
      desc: 'Defensive blueprints against adversarial neural network attacks.'
    },
    {
      title: 'Intricate world of New age Tech',
      tag: 'Cybersecurity',
      date: 'Nov 12, 2023',
      image: '/images/Blog/Intricate.png',
      desc: 'Security vectors in IoT, edge devices, and quantum cryptography.'
    },
    {
      title: 'TikTok Banned Reasons',
      tag: 'Compliance',
      date: 'Oct 28, 2023',
      image: '/images/Blog/TikTok.png',
      desc: 'Reviewing data sovereignty, surveillance concerns, and app container data transfers.'
    },
    {
      title: 'National Defense in Cyberspace',
      tag: 'Cybersecurity',
      date: 'Oct 10, 2023',
      image: '/images/Blog/Cyberspace.png',
      desc: 'Nation-state threat landscapes, infrastructure hardening, and defensive coordination.'
    },
    {
      title: 'AI Integration & What could go wrong',
      tag: 'AI Security',
      date: 'Sep 22, 2023',
      image: '/images/Blog/AIIntegration.png',
      desc: 'Analyzing vulnerabilities introduced by secondary plugin systems and agent models.'
    },
    {
      title: 'Bridging the Language Divide: The Quest for Linguistic Equity in AI',
      tag: 'AI Ethics',
      date: 'Sep 05, 2023',
      image: '/images/Blog/Linguisticequity.png',
      desc: 'Making large language models inclusive, accurate, and fair across local dialects.'
    },
    {
      title: 'How Tech can expedite Sustainability',
      tag: 'Sustainability',
      date: 'Aug 18, 2023',
      image: '/images/Blog/Sustainability.png',
      desc: 'Ethical algorithms, green computing cooling, and carbon-negative architectures.'
    },
    {
      title: 'AI for India',
      tag: 'AI Ethics',
      date: 'Aug 02, 2023',
      image: '/images/Blog/AIIndia.png',
      desc: 'Utilizing neural architectures to address local public services, farming, and commerce.'
    },
    {
      title: 'Scalable & Flexible Security Architectures',
      tag: 'Cloud & Infrastructure',
      date: 'Jul 20, 2023',
      image: '/images/Blog/Architectures.png',
      desc: 'Zero-trust networks that scale seamlessly with multi-cloud deployments.'
    },
    {
      title: 'EU adopts a new AI law',
      tag: 'Compliance',
      date: 'Jun 28, 2023',
      image: '/images/Blog/EUadopts.png',
      desc: 'Understanding the statutory compliance boundaries of the landmark EU AI Act.'
    },
    {
      title: 'Automated Response Mechanisms',
      tag: 'Threat Intelligence',
      date: 'Jun 12, 2023',
      image: '/images/Blog/Mechanisms.png',
      desc: 'Accelerating threat containment from hours to milliseconds using playbook automation.'
    },
    {
      title: 'Navigating the Crossroads',
      tag: 'Cybersecurity',
      date: 'May 30, 2023',
      image: '/images/Blog/Crossroads.png',
      desc: 'Choosing between traditional boundary controls and cloud-native zero-trust.'
    },
    {
      title: 'Embracing the Hybrid Cloud',
      tag: 'Cloud & Infrastructure',
      date: 'May 10, 2023',
      image: '/images/Blog/Embracing.png',
      desc: 'Securing multi-cloud directories and unifying public/private clusters.'
    },
    {
      title: 'Securing the Code in a Gen AI World',
      tag: 'AI Security',
      date: 'Apr 28, 2023',
      image: '/images/Blog/GenAI.png',
      desc: 'Preventing code leakages and monitoring developer assistant credentials.'
    },
    {
      title: 'The Guardian Angel in the Cloud',
      tag: 'Cloud & Infrastructure',
      date: 'Apr 12, 2023',
      image: '/images/Blog/Guardian.png',
      desc: 'How CSPM networks continually audit buckets, permissions, and threat paths.'
    },
    {
      title: 'Unleashing Creativity & Efficiency',
      tag: 'AI Ethics',
      date: 'Mar 28, 2023',
      image: '/images/Blog/Unleashing.png',
      desc: 'Enhancing professional efficiency using generative workflows while protecting corporate datasets.'
    }
  ];

  const tags = ['All', 'AI Security', 'Cybersecurity', 'Compliance', 'Cloud & Infrastructure', 'AI Ethics', 'Threat Intelligence'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Insights Hero */}
        <section className="bg-[#07111A] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-center space-y-6">
            <span className="text-xs text-[#3B73CC] font-bold uppercase tracking-widest bg-[#3B73CC]/10 px-3 py-1 rounded-full">
              Blog & Insights
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Our Perspective on Cyber Defense & Tech
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Explore the latest cybersecurity strategies, compliance deep-dives, AI ethics analyses, and technical case studies compiled by the St. Fox Tribe.
            </p>
          </div>
        </section>

        {/* Filter Toolbar & Cards */}
        <section className="py-12 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white">
          <div className="max-w-[1920px] mx-auto space-y-12">
            
            {/* Search and Tags */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center border-b border-gray-100 pb-8">
              {/* Tag filters */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${selectedTag === tag ? 'bg-[#1A3F7E] text-white border-[#1A3F7E]' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="w-full max-w-sm flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-[#3B73CC]/45 focus-within:bg-white transition-all">
                <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full text-xs bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Articles Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 text-gray-400 text-sm">
                No articles matching your criteria. Try adjusting filters or search query.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <article 
                    key={idx} 
                    className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#3B73CC]/20 hover:bg-white transition-all duration-300 group text-left"
                  >
                    {/* Image block */}
                    <div className="h-48 overflow-hidden bg-gray-200 relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {post.tag}
                      </span>
                    </div>

                    {/* Content block */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] text-gray-400 font-bold uppercase">{post.date}</span>
                        <h3 className="font-extrabold text-base text-gray-800 tracking-wide line-clamp-2 group-hover:text-[#1A3F7E] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light line-clamp-3 mt-1">
                          {post.desc}
                        </p>
                      </div>

                      {/* Read link */}
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-xs font-bold text-[#1A3F7E] group-hover:text-[#3B73CC] transition-colors inline-flex items-center gap-1">
                          Read Full Article
                          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
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
