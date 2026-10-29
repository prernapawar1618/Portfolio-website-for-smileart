import Link from 'next/link';
import { ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/icons';
import { BRAND } from '@/data/brand';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/10 text-ivory-300 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-editorial text-3xl sm:text-4xl tracking-[0.2em] font-light text-white group-hover:text-gold transition-colors duration-300">
                SMILE ART
              </span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-gold mt-1">
                Harshal Mahajan Photography
              </span>
            </Link>
            <p className="text-sm text-ivory-400 font-light leading-relaxed max-w-md">
              Cinematic wedding photography, fine-art bridal portraiture, and soulful pre-wedding visual narratives. Rooted in the heritage of Burhanpur, creating heirloom imagery across India.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-ivory-200 hover:text-gold border border-white/15 px-4 py-2 rounded-full hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gold" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Exploration
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition-colors duration-200">
                  Home Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors duration-200">
                  Selected Works Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors duration-200">
                  Photography Offerings
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors duration-200">
                  About Harshal Mahajan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors duration-200">
                  Reserve Your Date
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Coordinates */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Studio & Presence
            </h4>
            <ul className="space-y-3.5 text-sm text-ivory-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>{BRAND.studioAddress}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BRAND.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Concept Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-500 font-light gap-4">
          <p>
            © {new Date().getFullYear()} Smile Art Photography • All photographs © Harshal Mahajan.
          </p>
          <div className="text-center md:text-right text-[11px] text-ivory-500">
            <span>Concept project by </span>
            <span className="text-ivory-400 font-medium">AmbiVision</span>
            <span> • Private presentation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
