'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, Film, Sparkles, Heart, ChevronDown, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/icons';
import { PORTFOLIO_ITEMS, PhotoItem } from '@/data/portfolio';
import { VERIFIED_SERVICES } from '@/data/services';
import { BRAND } from '@/data/brand';
import Lightbox from '@/components/Lightbox';
import AnimateReveal from '@/components/AnimateReveal';

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const featuredPhotos = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <div className="bg-charcoal min-h-screen text-ivory-100 selection:bg-gold selection:text-charcoal-950">
      {/* =========================================================================
          1. HERO SECTION (Immersive Full-Screen Photographic Hero)
         ========================================================================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smileart/hero_wedding_marigold.jpg"
            alt="Smile Art Photography Indian Wedding Marigold Couple"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-105 animate-slow-zoom"
          />
          {/* Multi-layered cinematic gradients for contrast & editorial elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-[0.88]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/40 bg-black/40 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Smile Art Photography • Burhanpur, India
            </span>
          </motion.div>

          {/* Main Emotional Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-[1.08] max-w-4xl"
          >
            Frame by frame,{' '}
            <span className="italic font-normal text-gold block sm:inline">
              creating magic.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-ivory-300 font-light max-w-2xl leading-relaxed"
          >
            Fine-art Indian wedding photography, soulful pre-wedding stories, and cinematic motion pictures by Harshal Mahajan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-charcoal-950 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white font-sans text-xs uppercase tracking-[0.25em] font-medium hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
            >
              Enquire For Dates
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-ivory-400 space-y-2 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
        </div>
      </section>


      {/* =========================================================================
          2. EDITORIAL INTRODUCTORY STORYTELLING SECTION
         ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Expressive Typography */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              The Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.15]">
              We do not stage your love. We honour its sacred, unhurried truth.
            </h2>
            <div className="space-y-4 text-ivory-300 text-sm sm:text-base font-light leading-relaxed pt-4">
              <p>
                In the historic city of Burhanpur, where centuries of royal architecture meet the timeless rituals of Indian marriage, Smile Art Photography was born from a quiet obsession: preserving the ephemeral glance, the trembling hand at the kanyadaan, and the unrestrained laughter of Haldi morning.
              </p>
              <p>
                Lead photographer Harshal Mahajan approaches every wedding not as a generic checklist of poses, but as an heirloom monograph. Every photograph is composed with respect for tradition, authentic skin tones, and the radiant soul of family celebrations.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-6 text-xs uppercase tracking-widest text-ivory-400">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-gold" />
                <span>Fine-Art Stills</span>
              </div>
              <div className="flex items-center space-x-2">
                <Film className="w-4 h-4 text-gold" />
                <span>Cinematic Films</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-gold" />
                <span>Pure Emotion</span>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                 onClick={() => setSelectedPhoto(PORTFOLIO_ITEMS[1])}>
              <Image
                src="/images/smileart/wedding_together_embrace.jpg"
                alt="Ajay & Komal wedding couple embrace"
                fill
                className="object-cover object-center img-editorial-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  Selected Work • Wedding
                </span>
                <p className="font-editorial text-2xl text-white font-light mt-1">
                  Together
                </p>
                <p className="text-xs text-ivory-300 font-light mt-0.5">
                  Ajay & Komal • Burhanpur, MP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. SELECTED WORK EDITORIAL GALLERY PREVIEW
         ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              Curated Portfolio
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-light mt-2">
              Selected Works
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors group"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPhotos.map((photo, index) => (
            <AnimateReveal key={photo.id} delay={index * 0.1} className="group cursor-pointer">
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="relative overflow-hidden rounded-lg bg-charcoal-900 border border-white/5 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className={`relative w-full ${
                  photo.orientation === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]'
                }`}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center img-editorial-zoom"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Editorial Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                    <span>{photo.category}</span>
                    <span>{photo.year}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-white font-light group-hover:text-gold transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-ivory-400 font-light mt-1.5 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </AnimateReveal>
          ))}
        </div>
      </section>


      {/* =========================================================================
          4. LARGE IMMERSIVE PHOTOGRAPHIC STATEMENT SECTION
         ========================================================================= */}
      <section className="relative py-36 sm:py-44 overflow-hidden border-y border-white/10 my-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smileart/bridal_editorial_spotlight.jpg"
            alt="Bride Komal spotlight portrait"
            fill
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-4">
            The Vision
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.18] max-w-3xl">
            “True love stories never have endings. They are etched in light, color, and memory.”
          </h2>
          <p className="mt-6 text-sm sm:text-base text-ivory-300 font-light max-w-xl leading-relaxed">
            From regal bridal velvet to spontaneous countryside sunsets, our work is dedicated to couples who value timeless elegance over fleeting internet trends.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-medium text-gold border-b border-gold/50 pb-1 hover:border-gold transition-colors"
            >
              <span>Speak With The Photographer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          5. PHOTOGRAPHY SERVICES PREVIEW
         ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
            Tailored Experiences
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl text-white font-light mt-2">
            Signature Services
          </h2>
          <p className="text-sm text-ivory-400 font-light mt-4">
            Curated photographic commissions designed to honor every facet of Indian nuptials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERIFIED_SERVICES.slice(0, 3).map((service, index) => (
            <AnimateReveal key={service.id} delay={index * 0.1}>
              <div className="bg-charcoal-900/60 border border-white/5 rounded-lg overflow-hidden flex flex-col justify-between h-full p-8 hover:border-gold/30 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-xs font-sans tracking-widest text-gold font-medium">
                    0{index + 1}
                  </span>
                  <h3 className="font-editorial text-2xl text-white font-light">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gold/80 italic font-editorial">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-ivory-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ivory-300 hover:text-gold transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimateReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-medium px-6 py-3 rounded-full border border-white/20 text-ivory-200 hover:border-gold hover:text-gold transition-all"
          >
            <span>View All 6 Verified Offerings</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* =========================================================================
          6. ABOUT THE PHOTOGRAPHER PREVIEW
         ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer Real Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/smileart/photographer_harshal.jpg"
                alt="Harshal Mahajan, Founder and Lead Photographer of Smile Art Photography"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                  The Artist
                </span>
                <p className="font-editorial text-3xl text-white font-light mt-1">
                  Harshal Mahajan
                </p>
                <p className="text-xs text-ivory-400 font-light">
                  Lead Cinematographer & Editor • Burhanpur, MP
                </p>
              </div>
            </div>
          </div>

          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              Behind The Lens
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light leading-tight">
              Honoring every sacred frame with sincerity and craft.
            </h2>
            <div className="space-y-4 text-ivory-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Harshal Mahajan is the creative eye behind Smile Art Photography. Working out of Burhanpur, Madhya Pradesh, Harshal pairs contemporary cinema techniques with deep cultural grounding.
              </p>
              <p>
                Specializing in Canon R6 Mark cinema setups, prime optics, and nuanced color grading, Harshal creates imagery that feels both fresh and timeless. He believes the most breathtaking images are never forced—they emerge when couples are free to breathe, laugh, and embrace.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold px-6 py-3 rounded-full bg-gold text-charcoal-950 hover:bg-gold-light transition-colors"
              >
                <span>Read Full Biography</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ivory-300 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4 text-gold" />
                <span>{BRAND.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          7. INSTAGRAM DISCOVERY SECTION
         ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              <Instagram className="w-3.5 h-3.5" />
              <span>Live Social Journal</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-white font-light mt-2">
              Follow The Journey
            </h2>
            <p className="text-xs text-ivory-400 font-light mt-1">
              {BRAND.followers} couples and art lovers following {BRAND.instagramHandle}
            </p>
          </div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-all duration-300"
          >
            <span>Visit @smileart_photographyy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Real Instagram Posts Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/images/smileart/IMG_2131_crop_refined.jpg', label: 'Bride Gaytri Haldi' },
            { src: '/images/smileart/IMG_2132_crop_refined.jpg', label: 'Ajay & Komal Wedding' },
            { src: '/images/smileart/IMG_2134_crop_refined.jpg', label: 'Bride Komal Red Veil' },
            { src: '/images/smileart/IMG_2135_crop_refined.jpg', label: 'Glowing Bride Spotlight' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group bg-charcoal-900"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* =========================================================================
          8. FINAL BOOKING ENQUIRY CTA SECTION
         ========================================================================= */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-charcoal-950 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium">
            Begin Your Story
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            Let us create something timeless together.
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 font-light max-w-xl mx-auto leading-relaxed">
            Inquire now to discuss dates, creative vision, and bespoke wedding photography coverage across Madhya Pradesh and beyond.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold text-charcoal-950 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 flex items-center justify-center space-x-2"
            >
              <span>Submit Date Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-sans text-xs uppercase tracking-[0.25em] font-medium hover:border-gold hover:text-gold transition-colors"
            >
              Direct Call: {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        photos={PORTFOLIO_ITEMS}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}
