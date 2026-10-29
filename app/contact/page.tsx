'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  Send,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/icons';
import { BRAND } from '@/data/brand';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: preselectedService || 'Wedding Photography',
    eventDate: '',
    eventLocation: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.eventLocation.trim()) {
      setError('Please provide the anticipated city or venue location.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please share a few brief details about your celebration.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  // WhatsApp quick connect link with pre-filled event info
  const whatsappMessage = encodeURIComponent(
    `Hello Harshal, I am contacting Smile Art Photography regarding ${formData.eventType || 'Photography'}${
      formData.eventLocation ? ` in ${formData.eventLocation}` : ''
    }. Name: ${formData.fullName || 'Client'}.`
  );
  const whatsappUrl = `https://wa.me/919770669716?text=${whatsappMessage}`;

  return (
    <div className="bg-charcoal min-h-screen text-ivory-100 pt-32 pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/30 bg-charcoal-900 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
            Reserve Your Celebration
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
          Connect With Us
        </h1>
        <p className="mt-4 text-sm sm:text-base text-ivory-300 font-light max-w-2xl mx-auto leading-relaxed">
          We accept a limited number of commissions each wedding season to dedicate unhurried attention to each couple.
        </p>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-charcoal-900/80 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 text-gold mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light">
                  Enquiry Prepared
                </h3>
                <p className="text-sm text-ivory-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your enquiry details have been validated and saved on the client frontend.
                </p>

                {/* Technical Configuration Explanation */}
                <div className="p-5 rounded-lg bg-charcoal-950 border border-white/10 text-left text-xs text-ivory-400 space-y-2">
                  <div className="flex items-center space-x-2 text-gold font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Backend Delivery Notice</span>
                  </div>
                  <p>
                    Because this is an independent concept build, direct email dispatch requires configuring an active email service (e.g. Resend, SendGrid, or Nodemailer SMTP) with API credentials.
                  </p>
                </div>

                {/* Direct Instant Fallback */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal-950 text-xs uppercase tracking-[0.2em] font-medium transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>DM on Instagram</span>
                  </a>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        eventType: 'Wedding Photography',
                        eventDate: '',
                        eventLocation: '',
                        message: '',
                      });
                    }}
                    className="text-xs uppercase tracking-wider text-ivory-500 hover:text-ivory-300 underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                    Commission Request
                  </h3>
                  <p className="text-xs text-ivory-400 font-light mt-1">
                    Fill out the fields below and we will prepare a personalized quote.
                  </p>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-950/50 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Komal Sharma"
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white placeholder-ivory-600 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="komal@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white placeholder-ivory-600 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Event Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white placeholder-ivory-600 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="eventType"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Pre-Wedding Photography">Pre-Wedding Photography</option>
                      <option value="Bridal & Couple Portraits">Bridal & Couple Portraits</option>
                      <option value="Celebrations & Haldi">Celebrations & Haldi Ceremony</option>
                      <option value="Cinematic Wedding Films">Cinematic Wedding Films</option>
                      <option value="Bespoke Invitation Art">Bespoke Invitation Art & Graphics</option>
                    </select>
                  </div>
                </div>

                {/* Date & Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="eventDate"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Event Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="eventLocation"
                      className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                    >
                      Event Location / City *
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      required
                      value={formData.eventLocation}
                      onChange={handleChange}
                      placeholder="e.g. Burhanpur, Indore, Jalgaon"
                      className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white placeholder-ivory-600 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-ivory-300 font-medium"
                  >
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event scale, venues, preferred coverage style, and any questions you have..."
                    className="w-full px-4 py-3 rounded-lg bg-charcoal-950 border border-white/10 text-white placeholder-ivory-600 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gold text-charcoal-950 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Date Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Studio Details Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-8 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                Direct Contact
              </span>
              <h3 className="font-editorial text-3xl text-white font-light">
                Smile Art Photography
              </h3>
              <p className="text-xs text-ivory-400 font-light leading-relaxed">
                Feel free to reach out directly via call, WhatsApp, or Instagram DM for immediate date availability inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="flex items-center space-x-3.5 text-sm text-ivory-200 hover:text-gold transition-colors p-3 rounded-lg bg-charcoal-950 border border-white/5"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-500 block">Phone / Booking</span>
                    <span className="font-medium">{BRAND.phone}</span>
                  </div>
                </a>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 text-sm text-ivory-200 hover:text-gold transition-colors p-3 rounded-lg bg-charcoal-950 border border-white/5"
                >
                  <Instagram className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-500 block">Instagram</span>
                    <span className="font-medium">{BRAND.instagramHandle}</span>
                  </div>
                </a>

                <div className="flex items-start space-x-3.5 text-sm text-ivory-200 p-3 rounded-lg bg-charcoal-950 border border-white/5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-500 block">Studio Location</span>
                    <span className="font-light text-xs text-ivory-300">{BRAND.studioAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Availability Card */}
            <div className="bg-charcoal-900/60 border border-white/5 rounded-2xl p-8 space-y-4 text-xs text-ivory-400 font-light">
              <div className="flex items-center space-x-2 text-gold font-medium text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Travel & Availability</span>
              </div>
              <p className="leading-relaxed">
                Based in Burhanpur, Madhya Pradesh. Available for travel across Madhya Pradesh, Maharashtra, Gujarat, and destination celebrations across India.
              </p>
              <p className="leading-relaxed text-[11px] text-ivory-500">
                To guarantee availability, advance booking is recommended for peak muhurat dates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
      <ContactFormInner />
    </Suspense>
  );
}
