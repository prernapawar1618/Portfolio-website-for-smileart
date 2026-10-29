import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { VERIFIED_SERVICES } from '@/data/services';
import { BRAND } from '@/data/brand';

export const metadata = {
  title: 'Services & Offerings',
  description:
    'Verified photography and cinematography services offered by Smile Art Photography & Harshal Mahajan: Wedding coverage, pre-wedding sessions, fine-art bridal portraits, haldi celebrations, and cinematic films.',
};

export default function ServicesPage() {
  return (
    <div className="bg-charcoal min-h-screen text-ivory-100 pt-32 pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/30 bg-charcoal-900 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
            Signature Offerings
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
          Bespoke Photography Services
        </h1>
        <p className="mt-4 text-sm sm:text-base text-ivory-300 font-light max-w-2xl mx-auto leading-relaxed">
          Rooted in authenticity, cultural reverence, and cinematic elegance. Explore our verified creative capabilities below.
        </p>
      </section>

      {/* Services List - Editorial Alternating Layout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">
        {VERIFIED_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-medium px-3 py-1 rounded-full bg-black/60 text-gold border border-gold/30 backdrop-blur-md">
                      0{index + 1} • {service.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
                    {service.subtitle}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                    {service.title}
                  </h2>
                </div>

                <p className="font-editorial italic text-base sm:text-lg text-gold/90 border-l-2 border-gold/40 pl-4 py-1">
                  “{service.tagline}”
                </p>

                <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-white/90 font-medium mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-ivory-300 font-light">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-medium px-6 py-3 rounded-full bg-gold text-charcoal-950 hover:bg-gold-light transition-colors"
                  >
                    <span>Enquire For This Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bespoke Proposal Note & CTA Banner */}
      <section className="mt-32 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl pointer-events-none" />
          
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
            Pricing & Booking Integrity
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light">
            Every celebration has its own unique scale and cadence.
          </h3>
          <p className="text-sm text-ivory-300 font-light max-w-xl mx-auto leading-relaxed">
            In keeping with professional ethics, Smile Art Photography creates transparent, customized proposals based strictly on your verified date, event count, and travel requirements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gold text-charcoal-950 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Custom Proposal</span>
            </Link>
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.25em] font-medium hover:border-gold hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

