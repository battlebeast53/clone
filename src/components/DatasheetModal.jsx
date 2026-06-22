'use client';
import { useState } from 'react';

export default function DatasheetModal({ isOpen, onClose, datasheetName = 'VIGILE' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors = {};
    if (!name.trim()) tempErrors.name = 'Full name is required';
    
    // Email validation
    const emailTrim = email.trim();
    if (!emailTrim) {
      tempErrors.email = 'Enter a valid company email';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrim)) {
        tempErrors.email = 'Invalid email format';
      } else {
        const personalDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
        const domain = emailTrim.split('@')[1]?.toLowerCase();
        if (personalDomains.includes(domain)) {
          tempErrors.email = 'Please use your work/company email';
        }
      }
    }

    if (!isCaptchaVerified) tempErrors.captcha = 'Please verify you are not a robot';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
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
          fullName: name,
          email: email,
          serviceName: `${datasheetName} Datasheet`,
          formSource: 'datasheet'
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
      setSubmitError('Failed to connect to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-[4px] p-4">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Thank You for Your Submission!</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Your datasheet download for <span className="font-semibold text-[#1A3F7E]">{datasheetName}</span> was successful! A confirmation email with the download link has been sent to your inbox. The link will be valid for 10 mins only.
            </p>
            <p className="text-[11px] text-gray-400 font-light">
              If you don't receive it, please check your spam folder or reach out to us at{' '}
              <a href="mailto:contact@stfox.com" className="text-[#000] font-bold underline">contact@stfox.com</a>.
            </p>
            <button 
              onClick={onClose} 
              className="mt-6 px-6 py-2 bg-[#1A3F7E] text-white text-xs font-semibold rounded hover:bg-[#153468] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                Access the {datasheetName} Datasheet
              </h2>
              <p className="text-xs text-gray-500 font-light mt-1">
                Fill in the details below to download the official product datasheet.
              </p>
            </div>

            {submitError && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">Full Name *</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full border rounded p-2 mt-1 text-xs bg-gray-50 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
              </div>

              {/* Company Email */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">Company Email *</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded p-2 mt-1 text-xs bg-gray-50 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
              </div>

              {/* reCAPTCHA */}
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded flex items-center justify-between mt-4 select-none">
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsCaptchaVerified(!isCaptchaVerified)}
                    className={`w-5.5 h-5.5 border-2 rounded flex items-center justify-center transition-all ${isCaptchaVerified ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400 bg-white'}`}
                  >
                    {isCaptchaVerified && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-xs text-gray-700 font-medium">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" className="w-6 h-6 object-contain" />
                  <span className="text-[7px] text-gray-400 mt-0.5 leading-none">reCAPTCHA</span>
                </div>
              </div>
              {errors.captcha && <p className="text-red-500 text-[10px] mt-0.5">{errors.captcha}</p>}

              {/* Submit */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-[#1A3F7E] text-white text-xs font-bold rounded hover:bg-[#153468] transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Download Datasheet'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
