import React from 'react';

export const TeddyBearSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg className={className} viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="60" cy="122" rx="40" ry="6" fill="#cbd5e1" opacity="0.5" />
    
    {/* Ears */}
    <circle cx="28" cy="28" r="16" fill="#d97706" />
    <circle cx="28" cy="28" r="10" fill="#fcd34d" />
    <circle cx="92" cy="28" r="16" fill="#d97706" />
    <circle cx="92" cy="28" r="10" fill="#fcd34d" />

    {/* Body */}
    <ellipse cx="60" cy="80" rx="36" ry="34" fill="#f59e0b" />
    <ellipse cx="60" cy="82" rx="24" ry="22" fill="#fef08a" />

    {/* Head */}
    <circle cx="60" cy="46" r="32" fill="#f59e0b" />

    {/* Muzzle */}
    <ellipse cx="60" cy="54" rx="14" ry="11" fill="#fef08a" />
    {/* Nose */}
    <ellipse cx="60" cy="49" rx="6" ry="4" fill="#78350f" />
    {/* Mouth */}
    <path d="M57 53 Q60 57 63 53" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Eyes */}
    <circle cx="48" cy="43" r="4" fill="#1e293b" />
    <circle cx="46.5" cy="41.5" r="1.5" fill="#ffffff" />
    <circle cx="72" cy="43" r="4" fill="#1e293b" />
    <circle cx="70.5" cy="41.5" r="1.5" fill="#ffffff" />

    {/* Rosy Cheeks */}
    <circle cx="40" cy="50" r="5" fill="#f472b6" opacity="0.65" />
    <circle cx="80" cy="50" r="5" fill="#f472b6" opacity="0.65" />

    {/* Arms */}
    <ellipse cx="25" cy="74" rx="11" ry="18" transform="rotate(22 25 74)" fill="#d97706" />
    <ellipse cx="95" cy="74" rx="11" ry="18" transform="rotate(-22 95 74)" fill="#d97706" />

    {/* Legs / Paws */}
    <circle cx="34" cy="104" r="15" fill="#d97706" />
    <circle cx="34" cy="104" r="9" fill="#fde047" />
    <circle cx="86" cy="104" r="15" fill="#d97706" />
    <circle cx="86" cy="104" r="9" fill="#fde047" />

    {/* Bow Tie */}
    <path d="M48 64 L60 67 L72 64 L68 73 L60 67 L52 73 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
    <circle cx="60" cy="67" r="4" fill="#0284c7" />

    {/* Party Hat */}
    <polygon points="60,6 46,28 74,28" fill="#f472b6" />
    <circle cx="60" cy="5" r="4" fill="#fde047" />
    <path d="M50 22 L70 22" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

export const TeddyBearCloudSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg className={className} viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud */}
    <path d="M20 90 C10 90 0 80 0 68 C0 58 8 48 20 48 C24 30 40 16 60 16 C80 16 94 28 100 44 C112 44 124 54 124 68 C124 80 114 90 100 90 Z" fill="#ffffff" opacity="0.95" filter="drop-shadow(0px 8px 16px rgba(186, 230, 253, 0.5))" />
    
    {/* Bear head peeking over cloud */}
    <g transform="translate(10, 0)">
      <circle cx="44" cy="38" r="11" fill="#d97706" />
      <circle cx="44" cy="38" r="7" fill="#fde047" />
      <circle cx="84" cy="38" r="11" fill="#d97706" />
      <circle cx="84" cy="38" r="7" fill="#fde047" />

      <circle cx="64" cy="48" r="22" fill="#f59e0b" />
      <ellipse cx="64" cy="53" rx="10" ry="7" fill="#fef08a" />
      <ellipse cx="64" cy="50" rx="4" ry="3" fill="#78350f" />

      <circle cx="56" cy="45" r="3" fill="#1e293b" />
      <circle cx="72" cy="45" r="3" fill="#1e293b" />
      <circle cx="50" cy="50" r="4" fill="#f472b6" opacity="0.7" />
      <circle cx="78" cy="50" r="4" fill="#f472b6" opacity="0.7" />
      <path d="M62 53 Q64 56 66 53" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Sleeping cloud eyes */}
    <path d="M35 70 Q40 75 45 70" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M80 70 Q85 75 90 70" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="28" cy="72" r="4" fill="#f472b6" opacity="0.5" />
    <circle cx="96" cy="72" r="4" fill="#f472b6" opacity="0.5" />
  </svg>
);

