'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { PhotoItem } from '@/data/portfolio';

interface LightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onNavigate: (photo: PhotoItem) => void;
}

export default function Lightbox({ photo, photos, onClose, onNavigate }: LightboxProps) {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1]);
    } else if (currentIndex === photos.length - 1) {
      onNavigate(photos[0]); // Loop
    }
  }, [currentIndex, photos, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    } else if (currentIndex === 0) {
      onNavigate(photos[photos.length - 1]); // Loop
    }
  }, [currentIndex, photos, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo, onClose, handleNext, handlePrev]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-2xl transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-ivory-400">
          <span className="text-gold font-medium">Smile Art Gallery</span>
          <span>•</span>
          <span>
            {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-ivory-300 hover:text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-charcoal-900/80 hover:bg-gold hover:text-charcoal-950 text-white transition-all duration-300 border border-white/10 focus:outline-none"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-charcoal-900/80 hover:bg-gold hover:text-charcoal-950 text-white transition-all duration-300 border border-white/10 focus:outline-none"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full mx-4 sm:mx-12 flex flex-col md:flex-row items-center justify-center gap-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl bg-black/40">
          <Image
            src={photo.src}
            alt={photo.title}
            width={photo.width}
            height={photo.height}
            className="max-h-[70vh] w-auto h-auto object-contain transition-all duration-500 rounded"
            priority
          />
        </div>

        {/* Image Editorial Details Sidebar / Caption */}
        <div className="w-full md:w-96 text-left space-y-4 px-2">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
            <Tag className="w-3 h-3" />
            <span>{photo.category}</span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-wide">
            {photo.title}
          </h3>

          {photo.editorialQuote && (
            <p className="font-editorial italic text-base text-gold/90 border-l border-gold/40 pl-3 py-1">
              {photo.editorialQuote}
            </p>
          )}

          <p className="text-xs text-ivory-300 font-light leading-relaxed">
            {photo.description}
          </p>

          <div className="pt-2 flex items-center justify-between text-[11px] text-ivory-500 border-t border-white/10">
            {photo.location && (
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-gold" />
                <span>{photo.location}</span>
              </span>
            )}
            {photo.year && <span>{photo.year}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

