'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TABS_DATA = [
  {
    key: 'Security for AI',
    title: 'Security for AI',
    description: 'Safeguard your AI models and data pipelines with enterprise-grade security. \n\nWe implement robust governance frameworks, real-time threat detection, and regulatory compliance controls to protect against evolving AI-specific risks. \n\nFrom training to deployment, we ensure your AI systems remain secure, reliable, and trustworthy.',
    image: '/images/Landingpage/SecurityAI.webp',
    link: '/ai-security'
  },
  {
    key: 'Managed Services',
    title: 'Managed Services',
    description: 'Our Managed Services streamline your cloud operations, reduce overheads, and ensure seamless performance at scale. \n\nWe provide 24x7 monitoring, proactive maintenance, and rapid issue resolution to keep your infrastructure running smoothly. \n\nWith us, your team can focus on innovation while we handle the complexity.',
    image: '/images/Landingpage/Managedservice.webp',
    link: '/managed-services'
  },
  {
    key: 'Specialized Services',
    title: 'Specialized Services',
    description: "Our Specialized Services tackle complex, mission-critical challenges across cloud, cybersecurity and regulatory compliance.\n\nLed by seasoned experts, we deliver tailored strategies and hands-on execution to meet your unique needs.\n\nFrom security audits to compliance mandates or custom architectures—we've got you covered.",
    image: '/images/Landingpage/Specializedservice.webp',
    link: '/specializedservice'
  },
  {
    key: 'Data Services',
    title: 'Data Services',
    description: 'Transform your data into a strategic asset with our end-to-end data services. \n\nWe help you harness advanced analytics, build modern data platforms, and implement robust governance frameworks.\n\nFrom data integrity to actionable insights, we ensure your data drives real business value.',
    image: '/images/Landingpage/Dataservice.webp',
    link: '/data-services'
  },
  {
    key: 'Cloud Engineering',
    title: 'Cloud Engineering',
    description: "Accelerate innovation with cloud-native architectures built for performance, security, and scale.\n\nOur Cloud Engineering services help you design, deploy, and optimize infrastructure tailored to your business goals.\n\nWhether you're migrating to the cloud or modernizing existing systems, we ensure a seamless, future-ready transformation.",
    image: '/images/Landingpage/Cloudengineering.webp',
    link: '/cloud-engineering'
  }
];

export default function WhatWeDoBest() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayTab, setDisplayTab] = useState(0);

  const selectedData = TABS_DATA[displayTab];

  // Smooth fade transition between tab items
  const handleTabClick = (idx) => {
    if (idx === activeTab) return;
    setActiveTab(idx);
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayTab(idx);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="w-full bg-[#07111A] text-white py-16 px-5 lg:px-24 2xl:px-[150px] overflow-hidden">
      
      {/* Title & Slogans Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          What We Do Best
        </h2>
        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
          We deliver comprehensive, cloud-first security and engineering solutions tailored to meet the evolving needs of modern businesses. From securing your cloud infrastructure to enabling AI-safe environments, our end-to-end services are built for tomorrow's challenges.
        </p>
        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed hidden md:block">
          Designed to empower organizations of all sizes and across industries, we help you build, scale, and thrive in a digital-first world with confidence and resilience.
        </p>
      </div>

      {/* Tabs Selector Bar */}
      <div className="flex flex-wrap justify-center mt-12 border-b border-white/10 overflow-x-auto whitespace-nowrap">
        {TABS_DATA.map((tab, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={tab.key}
              onClick={() => handleTabClick(idx)}
              className={`flex items-center gap-2 px-5 py-3 transition-colors duration-300 border-b-2 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                isActive 
                  ? 'border-white text-white opacity-100' 
                  : 'border-transparent text-gray-400 opacity-60 hover:opacity-100'
              }`}
            >
              {tab.key}
            </button>
          );
        })}
      </div>

      {/* Selected Tab content display layout */}
      <div 
        className={`min-h-[350px] flex flex-col md:flex-row justify-between items-center mt-12 gap-10 max-w-6xl mx-auto transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
        }`}
      >
        {/* Left Column Text Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            {selectedData.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed whitespace-pre-line">
            {selectedData.description}
          </p>
          <div className="pt-2">
            <Link 
              href={selectedData.link}
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-[#3B73CC] transition-colors group"
            >
              Learn More
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column Image Details */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative rounded-xl border-[6px] border-white/10 overflow-hidden shadow-2xl p-4 bg-white/5 backdrop-blur flex justify-center items-center">
            <img 
              src={selectedData.image} 
              alt={`${selectedData.title} service illustration`}
              className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
