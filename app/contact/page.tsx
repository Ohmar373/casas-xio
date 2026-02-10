'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    investmentRange: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <div className="pt-40 pb-20 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-12 h-12 text-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-midnight mb-6">
              Thank You
            </h1>
            <p className="text-xl text-stone mb-10 max-w-md mx-auto">
              We've received your inquiry and are excited to help you start your
              custom home journey. A member of our team will reach out within 24 hours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-midnight text-white text-sm font-medium tracking-widest uppercase hover:bg-navy transition-colors duration-300"
            >
              Return Home
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-midnight overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <FadeIn>
            <p className="label text-slate mb-6">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Start Your Journey
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              You're one step closer to building the home you've always dreamed of. 
              Fill out the form below and let's bring your vision to life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="bg-white border border-midnight/10 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs tracking-widest uppercase text-stone mb-3"
                    >
                      First Name <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight placeholder-stone/50 bg-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs tracking-widest uppercase text-stone mb-3"
                    >
                      Last Name <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight placeholder-stone/50 bg-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-stone mb-3"
                  >
                    Email Address <span className="text-navy">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight placeholder-stone/50 bg-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-widest uppercase text-stone mb-3"
                  >
                    Phone Number <span className="text-navy">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(956) 555-1234"
                    className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight placeholder-stone/50 bg-transparent"
                  />
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-xs tracking-widest uppercase text-stone mb-3"
                  >
                    How Can We Serve You? <span className="text-navy">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight bg-transparent appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23110954'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="future-homeowner">Custom Home Build</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="addition">Home Addition</option>
                    <option value="interior-design">Interior Design</option>
                  </select>
                </div>

                {/* Investment Range */}
                <div>
                  <label
                    htmlFor="investmentRange"
                    className="block text-xs tracking-widest uppercase text-stone mb-3"
                  >
                    Investment Range <span className="text-navy">*</span>
                  </label>
                  <input
                    type="text"
                    id="investmentRange"
                    name="investmentRange"
                    required
                    value={formData.investmentRange}
                    onChange={handleChange}
                    placeholder="e.g., $300,000 - $500,000"
                    className="w-full px-4 py-4 border border-midnight/20 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-midnight placeholder-stone/50 bg-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-midnight text-white text-sm font-medium tracking-widest uppercase hover:bg-navy transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Begin Your Journey"
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-sm text-stone">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
