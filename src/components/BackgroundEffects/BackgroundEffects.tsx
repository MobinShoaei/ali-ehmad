import React, { useMemo, useState, useEffect } from 'react';
import {
  TeddyBearSvg,
  TeddyBearCloudSvg,
  ToyBlocksSvg,
  RockingHorseSvg,
  ToyTrainSvg,
  RubberDuckSvg,
  BabyRattleSvg,
  BalloonBunchSvg,
  RainbowCloudSvg,
  PacifierSvg,
  CuteCloudSvg,
} from './ToySVGs';

export const BackgroundEffects: React.FC = () => {
  // Mouse position for subtle interactive parallax depth effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coords (-1 to +1)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate fixed positions for cartoon stars and sparkles to prevent re-renders
  const stars = useMemo(() => {
    return Array.from({ length: 32 }, (_, index) => ({
      id: index,
      top: `${Math.floor(Math.random() * 96)}%`,
      left: `${Math.floor(Math.random() * 95)}%`,
      size: `${Math.random() * 12 + 6}px`,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 3}s`,
      color: ['#fbbf24', '#f472b6', '#38bdf8', '#34d399', '#fde047'][index % 5],
    }));
  }, []);

  // Cartoon colorful floating dots/confetti
  const confettiDots = useMemo(() => {
    return Array.from({ length: 24 }, (_, index) => ({
      id: index,
      top: `${Math.floor(Math.random() * 95)}%`,
      left: `${Math.floor(Math.random() * 95)}%`,
      size: `${Math.random() * 8 + 4}px`,
      color: ['#fb7185', '#60a5fa', '#facc15', '#4ade80', '#c084fc'][index % 5],
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 2}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none cartoon-bg-pattern">
      {/* Playful Pastel Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/90 via-amber-50/70 to-blue-100/80" />

      {/* Dreamy Soft Color Glowing Orbs */}
      <div
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl animate-pulse-glow"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute top-1/3 right-5 w-80 h-80 rounded-full bg-amber-200/40 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s', transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-[30rem] h-[30rem] rounded-full bg-pink-100/60 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '4s', transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      />

      {/* Top Rainbow Arch Decoration */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-75 md:opacity-90 animate-float-slow"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.2}px), ${mousePos.y * 0.2}px)` }}
      >
        <RainbowCloudSvg className="w-48 h-28 md:w-64 md:h-36 drop-shadow-md" />
      </div>

      {/* Floating Smiling Clouds */}
      <div className="absolute top-[8%] left-[-2%] opacity-80 animate-float-slow" style={{ animationDuration: '9s' }}>
        <CuteCloudSvg className="w-32 h-20 md:w-44 md:h-28 text-white drop-shadow-sm" />
      </div>
      <div className="absolute top-[28%] right-[-3%] opacity-85 animate-float-medium" style={{ animationDuration: '11s' }}>
        <CuteCloudSvg className="w-36 h-22 md:w-48 md:h-30 text-white drop-shadow-sm" />
      </div>
      <div className="absolute top-[62%] left-[-2%] opacity-80 animate-float-slow" style={{ animationDuration: '10s' }}>
        <CuteCloudSvg className="w-40 h-24 md:w-52 md:h-32 text-white drop-shadow-sm" />
      </div>
      <div className="absolute top-[85%] right-[-2%] opacity-85 animate-float-medium" style={{ animationDuration: '12s' }}>
        <CuteCloudSvg className="w-36 h-22 md:w-48 md:h-30 text-white drop-shadow-sm" />
      </div>

      {/* ======================================================== */}
      {/* CARTOON TOY & TEDDY BEAR ELEMENTS                        */}
      {/* ======================================================== */}

      {/* 1. TOP-LEFT: Teddy Bear Floating with Balloons */}
      {/* <div
        className="absolute top-[12%] left-[3%] md:left-[8%] animate-float-bob drop-shadow-lg transition-transform duration-300"
        style={{
          animationDuration: '6s',
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
        }}
      >
        <div className="relative">
          <BalloonBunchSvg className="w-20 h-28 md:w-24 md:h-32" />
          <div className="absolute -bottom-10 right-2">
            <TeddyBearSvg className="w-20 h-20 md:w-24 md:h-24 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div> */}

      {/* 2. TOP-RIGHT: Toy Rocket & Toy Building Blocks */}
      {/* <div
        className="absolute top-[15%] right-[4%] md:right-[9%] animate-float-slow drop-shadow-md"
        style={{
          animationDuration: '7s',
          transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <ToyRocketSvg className="w-14 h-18 md:w-20 md:h-24 animate-sway" />
          <ToyBlocksSvg className="w-14 h-14 md:w-18 md:h-18 hover:rotate-12 transition-transform" />
        </div>
      </div> */}

      {/* 3. MID-RIGHT: Teddy Bear Resting on Cloud */}
      <div
        className="absolute top-[40%] right-[2%] md:right-[6%] animate-float-medium drop-shadow-lg"
        style={{
          animationDuration: '8s',
          transform: `translate(${mousePos.x * -0.9}px, ${mousePos.y * -0.9}px)`,
        }}
      >
        <TeddyBearCloudSvg className="w-28 h-24 md:w-36 md:h-30 hover:scale-105 transition-transform" />
      </div>

      {/* 4. MID-LEFT: Rubber Duck & Baby Rattle */}
      <div
        className="absolute top-[42%] left-[2%] md:left-[6%] animate-float-slow drop-shadow-md"
        style={{
          animationDuration: '6.5s',
          transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)`,
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <RubberDuckSvg className="w-14 h-14 md:w-20 md:h-20 animate-sway" />
          <BabyRattleSvg className="w-12 h-16 md:w-16 md:h-20 animate-spin-slow" />
        </div>
      </div>

      {/* 5. LOWER-LEFT: Teddy Bear with ABC Blocks & Toy Train */}
      <div
        className="absolute top-[72%] left-[4%] md:left-[8%] animate-float-bob drop-shadow-lg"
        style={{
          animationDuration: '7.5s',
          transform: `translate(${mousePos.x * 0.75}px, ${mousePos.y * 0.75}px)`,
        }}
      >
        <div className="flex items-end gap-2">
          <TeddyBearSvg className="w-22 h-22 md:w-28 md:h-28" />
          <div className="flex flex-col gap-1">
            <ToyTrainSvg className="w-16 h-12 md:w-22 md:h-16 animate-sway" />
            <PacifierSvg className="w-10 h-12 md:w-12 md:h-14" />
          </div>
        </div>
      </div>

      {/* 6. LOWER-RIGHT: Cute Rocking Horse & Toy Blocks */}
      <div
        className="absolute top-[75%] right-[3%] md:right-[7%] animate-float-slow drop-shadow-lg"
        style={{
          animationDuration: '8.5s',
          transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <RockingHorseSvg className="w-20 h-20 md:w-28 md:h-28 animate-rock" />
          <ToyBlocksSvg className="w-14 h-14 md:w-18 md:h-18" />
        </div>
      </div>

      {/* 7. BOTTOM CENTER: Additional Balloon Bunch */}
      <div
        className="absolute bottom-[4%] right-[20%] opacity-70 md:opacity-85 animate-sway drop-shadow-md"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
        }}
      >
        <BalloonBunchSvg className="w-16 h-22 md:w-22 md:h-30" />
      </div>

      {/* ======================================================== */}
      {/* TWINKLING CARTOON STARS & SPARKLES                       */}
      {/* ======================================================== */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle flex items-center justify-center"
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
            className="drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
          >
            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
          </svg>
        </div>
      ))}

      {/* Floating Confetti Dots */}
      {confettiDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full animate-float-medium opacity-60"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
