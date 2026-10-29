'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/icons';
import { BRAND } from '@/data/brand';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-editorial text-2xl sm:text-3xl tracking-[0.2em] font-light text-white group-hover:text-gold transition-colors duration-300">
              SMILE ART
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-ivory-400 font-medium">
              Photography • Cinematics
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative py-1 ${
                    isActive ? 'text-gold' : 'text-ivory-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium border-b border-white/10 pb-3">
            Menu Navigation
          </span>
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-editorial text-3xl tracking-wider transition-all duration-300 flex items-center justify-between ${
                  isActive ? 'text-gold pl-3 border-l-2 border-gold' : 'text-white/80 hover:text-white'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans tracking-widest text-ivory-500">0{idx + 1}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Drawer Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
          <Link
            href="/contact"
            className="w-full text-center py-3.5 rounded-full bg-gold text-charcoal-950 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-colors"
          >
            Book An Enquiry
          </Link>
          <div className="flex items-center justify-between text-xs text-ivory-400 pt-2">
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-gold" />
              <span>{BRAND.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
