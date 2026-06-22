'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('stfox_consent');
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('stfox_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('stfox_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-[9999] bg-white text-black border-t border-black/10 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] px-4 py-4 md:px-8 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-500 ease-in-out transform translate-y-0">
      <div className="flex-1 max-w-4xl">
        <h4 id="cookie-banner-title" className="text-sm font-semibold text-[#1A3F7E] mb-1 uppercase tracking-wider">
          We respect your privacy
        </h4>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
          We use cookies to improve site functionality and understand how our website is used. This helps us enhance your experience. 
          You can read our{' '}
          <a href="/privacy-policy" className="text-[#1A3F7E] hover:underline font-medium">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms-of-use" className="text-[#1A3F7E] hover:underline font-medium">
            Terms of Use
          </a>{' '}
          for details.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
        <button 
          onClick={handleReject}
          className="px-4 py-2 border border-black/20 text-black font-semibold text-xs rounded-lg bg-white hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
        >
          Reject
        </button>
        <button 
          onClick={handleAccept}
          className="px-4 py-2 bg-[#1A3F7E] hover:bg-[#153468] text-white font-semibold text-xs rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A3F7E]/40 focus:ring-offset-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
