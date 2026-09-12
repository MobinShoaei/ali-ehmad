import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Maximize2, X, Sparkles } from 'lucide-react';
import type { InvitationConfig, GalleryItem } from '../../types/invitation';

interface GalleryProps {
  config: InvitationConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ config }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const images = config.galleryImages;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-12 px-4 max-w-4xl mx-auto text-center z-10">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>آلبوم خاطرات</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold baby-gradient-text">
          گالری تصاویر علی ا‌ِحماد
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          گوشه‌هایی از لحظات شیرین و دوست‌داشتنی فرشته ما
        </p>
      </motion.div>

      {/* Main Slider Container */}
      <div className="relative max-w-xl mx-auto">
        <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl border border-sky-100">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </AnimatePresence>

            {/* Caption Overlay */}
            {/* images[currentIndex].caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent p-4 text-white text-right rounded-b-[2rem]">
                <p className="text-sm font-semibold">{images[currentIndex].caption}</p>
              </div>
            )*/}

            {/* Lightbox Zoom Button */}
            <button
              onClick={() => setLightboxImage(images[currentIndex])}
              className="absolute top-3 left-3 p-2 rounded-full bg-white/80 text-slate-700 backdrop-blur-md shadow-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="بزرگ‌نمایی تصویر"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute right-2 top-1/2 -translate-y-1/2 sm:-right-5 p-3 rounded-full bg-white/90 text-sky-800 shadow-xl border border-sky-100 hover:bg-sky-50 active:scale-95 transition-all z-20"
          aria-label="تصویر قبلی"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute left-2 top-1/2 -translate-y-1/2 sm:-left-5 p-3 rounded-full bg-white/90 text-sky-800 shadow-xl border border-sky-100 hover:bg-sky-50 active:scale-95 transition-all z-20"
          aria-label="تصویر بعدی"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'w-8 bg-sky-600'
              : 'w-2.5 bg-sky-200 hover:bg-sky-300'
              }`}
            aria-label={`رفتن به تصویر ${index + 1}`}
          />
        ))}
      </div>

      {/* Grid Thumbnail Strip for Desktop / Tablet */}
      <div className="hidden sm:grid grid-cols-6 gap-3 mt-6 max-w-xl mx-auto">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setCurrentIndex(idx)}
            className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${idx === currentIndex
              ? 'border-sky-500 scale-105 shadow-md'
              : 'border-transparent opacity-60 hover:opacity-100'
              }`}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain max-h-[80vh] rounded-3xl"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