export const ToyBlocksSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Block 1 (A) */}
    <rect x="10" y="45" width="40" height="40" rx="8" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
    <rect x="15" y="50" width="30" height="30" rx="5" fill="#bae6fd" opacity="0.5" />
    <text x="30" y="73" fill="#0369a1" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">A</text>

    {/* Block 2 (B) */}
    <rect x="45" y="45" width="40" height="40" rx="8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    <rect x="50" y="50" width="30" height="30" rx="5" fill="#fef08a" opacity="0.5" />
    <text x="65" y="73" fill="#b45309" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">B</text>

    {/* Block 3 Top (C) */}
    <rect x="28" y="10" width="40" height="40" rx="8" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
    <rect x="33" y="15" width="30" height="30" rx="5" fill="#fbcfe8" opacity="0.5" />
    <text x="48" y="38" fill="#9d174d" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">C</text>
  </svg>
);

export const RockingHorseSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg className={className} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rocker Rails */}
    <path d="M10 95 Q60 115 110 95" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <line x1="35" y1="65" x2="25" y2="98" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
    <line x1="85" y1="65" x2="95" y2="98" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />

    {/* Body */}
    <ellipse cx="60" cy="55" rx="32" ry="18" fill="#fde047" stroke="#d97706" strokeWidth="2.5" />

    {/* Saddle */}
    <path d="M50 42 Q60 52 70 42 C72 48 70 54 60 54 C50 54 48 48 50 42 Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />

    {/* Neck and Head */}
    <path d="M80 50 L95 28 C98 22 92 15 84 20 L76 26" fill="#fde047" stroke="#d97706" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="88" cy="22" r="2.5" fill="#1e293b" />

    {/* Mane */}
    <path d="M74 24 Q68 18 72 34" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" />

    {/* Tail */}
    <path d="M30 52 Q20 48 24 62" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const ToyTrainSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg className={className} viewBox="0 0 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Engine Body */}
    <rect x="35" y="35" width="55" height="35" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
    {/* Cabin */}
    <rect x="65" y="18" width="30" height="42" rx="5" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
    <rect x="72" y="26" width="16" height="16" rx="3" fill="#ffffff" />

    {/* Chimney */}
    <rect x="42" y="18" width="12" height="18" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    {/* Smoke Clouds */}
    <circle cx="48" cy="10" r="5" fill="#e2e8f0" opacity="0.8" />
    <circle cx="42" cy="4" r="7" fill="#ffffff" opacity="0.9" />

    {/* Front Bumper */}
    <path d="M25 60 L35 50 L35 70 Z" fill="#ef4444" />

    {/* Wheels */}
    <circle cx="45" cy="72" r="10" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
    <circle cx="45" cy="72" r="4" fill="#ffffff" />
    <circle cx="70" cy="72" r="10" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
    <circle cx="70" cy="72" r="4" fill="#ffffff" />
    <circle cx="92" cy="72" r="10" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
    <circle cx="92" cy="72" r="4" fill="#ffffff" />
  </svg>
);

export const ToyRocketSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-20' }) => (
  <svg className={className} viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fins */}
    <path d="M20 70 L5 90 L25 80 Z" fill="#ef4444" />
    <path d="M60 70 L75 90 L55 80 Z" fill="#ef4444" />

    {/* Body */}
    <path d="M20 75 C20 30 40 5 40 5 C40 5 60 30 60 75 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

    {/* Tip */}
    <path d="M28 30 C34 15 40 5 40 5 C40 5 46 15 52 30 Z" fill="#38bdf8" />

    {/* Window */}
    <circle cx="40" cy="45" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
    <circle cx="40" cy="45" r="5" fill="#38bdf8" />

    {/* Fire */}
    <path d="M32 78 Q40 105 48 78 Q40 92 32 78 Z" fill="#fbbf24" />
    <path d="M35 78 Q40 95 45 78 Z" fill="#ef4444" />
  </svg>
);

export const RubberDuckSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg className={className} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Water Shadow */}
    <ellipse cx="45" cy="80" rx="30" ry="5" fill="#93c5fd" opacity="0.5" />

    {/* Body */}
    <path d="M15 52 C15 38 35 38 45 42 C50 35 55 20 70 20 C82 20 85 32 75 40 C75 40 85 45 85 58 C85 72 65 76 45 76 C22 76 15 66 15 52 Z" fill="#fde047" stroke="#d97706" strokeWidth="2" />

    {/* Head */}
    <circle cx="32" cy="30" r="16" fill="#fde047" stroke="#d97706" strokeWidth="2" />

    {/* Beak */}
    <path d="M18 30 C10 30 10 38 18 38 Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />

    {/* Eye */}
    <circle cx="28" cy="26" r="3" fill="#1e293b" />
    <circle cx="27" cy="25" r="1" fill="#ffffff" />

    {/* Rosy Cheek */}
    <circle cx="34" cy="33" r="3" fill="#f472b6" opacity="0.6" />
  </svg>
);

