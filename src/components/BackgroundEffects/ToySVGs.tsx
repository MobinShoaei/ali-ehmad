import React from 'react';

// 1. Classic Sitting Teddy Bear with Bow Tie & Crown/Party Hat
export const TeddyBearSvg: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg className={className} viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="60" cy="123" rx="42" ry="6" fill="#cbd5e1" opacity="0.4" />

    {/* Outer Ears */}
    <circle cx="26" cy="28" r="17" fill="#d97706" />
    <circle cx="26" cy="28" r="10" fill="#fde047" />
    <circle cx="94" cy="28" r="17" fill="#d97706" />
    <circle cx="94" cy="28" r="10" fill="#fde047" />

    {/* Body */}
    <ellipse cx="60" cy="82" rx="38" ry="34" fill="#f59e0b" />
    <ellipse cx="60" cy="84" rx="24" ry="21" fill="#fef3c7" />

    {/* Head */}
    <circle cx="60" cy="46" r="33" fill="#f59e0b" />

    {/* Muzzle */}
    <ellipse cx="60" cy="55" rx="15" ry="12" fill="#fef3c7" />
    {/* Nose */}
    <ellipse cx="60" cy="49" rx="6.5" ry="4.5" fill="#78350f" />
    {/* Mouth */}
    <path d="M56 54 Q60 58 64 54" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Eyes */}
    <circle cx="47" cy="42" r="4.5" fill="#1e293b" />
    <circle cx="45.5" cy="40.5" r="1.8" fill="#ffffff" />
    <circle cx="73" cy="42" r="4.5" fill="#1e293b" />
    <circle cx="71.5" cy="40.5" r="1.8" fill="#ffffff" />

    {/* Rosy Cheeks */}
    <circle cx="39" cy="50" r="5.5" fill="#fb7185" opacity="0.6" />
    <circle cx="81" cy="50" r="5.5" fill="#fb7185" opacity="0.6" />

    {/* Arms */}
    <ellipse cx="24" cy="74" rx="11" ry="19" transform="rotate(22 24 74)" fill="#d97706" />
    <ellipse cx="96" cy="74" rx="11" ry="19" transform="rotate(-22 96 74)" fill="#d97706" />

    {/* Legs / Paws */}
    <circle cx="33" cy="105" r="16" fill="#d97706" />
    <circle cx="33" cy="105" r="9.5" fill="#fde047" />
    <circle cx="87" cy="105" r="16" fill="#d97706" />
    <circle cx="87" cy="105" r="9.5" fill="#fde047" />

    {/* Bow Tie */}
    <path d="M47 64 L60 68 L73 64 L69 74 L60 68 L51 74 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
    <circle cx="60" cy="68" r="4" fill="#0284c7" />

    {/* Party Hat */}
    <polygon points="60,4 45,28 75,28" fill="#f472b6" />
    <circle cx="60" cy="3" r="4" fill="#fde047" />
    <path d="M50 21 L70 21" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

