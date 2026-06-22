'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'submitting' | 'success' | 'error' | ''
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailTrim = email.trim();
    if (!emailTrim) return;

    // Fast check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrim)) {
      setStatus('error');
      setErrorMsg('Invalid email format');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailTrim,
          formSource: 'newsletter'
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Subscription failed.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Connection error.');
    }
  };

  return (
    <div className="w-full max-w-sm mt-3 flex flex-col gap-1 items-center md:items-start">
      {status === 'success' ? (
        <span className="text-xs text-green-400 font-semibold tracking-wide block animate-fade-in">
          Thank you for subscribing!
        </span>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg overflow-hidden w-full h-[32px] border border-white/20 shadow-sm focus-within:ring-2 focus-within:ring-[#3B73CC] transition-all">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            placeholder="Subscribe to our newsletter..." 
            className="flex-1 px-3 py-1 text-xs text-black border-none bg-white placeholder-gray-400 outline-none w-full"
            aria-label="Email address for newsletter"
            required
          />
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="bg-[#1A3F7E] hover:bg-[#153468] text-white px-4 h-full text-xs font-bold transition-all flex items-center justify-center shrink-0 uppercase tracking-wider cursor-pointer"
          >
            {status === 'submitting' ? (
              <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              'Join'
            )}
          </button>
        </form>
      )}
      {status === 'error' && (
        <span className="text-[10px] text-red-400 font-medium block mt-0.5 pl-1 select-none">
          {errorMsg}
        </span>
      )}
    </div>
  );
}
