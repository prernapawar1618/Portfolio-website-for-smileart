import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera, Film, MapPin, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/icons';
import { BRAND } from '@/data/brand';

export const metadata = {
  title: 'About Harshal Mahajan & Smile Art Photography',
  description:
    'Meet Harshal Mahajan, founder and lead cinematographer of Smile Art Photography based in Burhanpur, Madhya Pradesh. Dedicated to fine-art wedding storytelling, natural emotion, and cinematic filmmaking.',
};

export default function AboutPage() {
  return (
    <div className="bg-charcoal min-h-screen text-ivory-100 pt-32 pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/30 bg-charcoal-900 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
            The Artist Behind The Lens
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
          Harshal Mahajan
        </h1>
        <p className="mt-4 text-sm sm:text-base text-ivory-300 font-light max-w-2xl mx-auto leading-relaxed">
          Filmmaker, editor, and wedding visual storyteller preserving sacred rituals and intimate celebrations in their purest light.
        </p>
      </section>

      {/* Main Narrative & Portrait Spread */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/smileart/photographer_harshal.jpg"
                alt="Harshal Mahajan, Lead Photographer and Filmmaker at Smile Art Photography"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                  Burhanpur, Madhya Pradesh
                </span>
                <p className="font-editorial text-3xl text-white font-light mt-1">
                  Harshal Mahajan
                </p>
                <p className="text-xs text-ivory-300 font-light">
                  Founder • Smile Art Photography
                </p>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              The Journey
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light leading-tight">
              “Frame by frame, creating magic.”
            </h2>

            <div className="space-y-4 text-ivory-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Nestled along the banks of the Tapti River, the historical city of Burhanpur is steeped in centuries of heritage, monumental architecture, and deep-seated cultural festivities. It is against this storied backdrop that Harshal Mahajan established Smile Art Photography.
              </p>
              <p>
                As a filmmaker and editor, Harshal’s aesthetic is built upon an appreciation for cinematic composition, natural illumination, and emotional restraint. Rather than orchestrating artificial tableaus or following algorithmic poses, he prioritizes the unscripted energy of Indian nuptials: the nervous anticipation before the jaimala, the shared glances across crowded mandaps, and the kinetic joy of haldi songs.
              </p>
              <p>
                With a community of over 9,500 followers on Instagram, Harshal continues to document weddings, pre-weddings, and celebrations with an editorial reverence that turns fleeting moments into timeless heirlooms.
              </p>
            </div>

            {/* Verified Details Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-medium">
                    Base Studio
                  </h4>
                  <p className="text-xs text-ivory-400 font-light mt-0.5">
                    {BRAND.studioAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Camera className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-medium">
                    Core Disciplines
                  </h4>
                  <p className="text-xs text-ivory-400 font-light mt-0.5">
                    Weddings • Cinematics • Fine-Art Stills
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {BRAND.instagramHandle}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ivory-300 hover:text-white transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Values & Approach */}
      <section className="py-20 bg-charcoal-900/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
              Core Principles
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light mt-2">
              The Photographic Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-charcoal border border-white/5 space-y-4">
              <Heart className="w-6 h-6 text-gold" />
              <h4 className="font-editorial text-2xl text-white font-light">
                Authentic Emotion
              </h4>
              <p className="text-xs sm:text-sm text-ivory-400 font-light leading-relaxed">
                We believe true beauty lies in unguarded smiles and subtle gestures. Our presence remains quiet, patient, and respectful of intimate family moments.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-charcoal border border-white/5 space-y-4">
              <Sparkles className="w-6 h-6 text-gold" />
              <h4 className="font-editorial text-2xl text-white font-light">
                Heritage & Culture
              </h4>
              <p className="text-xs sm:text-sm text-ivory-400 font-light leading-relaxed">
                Every ritual holds ancestral significance. We preserve the true hues of sacred turmeric, marigold garlands, and handloom silks without artificial distortion.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-charcoal border border-white/5 space-y-4">
              <Film className="w-6 h-6 text-gold" />
              <h4 className="font-editorial text-2xl text-white font-light">
                Cinematic Harmony
              </h4>
              <p className="text-xs sm:text-sm text-ivory-400 font-light leading-relaxed">
                Framing, depth, and pacing drawn from classical filmmaking. Every still image and motion reel is sculpted to feel like a frame from a timeless romantic film.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Disclaimer / Presentation Notice */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 mt-24 text-center">
        <div className="p-6 rounded-lg border border-white/10 bg-charcoal-900/40 text-xs text-ivory-500 font-light space-y-2">
          <p className="text-ivory-400 font-medium uppercase tracking-wider text-[10px]">
            Presentation Concept Note
          </p>
          <p>
            This website is an independent creative portfolio concept created by AmbiVision for presentation to Harshal Mahajan / Smile Art Photography. All photographic works remain the exclusive copyright of Harshal Mahajan.
          </p>
        </div>
      </section>
    </div>
  );
}
