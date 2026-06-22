'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import AssessmentModal from '../../components/AssessmentModal';

export default function PrivacyPolicyPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAssessment = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsAssessmentOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-grow">
        {/* Legal Header */}
        <section className="bg-[#07111A] text-white pt-28 pb-12 lg:pt-36 lg:pb-16 px-6 md:px-12 lg:px-24 2xl:px-[150px]">
          <div className="max-w-[1920px] mx-auto text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400 font-bold uppercase select-none">
              Effective Date: December 18, 2023
            </p>
          </div>
        </section>

        {/* Content body */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 2xl:px-[150px] bg-white text-left text-gray-800">
          <div className="max-w-4xl mx-auto space-y-8 text-xs md:text-sm font-light leading-relaxed">
            
            <p>
              St. Fox, a service & a Product company under Saint Fox Consultancy (P) Ltd., (&quot;St. Fox&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of our customers and users of our services (collectively, &quot;you&quot;). This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information.
            </p>

            <p>
              At St. Fox, encompassing Saint Fox Consultancy (P) Ltd. and its affiliated companies, we acknowledge the paramount importance of individual and personal data privacy. This Privacy Policy articulates how we collect, use, disclose, transfer, and store personal data shared with us. This policy extends to all other St. Fox entities/affiliates, beyond those specifically listed, irrespective of their geographical locations.
            </p>

            <hr className="border-gray-100" />

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                1. Scope of the Privacy Policy Statement
              </h2>
              <p>
                This Privacy Policy applies to information collected when using our website, products, and services, or during any interaction with us, including events hosted or attended by St. Fox, and customer support inquiries.
              </p>
              <p>
                It further applies to personal information collected in connection with job applications/enquiries, from existing/potential employees, contractors, and suppliers. This encompasses compliance with employment laws, ensuring safety and security, crime/fraud detection and prevention, auditing, data analysis, data storage, protecting legal rights, and meeting governmental, legislative, and regulatory requirements.
              </p>
              <p>
                St. Fox may act as a processor of personal data on behalf of its customers while providing software development and application implementation services, following instructions from customers in India, USA, Canada, EU, UK, EEA, UAE, Switzerland, and other geographies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you directly, such as your name, email address, phone number, company name, country, IP address, device identifier, and browsing history on our website.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> This includes information that is not directly linked to you, such as demographic data, aggregate usage data, and analytics information.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies to collect information on session durations, clicks, and page flows to optimize our digital layouts.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                3. How We Use Your Information
              </h2>
              <p>We process collected information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and operate our services, including processing submissions and scheduling assessments.</li>
                <li>Improve our website, customize user experiences, and send security updates or advisory bulletins.</li>
                <li>Comply with regulatory audits and legal guidelines under local jurisdictions.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                4. Data Disclosure and Sharing
              </h2>
              <p>St. Fox does not sell your information. We may share information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Business Partners:</strong> Business partners with whom we offer co-branded services (e.g. IAM, SaaS providers). Users will be notified beforehand.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> Contractors who help us operate our site (e.g. hosting, mail gateways), who are contractually bound to safeguard data.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Regulatory or law enforcement authorities if required by subpeonas or corporate safety protections.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                5. Your Choices &amp; Rights
              </h2>
              <p>Depending on your location (such as under GDPR, DPDPA, CCPA), you have rights to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, correct, or request deletion of your personal information.</li>
                <li>Opt out of marketing communications by using unsubscribe mechanisms.</li>
                <li>Disable cookies in your browser settings, though some portal features may operate with reduced functionality.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 tracking-wide">
                6. Contact Details
              </h2>
              <p>
                If you have questions regarding this privacy policy or wish to exercise data subject rights, please email us at{' '}
                <a href="mailto:privacy@stfox.com" className="text-[#1A3F7E] font-bold hover:underline">
                  privacy@stfox.com
                </a>.
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
