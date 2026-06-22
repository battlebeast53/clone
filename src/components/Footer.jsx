'use client';
import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-[#060d16] text-[#fff] px-5 py-12 lg:px-24 2xl:px-[150px] border-t border-white/5 relative z-10">
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-16">
        
        {/* Column 1: Logo & Slogan */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img 
            src="/images/Footer/ST.FOXLOGO.svg" 
            className="w-[120px] h-[120px] object-contain filter brightness-100" 
            alt="St. Fox Footer Logo" 
            loading="lazy"
          />
          <p className="text-sm font-normal text-gray-300 leading-normal">
            Innovate Fearlessly <br /> Protect Relentlessly
          </p>
          <NewsletterForm />
        </div>

        {/* Column 2: Company links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li><Link href="/vigile" className="hover:text-white transition-colors">VIGILE</Link></li>
            <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/corporate-sustainability" className="hover:text-white transition-colors">Corporate Sustainability</Link></li>
            <li><Link href="/casestudies" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>

        {/* Column 3: Services links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li><Link href="/managed-services" className="hover:text-white transition-colors">Managed Services</Link></li>
            <li><Link href="/specializedservice" className="hover:text-white transition-colors">Specialised Services</Link></li>
            <li><Link href="/data-services" className="hover:text-white transition-colors">Data Services</Link></li>
            <li><Link href="/ai-security" className="hover:text-white transition-colors">Security For AI</Link></li>
            <li><Link href="/cloud-engineering" className="hover:text-white transition-colors">Cloud Engineering</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Careers */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sales</h4>
            <a href="mailto:sales@stfox.com" className="text-xs text-gray-400 hover:text-white transition-colors hover:underline block break-all">
              sales@stfox.com
            </a>
            <a href="tel:1800-26-ST-FOX" className="text-xs text-gray-400 hover:text-white transition-colors hover:underline block">
              1800-26-ST-FOX
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Careers</h4>
            <Link href="/careers" className="text-xs text-gray-400 hover:text-white transition-colors block">
              Join the Tribe
            </Link>
          </div>
        </div>

        {/* Column 5: Offices */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Offices</h4>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li>India</li>
            <li>Singapore</li>
            <li>UAE</li>
            <li>USA</li>
          </ul>
        </div>

      </div>

      {/* Sub Footer Row */}
      <div className="max-w-[1920px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light select-none">
        
        {/* Copyright notice */}
        <p className="text-center md:text-left">
          Copyright &copy; {new Date().getFullYear()} | Saint Fox Consultancy (P) Ltd. | All rights reserved
        </p>

        {/* Action Options & Socials */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            <li>
              <button className="hover:text-white transition-colors hover:underline outline-none text-[11px]">
                Cookie Preferences
              </button>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-white transition-colors hover:underline">
                Terms of Use
              </Link>
            </li>
          </ul>

          {/* Social Media Link icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/stfox-com/mycompany/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Visit our LinkedIn page"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a 
              href="https://x.com/stfox_com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Visit our Twitter page"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/stfox_com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Visit our Instagram page"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