// 2. Teddy Bear Floating with Pastel Balloons
export const TeddyBearBalloonSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-36' }) => (
  <svg className={className} viewBox="0 0 110 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Balloon Strings */}
    <path d="M32 70 Q50 100 55 125" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <path d="M55 60 Q55 95 55 125" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <path d="M78 70 Q60 100 55 125" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />

    {/* Balloons */}
    {/* Left (Blue) */}
    <g transform="translate(12, 20)">
      <ellipse cx="20" cy="28" rx="17" ry="22" fill="#7dd3fc" />
      <ellipse cx="14" cy="18" rx="5" ry="8" fill="#ffffff" opacity="0.5" />
      <polygon points="20,50 16,55 24,55" fill="#0284c7" />
    </g>
    {/* Right (Pink) */}
    <g transform="translate(56, 20)">
      <ellipse cx="20" cy="28" rx="17" ry="22" fill="#f472b6" />
      <ellipse cx="14" cy="18" rx="5" ry="8" fill="#ffffff" opacity="0.5" />
      <polygon points="20,50 16,55 24,55" fill="#db2777" />
    </g>
    {/* Center Top (Gold) */}
    <g transform="translate(34, 0)">
      <ellipse cx="21" cy="29" rx="19" ry="24" fill="#fbbf24" />
      <ellipse cx="14" cy="17" rx="6" ry="9" fill="#ffffff" opacity="0.6" />
      <polygon points="21,53 17,58 25,58" fill="#d97706" />
    </g>

    {/* Teddy Hanging from Strings */}
    <g transform="translate(25, 105)">
      {/* Ears */}
      <circle cx="10" cy="10" r="8" fill="#d97706" />
      <circle cx="10" cy="10" r="5" fill="#fde047" />
      <circle cx="50" cy="10" r="8" fill="#d97706" />
      <circle cx="50" cy="10" r="5" fill="#fde047" />

      {/* Head */}
      <circle cx="30" cy="20" r="18" fill="#f59e0b" />
      <ellipse cx="30" cy="25" rx="8" ry="6" fill="#fef3c7" />
      <ellipse cx="30" cy="22" rx="3.5" ry="2.5" fill="#78350f" />
      <path d="M28 25 Q30 27 32 25" stroke="#78350f" strokeWidth="1.5" fill="none" />
      <circle cx="23" cy="18" r="2.5" fill="#1e293b" />
      <circle cx="37" cy="18" r="2.5" fill="#1e293b" />

      {/* Body */}
      <ellipse cx="30" cy="40" rx="15" ry="14" fill="#f59e0b" />
      <ellipse cx="30" cy="41" rx="9" ry="8" fill="#fef3c7" />

      {/* Raised Paws holding string */}
      <ellipse cx="16" cy="28" rx="5" ry="9" transform="rotate(-30 16 28)" fill="#d97706" />
      <ellipse cx="44" cy="28" rx="5" ry="9" transform="rotate(30 44 28)" fill="#d97706" />

      {/* Feet */}
      <circle cx="18" cy="52" r="7" fill="#d97706" />
      <circle cx="42" cy="52" r="7" fill="#d97706" />
    </g>
  </svg>
);

// 3. Teddy Bear Sleeping soundly on Cloud with Stars
export const TeddyBearCloudSvg: React.FC<{ className?: string }> = ({ className = 'w-32 h-24' }) => (
  <svg className={className} viewBox="0 0 150 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Soft Glow Shadow */}
    <ellipse cx="75" cy="85" rx="60" ry="16" fill="#bae6fd" opacity="0.4" />

    {/* Sleeping Teddy Body lying down */}
    <g transform="translate(25, 12)">
      {/* Ears */}
      <circle cx="25" cy="22" r="9" fill="#d97706" />
      <circle cx="25" cy="22" r="5" fill="#fde047" />
      <circle cx="65" cy="22" r="9" fill="#d97706" />
      <circle cx="65" cy="22" r="5" fill="#fde047" />

      {/* Head */}
      <circle cx="45" cy="30" r="21" fill="#f59e0b" />
      <ellipse cx="45" cy="36" rx="9" ry="7" fill="#fef3c7" />
      <ellipse cx="45" cy="33" rx="4" ry="2.5" fill="#78350f" />

      {/* Sleeping Eyes (curved lines) */}
      <path d="M36 29 Q40 33 44 29" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M46 29 Q50 33 54 29" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Rosy blush */}
      <circle cx="33" cy="34" r="4" fill="#fb7185" opacity="0.6" />
      <circle cx="57" cy="34" r="4" fill="#fb7185" opacity="0.6" />

      {/* Nightcap */}
      <path d="M45 10 Q65 -5 75 12" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="76" cy="12" r="5" fill="#fde047" />

      {/* Hugging a little pillow/star */}
      <polygon points="45,42 47,48 53,48 48,52 50,58 45,54 40,58 42,52 37,48 43,48" fill="#fde047" />
    </g>

    {/* Cloud underneath */}
    <path d="M15 80 C5 80 0 70 0 58 C0 48 8 38 20 38 C25 20 45 8 68 8 C90 8 108 20 115 38 C128 38 140 48 140 60 C140 72 130 80 115 80 Z" fill="#ffffff" opacity="0.95" />

    {/* Sleeping cloud cheeks */}
    <circle cx="30" cy="62" r="4" fill="#fb7185" opacity="0.5" />
    <circle cx="110" cy="62" r="4" fill="#fb7185" opacity="0.5" />

    {/* Floating Zzz */}
    <text x="110" y="25" fill="#93c5fd" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Z</text>
    <text x="122" y="16" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">z</text>
  </svg>
);

