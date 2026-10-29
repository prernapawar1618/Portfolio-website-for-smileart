'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Tag, MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, CATEGORIES, CategoryType, PhotoItem } from '@/data/portfolio';
import Lightbox from '@/components/Lightbox';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-charcoal min-h-screen text-ivory-100 pt-32 pb-28">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/30 bg-charcoal-900 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
            Curated Visual Archive
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
          Selected Works & Moments
        </h1>
        <p className="mt-4 text-sm sm:text-base text-ivory-300 font-light max-w-2xl mx-auto leading-relaxed">
          A collection of unscripted celebrations, sacred vows, and fine-art portraits documented by Harshal Mahajan across central India.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-charcoal-950 font-semibold shadow-md shadow-gold/20'
                    : 'bg-charcoal-900/80 text-ivory-300 border border-white/10 hover:border-gold/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-charcoal-900 border border-white/5 transition-all duration-500 hover:border-gold/40 hover:shadow-2xl">
                  {/* Photo Canvas */}
                  <div
                    className={`relative w-full ${
                      photo.orientation === 'landscape' ? 'aspect-[16/11]' : 'aspect-[4/5]'
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center img-editorial-zoom"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Expand Icon Badge */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4 text-gold" />
                    </div>

                    {/* Category floating tag */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded bg-black/60 text-gold border border-gold/20 backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>

                    {/* Floating Info on Bottom */}
                    <div className="absolute bottom-5 left-5 right-5 text-left transition-transform duration-300">
                      <h3 className="font-editorial text-2xl text-white font-light group-hover:text-gold transition-colors">
                        {photo.title}
                      </h3>
                      {photo.subtitle && (
                        <p className="text-xs text-ivory-300 font-light mt-0.5">
                          {photo.subtitle}
                        </p>
                      )}
                      {photo.location && (
                        <div className="flex items-center space-x-1.5 text-[10px] text-ivory-400 mt-2">
                          <MapPin className="w-3 h-3 text-gold" />
                          <span>{photo.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-ivory-400">
            <p>No photographs found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}

