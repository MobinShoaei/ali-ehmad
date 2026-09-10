import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Hand, RefreshCw, Heart } from 'lucide-react';
import type { InvitationConfig } from '../../types/invitation';

interface PhotoRevealProps {
  config: InvitationConfig;
}

export const PhotoReveal: React.FC<PhotoRevealProps> = ({ config }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [erasedPercentage, setErasedPercentage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Initialize canvas overlay
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Set display and internal resolution
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Draw dreamy cloud overlay background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#e0f2fe'); // Sky 100
    gradient.addColorStop(0.5, '#bae6fd'); // Sky 200
    gradient.addColorStop(1, '#7dd3fc'); // Sky 300
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add soft clouds pattern to overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 18; i++) {
      const cx = (Math.sin(i * 99) * 0.5 + 0.5) * width;
      const cy = (Math.cos(i * 33) * 0.5 + 0.5) * height;
      const radius = 30 + (i % 5) * 15;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add overlay text pattern
    ctx.fillStyle = 'rgba(30, 58, 138, 0.55)';
    ctx.font = 'bold 16px Vazirmatn, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ لمس کنید و پاک کنید ✨', width / 2, height / 2);

    setIsRevealed(false);
    setErasedPercentage(0);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Calculate erased percentage
  const checkErasedPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    // Sample every 8th pixel to keep performance high
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparentCount = 0;
    const step = 8 * 4;

    for (let i = 3; i < pixels.length; i += step) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const totalSampled = pixels.length / step;
    const percentage = Math.round((transparentCount / totalSampled) * 100);
    setErasedPercentage(percentage);

    // Threshold reveal at 65%
    if (percentage >= 65 && !isRevealed) {
      setIsRevealed(true);
      triggerCelebration();
    }
  }, [isRevealed]);

  // Trigger celebration sparkles
  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.4 },
      colors: ['#38bdf8', '#fbbf24', '#f472b6', '#60a5fa', '#fef08a'],
    });
  };

  // Erase function for pointer events
  const handleScratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';

    // Brush radius proportional to screen size (35px to 55px)
    const brushRadius = Math.min(Math.max(rect.width * 0.12, 35), 55);

    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();

    // Add extra stroke for smoother scratch line
    ctx.lineWidth = brushRadius * 1.5;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.restore();

    checkErasedPercentage();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    setIsScratching(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleScratch(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching || isRevealed) return;
    handleScratch(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsScratching(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 pt-12 pb-16 safe-padding-top text-center overflow-hidden">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 max-w-xl mx-auto mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-amber-200/80 text-amber-700 shadow-sm text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span>{config.heroTitle}</span>
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold baby-gradient-text tracking-tight leading-relaxed mb-2">
          {config.heroSubtitle}
        </h1>

        <p className="text-slate-600 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
          علی احماد عزیزمان 🩵<br />
          کوچکترین عضو خانوادهمان، بزرگترین شادی قلبمان شده است.<br />
          با عشق و شادی، شما را دعوت میکنیم<br />
          تا در جشن به دنیا آمدنش، کنار ما باشید<br />
          و این خاطرهی شیرین را با هم بسازیم. 👶✨
        </p>
      </motion.div>

      {/* Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 my-4"
      >
        {/* Frame Outer Decoration */}
        <div className="relative p-3 sm:p-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-200 via-white to-amber-100 shadow-[0_20px_50px_rgba(186,230,253,0.6)] border border-white/80">
          {/* Subtle Corner Stars */}
          <div className="absolute -top-3 -right-3 text-amber-400 animate-bounce">
            <Sparkles className="w-8 h-8 fill-amber-300" />
          </div>
          <div className="absolute -bottom-3 -left-3 text-sky-400 animate-pulse">
            <Heart className="w-7 h-7 fill-sky-300" />
          </div>

          {/* Photo Canvas Box */}
          <div
            ref={containerRef}
            className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-inner bg-sky-50 border-4 border-white"
          >
            {/* Real Baby Image */}
            <img
              src={config.heroImage}
              alt={config.babyName}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 hover:scale-105"
            />

            {/* Scratch Canvas Overlay */}
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={`absolute inset-0 touch-none cursor-pointer rounded-[1.8rem] transition-opacity duration-1000 ${
                isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            />

            {/* Scratch Instruction Tooltip */}
            <AnimatePresence>
              {!isRevealed && imageLoaded && erasedPercentage < 20 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center gap-2 px-4 py-2 bg-slate-900/75 text-white backdrop-blur-md text-xs sm:text-sm rounded-full shadow-lg border border-white/20 whitespace-nowrap"
                >
                  <Hand className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>{config.heroHintText}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress & Control */}
        <div className="mt-4 flex flex-col items-center gap-2">
          {!isRevealed && (
            <div className="w-48 bg-sky-100 rounded-full h-2 overflow-hidden border border-sky-200 shadow-inner">
              <div
                className="bg-gradient-to-r from-sky-400 to-amber-400 h-full transition-all duration-300"
                style={{ width: `${Math.min(erasedPercentage, 100)}%` }}
              />
            </div>
          )}

          {isRevealed ? (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={initCanvas}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm text-sky-700 bg-white/90 border border-sky-200 rounded-full shadow-sm hover:bg-sky-50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>پوشاندن مجدد تصویر</span>
            </motion.button>
          ) : (
            <p className="text-xs text-slate-500 font-light">
              پیشرفت پاک‌سازی: {erasedPercentage}٪
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};