// 4. Teddy Bear Peeking Happily
export const TeddyBearPeekingSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ears */}
    <circle cx="24" cy="24" r="14" fill="#d97706" />
    <circle cx="24" cy="24" r="8" fill="#fde047" />
    <circle cx="86" cy="24" r="14" fill="#d97706" />
    <circle cx="86" cy="24" r="8" fill="#fde047" />

    {/* Head */}
    <circle cx="55" cy="40" r="29" fill="#f59e0b" />

    {/* Muzzle */}
    <ellipse cx="55" cy="48" rx="13" ry="10" fill="#fef3c7" />
    <ellipse cx="55" cy="43" rx="5.5" ry="3.8" fill="#78350f" />
    <path d="M51 47 Q55 51 59 47" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Big Happy Eyes */}
    <circle cx="43" cy="36" r="4" fill="#1e293b" />
    <circle cx="41.5" cy="34.5" r="1.5" fill="#ffffff" />
    <circle cx="67" cy="36" r="4" fill="#1e293b" />
    <circle cx="65.5" cy="34.5" r="1.5" fill="#ffffff" />

    {/* Cheeks */}
    <circle cx="36" cy="44" r="4.5" fill="#fb7185" opacity="0.65" />
    <circle cx="74" cy="44" r="4.5" fill="#fb7185" opacity="0.65" />

    {/* Waving Paw */}
    <g transform="translate(82, 35) rotate(-20)">
      <ellipse cx="8" cy="14" rx="8" ry="12" fill="#d97706" />
      <circle cx="8" cy="14" r="5" fill="#fde047" />
    </g>

    {/* Cloud / Surface border teddy is peeking behind */}
    <path d="M0 65 C10 65 20 60 35 60 C50 60 60 65 75 65 C90 65 100 60 110 62 L110 100 L0 100 Z" fill="#ffffff" opacity="0.9" />
  </svg>
);

// 5. Teddy Bear Paw Print Motif
export const TeddyPawSvg: React.FC<{ className?: string; fill?: string }> = ({ className = 'w-6 h-6', fill = '#d97706' }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main Pad */}
    <ellipse cx="25" cy="32" rx="14" ry="11" fill={fill} />
    {/* Toe Pads */}
    <circle cx="10" cy="18" r="4.5" fill={fill} />
    <circle cx="20" cy="12" r="5" fill={fill} />
    <circle cx="30" cy="12" r="5" fill={fill} />
    <circle cx="40" cy="18" r="4.5" fill={fill} />
  </svg>
);

// 6. Cute Fluffy Cloud
export const CuteCloudSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-16' }) => (
  <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 55 C10 55 2 47 2 37 C2 28 8 20 18 19 C22 8 35 0 50 0 C65 0 77 7 82 18 C92 18 100 25 100 35 C100 45 92 55 80 55 Z" fill="#ffffff" opacity="0.92" />
    {/* Smiling Face */}
    <path d="M38 32 Q42 37 46 32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M54 32 Q58 37 62 32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="35" r="3" fill="#fb7185" opacity="0.6" />
    <circle cx="68" cy="35" r="3" fill="#fb7185" opacity="0.6" />
  </svg>
);

// 7. Soft Pastel Floating Heart
export const TeddyHeartSvg: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = '#f472b6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

