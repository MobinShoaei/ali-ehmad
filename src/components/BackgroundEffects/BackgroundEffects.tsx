import { useMemo } from 'react';

export const BackgroundEffects: React.FC = () => {
  // Generate random static values for stars to avoid re-render recalculation
  const stars = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      top: `${Math.floor(Math.random() * 95)}%`,
      left: `${Math.floor(Math.random() * 95)}%`,
      size: `${Math.random() * 8 + 4}px`,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  const clouds = useMemo(() => {
    return [
      { id: 1, top: '5%', left: '-5%', size: 'w-48 h-24 md:w-80 md:h-40', duration: '25s', delay: '0s' },
      { id: 2, top: '25%', right: '-8%', size: 'w-64 h-32 md:w-96 md:h-48', duration: '32s', delay: '2s' },
      { id: 3, top: '55%', left: '-10%', size: 'w-56 h-28 md:w-88 md:h-44', duration: '28s', delay: '5s' },
      { id: 4, top: '80%', right: '-6%', size: 'w-52 h-26 md:w-80 md:h-40', duration: '30s', delay: '1s' },
    ];
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Gentle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-blue-50/80" />

      {/* Subtle Glowing Orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-sky-200/40 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Floating Animated Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute ${cloud.top} ${cloud.left ? `left-[${cloud.left}]` : ''} ${
            cloud.right ? `right-[${cloud.right}]` : ''
          } opacity-40 md:opacity-50 animate-float-slow`}
          style={{
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <svg className={`${cloud.size} fill-white drop-shadow-sm`} viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-amber-200/90 shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
