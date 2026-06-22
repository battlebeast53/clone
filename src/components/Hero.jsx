'use client';
import { useState, useEffect, useRef } from 'react';
import LogosSlider from './LogosSlider';

const SLIDES = [
  "Empowering businesses to embrace the limitless potential of the cloud while maintaining ironclad security",
  "Delivering cost-effective, compliance-aligned cybersecurity solutions that safeguard your data, infrastructure, and growth potential",
  "Enabling fearless innovation with robust security that seamlessly balances privacy, protection, and digital agility"
];

export default function Hero({ onOpenAssessment }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  // Set up carousel slide auto-play
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % SLIDES.length);
      }, 6000); // 6 seconds per slide
    };

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (idx) => {
    setActiveSlide(idx);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      // Restart timer
      timerRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % SLIDES.length);
      }, 6000);
    }
  };

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[638px] xl:min-h-[660px] flex flex-col justify-between text-white bg-[url('/images/landing/LandingHerosection_Mobile.webp')] md:bg-[url('/images/landing/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden pt-28 pb-10">
      
      {/* Container for main content split */}
      <div className="max-w-[1920px] mx-auto w-full px-5 md:px-10 lg:px-24 2xl:px-[150px] flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full mt-4 md:mt-10 lg:mt-16 xl:mt-20">
          
          {/* Left Text Content */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6 max-w-xl lg:max-w-2xl">
            {/* Sliding text wrapper */}
            <div className="relative h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px] overflow-hidden flex items-center">
              {SLIDES.map((slideText, idx) => (
                <div 
                  key={idx}
                  className={`absolute left-0 right-0 text-left font-display font-semibold text-lg sm:text-2xl md:text-2xl lg:text-[32px] lg:leading-[46px] transition-all duration-1000 transform ${
                    idx === activeSlide 
                      ? 'opacity-100 translate-y-0 scale-100 z-10' 
                      : 'opacity-0 translate-y-8 scale-95 -z-10 pointer-events-none'
                  }`}
                >
                  {slideText}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-2">
              <button 
                onClick={() => onOpenAssessment('Hero Free Assessment')}
                className="px-6 py-3.5 bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-white text-sm md:text-base font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer z-20 relative"
              >
                Schedule a Free Assessment
              </button>
            </div>

            {/* Carousel Dots pagination */}
            <div className="flex gap-3 mt-4 items-center">
              {SLIDES.map((_, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className="relative flex items-center justify-center p-1 focus:outline-none"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className="h-2 transition-all duration-300">
                      {isActive ? (
                        <div className="h-2 rounded-full w-7 bg-gradient-to-r from-white to-white/20 shadow-[0_1px_4px_rgba(14,31,53,0.12)] relative overflow-hidden">
                          {/* Animated progress fill bar */}
                          <div className="absolute left-0 top-0 bottom-0 bg-white animate-progress-bar w-full origin-left"></div>
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-colors"></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-4 justify-center items-center">
            <img 
              src="/images/Landingpage/St.foxlogo.webp" 
              alt="St. Fox brand mascot" 
              className="w-[200px] lg:w-[250px] xl:w-[280px] h-auto object-contain animate-float"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos Infinite Scrollbar */}
      <div className="w-full mt-8 md:mt-16 lg:mt-20">
        <LogosSlider />
      </div>

      {/* Custom Styles for Hero animations */}
      <style jsx global>{`
        @keyframes progress-fill {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress-bar {
          animation: progress-fill 6s linear forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
