'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Menu arrays matching the original site's compiled layout chunk exactly
const W = [
  { id: 1, name: "Managed Identity", link: "/managed-identity" },
  { id: 2, name: "Managed Security Operations Center (SOC)", link: "/soc2" },
  { id: 3, name: "Managed Detection And Response", link: "/managed-detection-and-response" },
  { id: 4, name: "Managed Cloud Security", link: "/sasecloudsecurity" },
  { id: 5, name: "Managed Secure Access Service Edge (SASE)", link: "/sase" },
  { id: 6, name: "Managed Email Security", link: "/email-security" },
  { id: 7, name: "Managed Firewall", link: "/managed-firewall" },
  { id: 8, name: "Managed Vulnerability and Patching", link: "/vulnerability" },
  { id: 9, name: "Managed DevSecOps", link: "/dev-secops" }
];

const Y = [
  { id: 1, name: "ISO Audits", link: "/iso" },
  { id: 2, name: "SOC 2 Audits", link: "/soc" },
  { id: 3, name: "VAPT", link: "/vapt" },
  { id: 4, name: "RED Teaming", link: "/optimizedefenses" },
  { id: 5, name: "TPCRM", link: "/tpcrm" },
  { id: 6, name: "vCISO", link: "/virtual-ciso" },
  { id: 7, name: "vDPO", link: "/vdpo" },
  { id: 8, name: "Incident Response", link: "/incident-response" },
  { id: 9, name: "SOC Assessment", link: "/soc-assessment" },
  { id: 10, name: "Identity Assessment", link: "/identity-assessment" },
  { id: 11, name: "Cloud Security Posture Assessment", link: "/cloud-security" }
];

const Z = [
  { id: 1, name: "Privacy Ops", link: "/privacy-ops" },
  { id: 2, name: "Data Security Posture Management", link: "/data-security-posture-management" },
  { id: 3, name: "Data Loss Prevention", link: "/data-loss-prevention" }
];

const H = [
  { id: 1, name: "Security for AI", link: "/ai-security", img: "/images/Navbar/SecurityforAI.webp" }
];

const Q = [
  { id: 1, name: "Cloud Engineering", link: "/cloud-engineering", img: "/images/Navbar/CloudEngineering.webp" }
];

const K = [
  { id: 1, name: "Blogs", link: "/casestudies" }
];

// Routes that always use the dark logo (Stfoxlogo.webp) and dark text (text-[#1F1F1F])
const DARK_LOGO_ROUTES = [
  "/cloud-security",
  "/vulnerability",
  "/data-loss-prevention",
  "/casestudies",
  "/casestudies/era-of-ai",
  "/casestudies/prompt-injection",
  "/casestudies/cybersecurity-concerns",
  "/casestudies/democratic-election",
  "/casestudies/navigating-frontier",
  "/casestudies/tiktok",
  "/casestudies/intricateworld",
  "/casestudies/attack-mitigation",
  "/casestudies/nationaldefense",
  "/casestudies/aiintegration",
  "/casestudies/linguisticequity",
  "/casestudies/sustainability",
  "/casestudies/aiforindia",
  "/casestudies/scalablesecurity",
  "/casestudies/automatedmechanisms",
  "/casestudies/euailaw",
  "/casestudies/crossroads",
  "/casestudies/hybridcloud",
  "/casestudies/securing-the-code",
  "/casestudies/guardian-angel",
  "/casestudies/unleashing-creativity",
  "/clutch-at-a-glance",
  "/clutch-infographics",
  "/clutch-datasheet",
  "/casestudies/saviynt",
  "/casestudies/protecting-digital-world",
  "/casestudies/cert-in-empanelment",
  "/casestudies/securing-ai-before-damage-visible",
  "/casestudies/cybershorts-top-5-cybersecurity-alerts"
];

