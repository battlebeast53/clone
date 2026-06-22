'use client';
import { useState } from 'react';

const COUNTRIES = [
  { code: 'IN', name: 'India' },
  { code: 'US', name: 'United States' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SG', name: 'Singapore' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' }
];

const SERVICES = [
  { label: 'Managed Secure Access Service Edge (SASE)', value: 'SASE' },
  { label: 'Managed Security Operations Center (SOC)', value: 'SOC' },
  { label: 'Managed Detection and Response (MDR)', value: 'MDR' },
  { label: 'Managed Vulnerability and Patching', value: 'Vulnerability and Patching' },
  { label: 'Managed Cloud Security', value: 'Cloud Security' },
  { label: 'Managed Email Security', value: 'Email Security' },
  { label: 'Zero Trust Network Access (ZTNA)', value: 'ZTNA' },
  { label: 'Red, Blue, and Purple Teaming', value: 'Teaming' },
  { label: 'Vulnerability Assessment and Penetration Testing (VAPT)', value: 'VAPT' },
  { label: 'Compliance Automation (SOC 2, ISO)', value: 'Compliance' },
  { label: 'Security for AI / LLM Red Teaming', value: 'AI Security' },
  { label: 'Cloud Engineering', value: 'Cloud Engineering' },
  { label: 'Virtual CISO (vCISO) / vDPO', value: 'vCISO' }
];

export default function AssessmentModal({ isOpen, onClose, selectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    country: '',
    serviceName: selectedService,
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
    
    // Email validation
    const emailTrim = formData.email.trim();
    if (!emailTrim) {
      tempErrors.email = 'Enter a valid company email';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrim)) {
        tempErrors.email = 'Invalid email format';
      } else {
        // Simple company email validation: block common personal email providers
        const personalDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com', 'mail.com'];
        const domain = emailTrim.split('@')[1]?.toLowerCase();
        if (personalDomains.includes(domain)) {
          tempErrors.email = 'Please use your work/company email';
        }
      }
    }

    // Phone validation
    const phoneTrim = formData.phoneNumber.trim();
    if (!phoneTrim) {
      tempErrors.phoneNumber = 'Phone number is required';
    } else if (phoneTrim.length < 7 || phoneTrim.length > 15) {
      tempErrors.phoneNumber = 'Invalid phone number';
    }

    if (!formData.companyName.trim()) tempErrors.companyName = 'Company name is required';
    if (!formData.country) tempErrors.country = 'Residence country is required';
    if (!formData.serviceName) tempErrors.serviceName = 'Please select a service';
    if (!formData.agree) tempErrors.agree = 'You must agree to the terms';
    if (!isCaptchaVerified) tempErrors.captcha = 'Please verify you are not a robot';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear field error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formSource: window.location.pathname
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(result.message || 'Request failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('Failed to connect to server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-[4px] p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="w-full flex flex-col items-center justify-center p-8 text-center bg-gray-50 md:h-[500px]">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Submission!</h3>
            <p className="text-gray-600 max-w-md mb-2 text-sm md:text-base">
              Our security experts will review your details and reach out shortly.
            </p>
            <p className="text-gray-500 max-w-md text-xs md:text-sm">
              Expect a call or email within 24-48 hours. Keep an eye on your inbox for security insights.
            </p>
            <button 
              onClick={onClose} 
              className="mt-8 px-6 py-2.5 bg-[#1A3F7E] text-white font-medium rounded-lg hover:bg-[#153468] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Left Side: Brand Promo */}
            <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-[#1A3F7E] to-[#0b1524] text-white p-8 flex-col justify-between relative">
              <div className="space-y-6 mt-10">
                <img src="/images/home/Stfoxlogo.webp" alt="St. Fox Logo" className="h-8 w-auto" />
                <h3 className="text-xl font-semibold leading-snug">Secure Your Enterprise with AI-Driven Cybersecurity</h3>
                <p className="text-sm text-gray-300 font-light">
                  From vulnerability assessment and penetration testing (VAPT) to managed SOC and compliance audits, St. Fox delivers ironclad protection built for today's hybrid cloud ecosystems.
                </p>
              </div>
              <div className="text-xs text-gray-400 mt-10">
                &copy; {new Date().getFullYear()} St. Fox. All rights reserved.
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-7/12 p-6 md:p-10 overflow-y-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Schedule a Free Assessment</h2>
              
              {submitError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Company Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Company Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Grid for Phone & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.phoneNumber ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                      placeholder="+1 555-555-5555"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.companyName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                      placeholder="Acme Corp"
                    />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                {/* Grid for Country & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Residence Country */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Residence Country *</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.country ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                    >
                      <option value="">Select country...</option>
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                  </div>

                  {/* Service Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">Select Service *</label>
                    <select 
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                      className={`w-full border rounded-lg p-2.5 mt-1 text-sm bg-gray-50 focus:bg-white outline-none transition-colors ${errors.serviceName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#3B73CC]'}`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.value} value={s.label}>{s.label}</option>
                      ))}
                    </select>
                    {errors.serviceName && <p className="text-red-500 text-xs mt-1">{errors.serviceName}</p>}
                  </div>
                </div>

                {/* Agree Checkbox */}
                <div className="flex items-start mt-2">
                  <input 
                    type="checkbox" 
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#1A3F7E] focus:ring-[#3B73CC] border-gray-300 rounded mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="agree" className="ml-2 text-[11px] text-gray-500 select-none cursor-pointer leading-tight">
                    By submitting your personal information to St. Fox, you are agreeing to St. Fox’s{' '}
                    <a href="/privacy-policy" target="_blank" className="text-[#1A3F7E] underline">Privacy Policy</a> and how your information may be used.
                  </label>
                </div>
                {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}

                {/* Interactive Mock reCAPTCHA */}
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => {
                        setIsCaptchaVerified(!isCaptchaVerified);
                        if (errors.captcha) {
                          setErrors(prev => ({ ...prev, captcha: '' }));
                        }
                      }}
                      className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${isCaptchaVerified ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400 bg-white hover:border-gray-500'}`}
                    >
                      {isCaptchaVerified && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span className="text-xs text-gray-700 font-medium select-none">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-7 h-7 object-contain" />
                    <span className="text-[8px] text-gray-400 mt-0.5 leading-none">reCAPTCHA</span>
                  </div>
                </div>
                {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 bg-[#1A3F7E] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 hover:bg-[#153468] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Schedule a Free Assessment'
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