export const BabyRattleSvg: React.FC<{ className?: string }> = ({ className = 'w-14 h-18' }) => (
  <svg className={className} viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Handle */}
    <rect x="31" y="45" width="8" height="35" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
    <circle cx="35" cy="86" r="8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

    {/* Head Ring */}
    <circle cx="35" cy="30" r="22" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
    <circle cx="35" cy="30" r="12" fill="#fbcfe8" />

    {/* Beads */}
    <circle cx="20" cy="20" r="4" fill="#38bdf8" />
    <circle cx="50" cy="20" r="4" fill="#fde047" />
    <circle cx="50" cy="40" r="4" fill="#a7f3d0" />
    <circle cx="20" cy="40" r="4" fill="#fb7185" />
  </svg>
);

export const BalloonBunchSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-28' }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Strings */}
    <path d="M30 65 Q45 95 50 135" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
    <path d="M50 55 Q50 95 50 135" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
    <path d="M70 65 Q55 95 50 135" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />

    {/* Left Balloon (Sky Blue) */}
    <g transform="translate(10, 20)">
      <ellipse cx="22" cy="30" rx="18" ry="24" fill="#38bdf8" />
      <ellipse cx="16" cy="20" rx="5" ry="9" fill="#ffffff" opacity="0.4" />
      <polygon points="22,54 18,59 26,59" fill="#0284c7" />
    </g>

    {/* Right Balloon (Pink) */}
    <g transform="translate(48, 20)">
      <ellipse cx="22" cy="30" rx="18" ry="24" fill="#f472b6" />
      <ellipse cx="16" cy="20" rx="5" ry="9" fill="#ffffff" opacity="0.4" />
      <polygon points="22,54 18,59 26,59" fill="#db2777" />
    </g>

    {/* Center Top Balloon (Yellow) */}
    <g transform="translate(28, 0)">
      <ellipse cx="22" cy="30" rx="20" ry="26" fill="#fde047" />
      <ellipse cx="15" cy="18" rx="6" ry="10" fill="#ffffff" opacity="0.5" />
      <polygon points="22,56 18,61 26,61" fill="#d97706" />
    </g>
  </svg>
);

export const RainbowCloudSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg className={className} viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rainbow Arcs */}
    <path d="M15 70 A55 55 0 0 1 125 70" stroke="#f472b6" strokeWidth="7" strokeLinecap="round" fill="none" />
    <path d="M23 70 A47 47 0 0 1 117 70" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round" fill="none" />
    <path d="M31 70 A39 39 0 0 1 109 70" stroke="#34d399" strokeWidth="7" strokeLinecap="round" fill="none" />
    <path d="M39 70 A31 31 0 0 1 101 70" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" fill="none" />

    {/* Clouds at ends */}
    <circle cx="20" cy="70" r="14" fill="#ffffff" />
    <circle cx="34" cy="70" r="10" fill="#ffffff" />
    <circle cx="120" cy="70" r="14" fill="#ffffff" />
    <circle cx="106" cy="70" r="10" fill="#ffffff" />

    {/* Rosy blush on left cloud */}
    <circle cx="16" cy="72" r="3" fill="#f472b6" opacity="0.6" />
    <circle cx="124" cy="72" r="3" fill="#f472b6" opacity="0.6" />
  </svg>
);

export const PacifierSvg: React.FC<{ className?: string }> = ({ className = 'w-12 h-14' }) => (
  <svg className={className} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nipple */}
    <path d="M22 25 Q30 5 38 25 Z" fill="#fde047" opacity="0.9" />
    {/* Shield */}
    <rect x="10" y="24" width="40" height="16" rx="8" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
    {/* Handle Ring */}
    <circle cx="30" cy="50" r="12" stroke="#38bdf8" strokeWidth="4" fill="none" />
  </svg>
);

export const CuteCloudSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 55 C10 55 2 47 2 37 C2 28 8 20 18 19 C22 8 35 0 50 0 C65 0 77 7 82 18 C92 18 100 25 100 35 C100 45 92 55 80 55 Z" fill="#ffffff" opacity="0.9" />
    {/* Smiling Face */}
    <path d="M38 32 Q42 37 46 32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M54 32 Q58 37 62 32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="35" r="3" fill="#f472b6" opacity="0.6" />
    <circle cx="68" cy="35" r="3" fill="#f472b6" opacity="0.6" />
  </svg>
);
