import React, { useMemo, useState, useEffect } from 'react';
import {
  TeddyBearSvg,
  TeddyBearBalloonSvg,
  TeddyBearCloudSvg,
  TeddyBearPeekingSvg,
  TeddyPawSvg,
  CuteCloudSvg,
  TeddyHeartSvg,
} from './ToySVGs';

export const BackgroundEffects: React.FC = () => {
  // Mouse position for subtle interactive parallax depth effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coords (-1 to +1)
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Soft, sparse twinkling stars (12 stars - clean & uncluttered)
  const stars = useMemo(() => {
    return Array.from({ length: 14 }, (_, index) => ({
      id: index,
      top: `${Math.floor(10 + (index * 6.5))}%`,
      left: `${Math.floor(5 + ((index * 23) % 90))}%`,
      size: `${Math.floor((index % 3) * 3 + 8)}px`,
      duration: `${3 + (index % 4)}s`,
      delay: `${(index % 3) * 0.8}s`,
      color: ['#fbbf24', '#f472b6', '#38bdf8', '#fb7185'][index % 4],
    }));
  }, []);

  // Floating subtle teddy hearts and paw accents (8 elements - uncluttered)
  const heartsAndPaws = useMemo(() => {
    return Array.from({ length: 8 }, (_, index) => ({
      id: index,
      top: `${Math.floor(12 + (index * 10))}%`,
      left: `${Math.floor(8 + ((index * 37) % 84))}%`,
      size: `${Math.floor((index % 2) * 4 + 14)}px`,
      color: ['#fb7185', '#60a5fa', '#facc15', '#f472b6'][index % 4],
      duration: `${6 + (index % 3) * 2}s`,
      delay: `${index * 0.5}s`,
      isPaw: index % 2 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none cartoon-bg-pattern">
      {/* Soft Cozy Pastel Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-sky-50/70 to-blue-50/80" />

      {/* Dreamy Soft Ambient Lighting Orbs */}
      <div
        className="absolute top-12 left-12 w-80 h-80 rounded-full bg-amber-200/40 blur-3xl animate-pulse-glow"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      />
      <div
        className="absolute top-1/2 right-8 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2.5s', transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
      />
      <div
        className="absolute bottom-16 left-1/3 w-80 h-80 rounded-full bg-pink-200/35 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '4s', transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      />

      {/* Fluffy Background Clouds (Placed softly at side margins) */}
      <div className="absolute top-[6%] left-[-1%] opacity-70 animate-float-slow" style={{ animationDuration: '10s' }}>
        <CuteCloudSvg className="w-28 h-18 md:w-40 md:h-26 text-white drop-shadow-sm" />
      </div>
      <div className="absolute top-[32%] right-[-2%] opacity-75 animate-float-medium" style={{ animationDuration: '12s' }}>
        <CuteCloudSvg className="w-32 h-20 md:w-44 md:h-28 text-white drop-shadow-sm" />
      </div>
      <div className="absolute top-[65%] left-[-1%] opacity-70 animate-float-slow" style={{ animationDuration: '11s' }}>
        <CuteCloudSvg className="w-32 h-20 md:w-44 md:h-28 text-white drop-shadow-sm" />
      </div>

      {/* ======================================================== */}
      {/* DEDICATED TEDDY BEAR SCENES (Uncluttered & Elegant)       */}
      {/* ======================================================== */}

      {/* 1. TOP-LEFT: Cute Teddy Bear Floating with Balloons */}
      <div
        className="absolute top-[8%] left-[2%] md:left-[6%] opacity-90 hover:opacity-100 animate-float-bob drop-shadow-md transition-transform duration-300"
        style={{
          animationDuration: '6.5s',
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
        }}
      >
        <TeddyBearBalloonSvg className="w-24 h-36 md:w-32 md:h-48 hover:scale-105 transition-transform" />
      </div>

      {/* 2. MID-RIGHT: Teddy Bear Sleeping Peacefully on a Cloud */}
      <div
        className="absolute top-[35%] right-[2%] md:right-[5%] opacity-90 hover:opacity-100 animate-float-medium drop-shadow-lg"
        style={{
          animationDuration: '8s',
          transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)`,
        }}
      >
        <TeddyBearCloudSvg className="w-28 h-20 md:w-40 md:h-28 hover:scale-105 transition-transform" />
      </div>

      {/* 3. LOWER-LEFT: Classic Sitting Teddy Bear with Bow Tie & Party Hat */}
      <div
        className="absolute top-[68%] left-[3%] md:left-[7%] opacity-90 hover:opacity-100 animate-float-bob drop-shadow-lg"
        style={{
          animationDuration: '7s',
          transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)`,
        }}
      >
        <TeddyBearSvg className="w-24 h-24 md:w-32 md:h-32 hover:rotate-3 transition-transform" />
      </div>

      {/* 4. LOWER-RIGHT: Teddy Bear Peeking Behind Cloud & Waving */}
      <div
        className="absolute top-[75%] right-[3%] md:right-[6%] opacity-90 hover:opacity-100 animate-float-slow drop-shadow-md"
        style={{
          animationDuration: '8.5s',
          transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`,
        }}
      >
        <TeddyBearPeekingSvg className="w-24 h-22 md:w-32 md:h-28 hover:scale-105 transition-transform" />
      </div>

      {/* ======================================================== */}
      {/* FLOATING SUBTLE TEDDY PAW PRINTS & HEARTS                 */}
      {/* ======================================================== */}
      {heartsAndPaws.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-slow opacity-25"
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.isPaw ? (
            <TeddyPawSvg className="w-5 h-5 md:w-7 md:h-7" fill={item.color} />
          ) : (
            <TeddyHeartSvg className="w-4 h-4 md:w-6 md:h-6" color={item.color} />
          )}
        </div>
      ))}

      {/* ======================================================== */}
      {/* SPARSE TWINKLING GOLDEN & PINK STARS                     */}
      {/* ======================================================== */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle flex items-center justify-center opacity-60"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill={star.color}
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
          >
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default BackgroundEffects;