// Custom Inline SVG Icons to avoid react-icons build dependency issues
const ChevronUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function Navbar({ onOpenAssessment }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/images/home/Stfoxlogo.webp');

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile Submenu Accordion states
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  // Mobile Slide-over states for specific category levels
  const [mobileManagedOpen, setMobileManagedOpen] = useState(false);
  const [mobileSpecializedOpen, setMobileSpecializedOpen] = useState(false);
  const [mobileDataOpen, setMobileDataOpen] = useState(false);

  const [activeService, setActiveService] = useState("");

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (localStorage.getItem("fromFooter") === "true" && scrolled) {
        localStorage.setItem("navbarToggle", "false");
        localStorage.setItem("fromFooter", "false");
        setSolutionsOpen(false);
      }
      setIsScrolled(scrolled);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 1024;
      setIsMobile(isMobileSize);
      if (!isMobileSize) {
        setIsMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setCompanyOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Logo Toggle logic
  useEffect(() => {
    if (DARK_LOGO_ROUTES.includes(pathname) || isScrolled || isMobile) {
      setLogoSrc('/images/home/Stfoxlogo.webp');
    } else {
      setLogoSrc('/images/home/StfoxLogo1.webp');
    }
  }, [pathname, isScrolled, isMobile]);

  // Track active menu items based on current URL path
  useEffect(() => {
    const allItems = [...W, ...Y, ...Z, ...H, ...Q, ...K];
    const match = allItems.find(
      item => item.link === pathname || (pathname.startsWith(item.link + '/') && item.link !== '/')
    );
    if (pathname === '/' || pathname === '/about-us') {
      setActiveService("");
    } else if (match) {
      setActiveService(match.name);
    } else {
      setActiveService("");
    }
  }, [pathname]);

  // Read navbarToggle state from localStorage on mount
  useEffect(() => {
    const savedToggle = localStorage.getItem("navbarToggle");
    if (savedToggle !== null) {
      setSolutionsOpen(savedToggle === "true");
    }
  }, []);

  const closeAllMobilePanels = () => {
    setMobileManagedOpen(false);
    setMobileSpecializedOpen(false);
    setMobileDataOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeAllMobilePanels();
  };

  // Determine text color based on scrolled status and current route
  const headerTextColor = isScrolled || isMobile || isMobileMenuOpen
    ? 'text-[#1F1F1F]' 
    : (DARK_LOGO_ROUTES.includes(pathname) ? 'text-[#1F1F1F]' : 'text-white');

  return (
    <>
      <header
        className={`flex justify-center items-center fixed top-0 left-0 w-full z-50 transition-all duration-100 ${
          isScrolled 
            ? 'bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100' 
            : (isMobile || isMobileMenuOpen ? 'bg-white text-[#1F1F1F]' : 'bg-transparent')
        } ${headerTextColor}`}
      >
        <div className="flex justify-between w-full 2xl:mx-[150px] lg:mx-24 mx-5 py-3 items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" prefetch={false}>
              <img 
                alt="St. Fox — home" 
                src={logoSrc} 
                width={140} 
                height={35} 
                className="h-[35px] w-auto transition-all" 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-10">
            <div className="flex gap-6 items-center">
              
              {/* VIGILE capsule link */}
              <Link 
                href="/vigile" 
                prefetch={false}
                className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] py-2 px-4 rounded-md text-white font-bold text-[15px] inline-block shadow-sm hover:shadow-md transition-shadow"
              >
                VIGILE
              </Link>

              {/* Solutions Mega Menu Hover Trigger */}
              <div 
                className="relative flex gap-2 items-center cursor-pointer group py-2"
                onMouseEnter={() => {
                  setSolutionsOpen(true);
                  localStorage.setItem("navbarToggle", "true");
                }}
                onMouseLeave={() => {
                  setSolutionsOpen(false);
                  localStorage.setItem("navbarToggle", "false");
                }}
              >
                <button className="text-[15px] font-bold focus:outline-none flex items-center gap-1">
                  Solutions
                  {solutionsOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </button>

                {/* Desktop Mega Menu Dropdown */}
                <div className="absolute left-0 -right-[800px] top-6 z-50 pointer-events-none group-hover:pointer-events-auto">
                  {solutionsOpen && (
                    <div className="flex justify-center items-center mt-4 pointer-events-auto animate-fade-in">
                      <div className="flex justify-between p-6 bg-white shadow-xl rounded-lg h-[500px] border border-gray-100">
                        
                        {/* Managed Services Column */}
                        <div className="2xl:w-[250px] w-[220px] mr-6 text-left">
                          <h3 className="text-base font-bold pb-2 text-[#3B6F75] border-b border-gray-50">Managed Services</h3>
                          <ul className="mt-2 text-gray-700 space-y-4">
                            {W.map(item => (
                              <li 
                                key={item.id}
                                onClick={() => {
                                  router.push(item.link);
                                  localStorage.setItem("navbarToggle", "false");
                                  setSolutionsOpen(false);
                                  setActiveService(item.name);
                                }}
                                className={`text-sm cursor-pointer transition-colors ${
                                  activeService === item.name 
                                    ? "text-[#1C1C1C] font-bold" 
                                    : "text-[#1C1C1C] hover:text-[#3B6F75]"
                                }`}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Specialized Services Column */}
                        <div className="w-[250px] mr-6 text-left">
                          <h3 className="text-base font-bold pb-2 text-[#A96432] border-b border-gray-50">Specialized Services</h3>
                          <ul className="mt-2 text-gray-700 space-y-4">
                            {Y.map(item => (
                              <li 
                                key={item.id}
                                onClick={() => {
                                  router.push(item.link);
                                  localStorage.setItem("navbarToggle", "false");
                                  setSolutionsOpen(false);
                                  setActiveService(item.name);
                                }}
                                className={`text-sm cursor-pointer transition-colors ${
                                  activeService === item.name 
                                    ? "text-[#1C1C1C] font-bold" 
                                    : "text-[#1C1C1C] hover:text-[#A96432]"
                                }`}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Data Services Column */}
                        <div className="w-[220px] mr-6 text-left">
                          <h3 className="text-base font-bold pb-2 text-[#5A6B3D] border-b border-gray-50">Data Services</h3>
                          <ul className="mt-4 text-gray-700 space-y-4">
                            {Z.map(item => (
                              <li 
                                key={item.id}
                                onClick={() => {
                                  router.push(item.link);
                                  localStorage.setItem("navbarToggle", "false");
                                  setSolutionsOpen(false);
                                  setActiveService(item.name);
                                }}
                                className={`text-sm cursor-pointer transition-colors ${
                                  activeService === item.name 
                                    ? "text-[#1C1C1C] font-bold" 
                                    : "text-[#1C1C1C] hover:text-[#5A6B3D]"
                                }`}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Security for AI & Cloud Engineering Cards */}
                        <div className="space-y-4 w-[280px]">
                          {/* Security for AI Card */}
                          {H.map(item => (
                            <div 
                              key={item.id}
                              className="p-4 rounded-lg border border-gray-100 bg-white w-full cursor-pointer group/card text-left transition-all hover:border-[#1A3F7E]/20"
                              onClick={() => {
                                router.push(item.link);
                                setSolutionsOpen(false);
                                localStorage.setItem("navbarToggle", "false");
                                setActiveService(item.name);
                              }}
                            >
                              <button className={`text-[#102537] text-sm transition-all font-semibold cursor-pointer ${
                                activeService === item.name ? "text-[#1C1C1C] font-bold" : "text-[#1C1C1C]"
                              }`}>
                                {item.name}
                              </button>
                              <div className="flex items-center justify-center rounded-lg mt-3 h-24 overflow-hidden bg-gray-50">
                                {item.img && (
                                  <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="h-28 w-full object-contain transition-transform duration-300 group-hover/card:scale-[1.03]" 
                                  />
                                )}
                              </div>
                              <button 
                                className="mt-4 flex items-center text-[#1C64F2] text-[13px] font-medium hover:underline cursor-pointer"
                                onClick={e => {
                                  e.stopPropagation();
                                  router.push(item.link);
                                  setSolutionsOpen(false);
                                  localStorage.setItem("navbarToggle", "false");
                                  setActiveService(item.name);
                                }}
                              >
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 text-[#1C64F2]" />
                              </button>
                            </div>
                          ))}

                          {/* Cloud Engineering Card */}
                          {Q.map(item => (
                            <div 
                              key={item.id}
                              className="bg-white p-4 rounded-lg border border-gray-100 w-full cursor-pointer group/card text-left transition-all hover:border-[#1A3F7E]/20"
                              onClick={() => {
                                router.push(item.link);
                                setSolutionsOpen(false);
                                localStorage.setItem("navbarToggle", "false");
                                setActiveService(item.name);
                              }}
                            >
                              <button className={`text-[#102537] text-sm transition-all font-semibold cursor-pointer ${
                                activeService === item.name ? "text-[#1C1C1C] font-bold" : "text-[#1C1C1C]"
                              }`}>
                                {item.name}
                              </button>
                              <div className="flex items-center justify-center rounded-lg mt-3 h-24 overflow-hidden bg-gray-50">
                                {item.img && (
                                  <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="h-28 w-full object-contain transition-transform duration-300 group-hover/card:scale-[1.03]" 
                                  />
                                )}
                              </div>
                              <button 
                                className="mt-4 flex items-center text-[#1C64F2] text-[13px] font-medium hover:underline cursor-pointer"
                                onClick={e => {
                                  e.stopPropagation();
                                  router.push(item.link);
                                  setSolutionsOpen(false);
                                  localStorage.setItem("navbarToggle", "false");
                                  setActiveService(item.name);
                                }}
                              >
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 text-[#1C64F2]" />
                              </button>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Company Dropdown Trigger */}
            <div className="flex gap-6 items-center ml-auto mr-12">
              <div 
                className="relative flex gap-2 items-center cursor-pointer group py-2"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button className="text-[15px] font-bold focus:outline-none flex items-center gap-1">
                  Company
                  {companyOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </button>

                {/* Company Dropdown Menu */}
                {companyOpen && (
                  <div className="absolute right-0 top-6 z-50 min-w-[220px] bg-white shadow-xl rounded-lg p-2 border border-gray-100 animate-fade-in text-left">
                    <ul className="text-gray-700 space-y-1">
                      <li>
                        <Link 
                          href="/about-us" 
                          onClick={() => setCompanyOpen(false)}
                          className="text-sm block px-4 py-2 text-[#1C1C1C] hover:bg-gray-50 hover:font-bold rounded transition-all"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/corporate-sustainability" 
                          onClick={() => setCompanyOpen(false)}
                          className="text-sm block px-4 py-2 text-[#1C1C1C] hover:bg-gray-50 hover:font-bold rounded transition-all whitespace-nowrap"
                        >
                          Corporate Sustainability
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/privacy-policy" 
                          onClick={() => setCompanyOpen(false)}
                          className="text-sm block px-4 py-2 text-[#1C1C1C] hover:bg-gray-50 hover:font-bold rounded transition-all"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/casestudies" 
                          onClick={() => setCompanyOpen(false)}
                          className="text-sm block px-4 py-2 text-[#1C1C1C] hover:bg-gray-50 hover:font-bold rounded transition-all"
                        >
                          Insights
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/careers" 
                          onClick={() => setCompanyOpen(false)}
                          className="text-sm block px-4 py-2 text-[#1C1C1C] hover:bg-gray-50 hover:font-bold rounded transition-all"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Action Button and Hamburger */}
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={() => onOpenAssessment('Experienced a Breach')}
              className={`px-4 py-2 text-[13px] font-bold rounded-lg border-2 whitespace-nowrap hidden md:block transition-all cursor-pointer ${
                isScrolled || DARK_LOGO_ROUTES.includes(pathname)
                  ? 'border-[#1A3F7E] text-[#1A3F7E] hover:bg-[#1A3F7E] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Experienced a Breach ?
            </button>

            {/* Mobile hamburger menu toggle */}
            <button 
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-1.5 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`w-6 h-6 ${isScrolled || DARK_LOGO_ROUTES.includes(pathname) || isMobileMenuOpen ? 'text-[#1F1F1F]' : 'text-white'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[59px] bg-white z-[40] w-full h-screen overflow-y-auto px-5 py-6 flex flex-col justify-between text-gray-900 lg:hidden border-t border-gray-100">
          <div className="space-y-6">
            
            {/* Search Bar in Mobile Menu */}
            <div className="relative w-full">
              <input 
                type="search" 
                placeholder="Search" 
                required 
                className="h-[38px] w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#3B73CC]" 
              />
            </div>

            <nav className="flex flex-col gap-4 text-base">
              
              {/* Solutions Accordion Trigger */}
              <div>
                <div 
                  className="flex justify-between items-center w-full cursor-pointer py-2 border-b border-gray-100"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  <span className="text-[16px] font-bold">Solutions</span>
                  {mobileSolutionsOpen ? <ChevronUp className="h-4 h-4 text-gray-600" /> : <ChevronDown className="h-4 h-4 text-gray-600" />}
                </div>

                {mobileSolutionsOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    
                    {/* Managed Services Accordion */}
                    <div className="pb-2">
                      <div 
                        className="flex justify-between items-center cursor-pointer py-1.5"
                        onClick={() => setMobileManagedOpen(true)}
                      >
                        <span className="text-[#3B6F75] text-[16px] font-semibold">Managed Services</span>
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </div>
                      
                      {/* Managed Services slide-over panel */}
                      <div 
                        className={`absolute top-[75px] left-0 bg-white w-full h-[calc(100vh-75px)] px-5 py-2 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                          mobileManagedOpen ? "translate-x-0" : "translate-x-full"
                        } z-50`}
                      >
                        <div className="flex gap-2 justify-start items-center mb-3 cursor-pointer" onClick={() => setMobileManagedOpen(false)}>
                          <ArrowLeft className="text-[#3B6F75] w-5 h-5" />
                          <span className="text-[#3B6F75] text-xl font-bold">Managed Services</span>
                        </div>
                        <hr className="border-gray-100 mb-4" />
                        <ul className="space-y-4 pl-2">
                          {W.map(item => (
                            <li 
                              key={item.id}
                              onClick={() => {
                                router.push(item.link);
                                setMobileManagedOpen(false);
                                setIsMobileMenuOpen(false);
                                localStorage.setItem("navbarToggle", "false");
                                setActiveService(item.name);
                              }}
                              className={`text-[18px] cursor-pointer py-1.5 transition-colors ${
                                activeService === item.name ? "text-[#3B73CC] font-bold" : "text-[#1C1C1C]"
                              }`}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specialized Services Accordion */}
                    <div className="pb-2">
                      <div 
                        className="flex justify-between items-center cursor-pointer py-1.5"
                        onClick={() => setMobileSpecializedOpen(true)}
                      >
                        <span className="text-[#A96432] text-[16px] font-semibold">Specialized Services</span>
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </div>
                      
                      {/* Specialized Services slide-over panel */}
                      <div 
                        className={`absolute top-[75px] left-0 bg-white w-full h-[calc(100vh-75px)] px-5 py-2 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                          mobileSpecializedOpen ? "translate-x-0" : "translate-x-full"
                        } z-50`}
                      >
                        <div className="flex gap-2 justify-start items-center mb-3 cursor-pointer" onClick={() => setMobileSpecializedOpen(false)}>
                          <ArrowLeft className="text-[#A96432] w-5 h-5" />
                          <span className="text-[#A96432] text-xl font-bold">Specialized Services</span>
                        </div>
                        <hr className="border-gray-100 mb-4" />
                        <ul className="space-y-4 pl-2">
                          {Y.map(item => (
                            <li 
                              key={item.id}
                              onClick={() => {
                                router.push(item.link);
                                setMobileSpecializedOpen(false);
                                setIsMobileMenuOpen(false);
                                localStorage.setItem("navbarToggle", "false");
                                setActiveService(item.name);
                              }}
                              className={`text-[18px] cursor-pointer py-1.5 transition-colors ${
                                activeService === item.name ? "text-[#3B73CC] font-bold" : "text-[#1C1C1C]"
                              }`}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Data Services Accordion */}
                    <div className="pb-2">
                      <div 
                        className="flex justify-between items-center cursor-pointer py-1.5"
                        onClick={() => setMobileDataOpen(true)}
                      >
                        <span className="text-[#5A6B3D] text-[16px] font-semibold">Data Services</span>
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </div>
                      
                      {/* Data Services slide-over panel */}
                      <div 
                        className={`absolute top-[75px] left-0 bg-white w-full h-[calc(100vh-75px)] px-5 py-2 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                          mobileDataOpen ? "translate-x-0" : "translate-x-full"
                        } z-50`}
                      >
                        <div className="flex gap-2 justify-start items-center mb-3 cursor-pointer" onClick={() => setMobileDataOpen(false)}>
                          <ArrowLeft className="text-[#5A6B3D] w-5 h-5" />
                          <span className="text-[#5A6B3D] text-xl font-bold">Data Services</span>
                        </div>
                        <hr className="border-gray-100 mb-4" />
                        <ul className="space-y-4 pl-2">
                          {Z.map(item => (
                            <li 
                              key={item.id}
                              onClick={() => {
                                router.push(item.link);
                                setMobileDataOpen(false);
                                setIsMobileMenuOpen(false);
                                localStorage.setItem("navbarToggle", "false");
                                setActiveService(item.name);
                              }}
                              className={`text-[18px] cursor-pointer py-1.5 transition-colors ${
                                activeService === item.name ? "text-[#3B73CC] font-bold" : "text-[#1C1C1C]"
                              }`}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Security for AI Direct Link */}
                    <div className="py-1.5 border-b border-gray-50">
                      <Link 
                        href="/ai-security" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex justify-between items-center w-full"
                      >
                        <span className="text-[#635D75] text-[16px] font-semibold">Security for AI</span>
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </Link>
                    </div>

                    {/* Cloud Engineering Direct Link */}
                    <div className="py-1.5 border-b border-gray-50">
                      <Link 
                        href="/cloud-engineering" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex justify-between items-center w-full"
                      >
                        <span className="text-[#635D75] text-[16px] font-semibold">Cloud Engineering</span>
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </Link>
                    </div>

                  </div>
                )}
              </div>

              {/* VIGILE Link in Mobile menu */}
              <div className="py-2 border-b border-gray-100">
                <Link 
                  href="/vigile" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[16px] font-bold block"
                >
                  VIGILE
                </Link>
              </div>

              {/* Company Accordion Trigger */}
              <div>
                <div 
                  className="flex justify-between items-center w-full cursor-pointer py-2 border-b border-gray-100"
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                >
                  <span className="text-[16px] font-bold">Company</span>
                  {mobileCompanyOpen ? <ChevronUp className="h-4 w-4 text-gray-600" /> : <ChevronDown className="h-4 w-4 text-gray-600" />}
                </div>

                {mobileCompanyOpen && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link 
                      href="/about-us" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-sm text-[#1C1C1C] py-1 hover:font-bold"
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/corporate-sustainability" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-sm text-[#1C1C1C] py-1 hover:font-bold whitespace-nowrap"
                    >
                      Corporate Sustainability
                    </Link>
                    <Link 
                      href="/privacy-policy" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-sm text-[#1C1C1C] py-1 hover:font-bold"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/casestudies" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-sm text-[#1C1C1C] py-1 hover:font-bold"
                    >
                      Insights
                    </Link>
                    <Link 
                      href="/careers" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-sm text-[#1C1C1C] py-1 hover:font-bold"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

            </nav>
          </div>

          {/* Mobile Bottom Experienced a Breach Button */}
          <div className="mt-auto pt-6 pb-20">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAssessment('Experienced a Breach');
              }}
              className="w-full py-3 bg-[#1A3F7E] text-white font-bold rounded-lg text-sm text-center block cursor-pointer shadow"
            >
              Experienced a Breach ?
            </button>
          </div>

        </div>
      )}
    </>
  );
}
