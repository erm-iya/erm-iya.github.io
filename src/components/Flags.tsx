import React from 'react';

interface FlagProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Flag of Iran
export const FlagIR: React.FC<FlagProps> = ({ className = 'w-5 h-3.5', ...props }) => (
  <svg
    viewBox="0 0 640 480"
    className={`rounded-[3px] overflow-hidden shrink-0 border border-black/15 dark:border-white/10 ${className}`}
    aria-label="Iran Flag"
    {...props}
  >
    <path fill="#239f40" d="M0 0h640v160H0z" />
    <path fill="#ffffff" d="M0 160h640v160H0z" />
    <path fill="#da0000" d="M0 320h640v160H0z" />
    {/* Center Emblem of Iran */}
    <g fill="#da0000" transform="translate(320, 240) scale(0.9)">
      <path d="M0-45c-4 10-12 18-12 28 0 10 7 19 12 24 5-5 12-14 12-24 0-10-8-18-12-28z" />
      <path d="M-18-20c-8 6-13 16-13 26 0 16 11 29 26 33-8-4-15-13-15-23 0-8 4-15 10-21l2-15z" />
      <path d="M18-20c8 6 13 16 13 26 0 16-11 29-26 33 8-4 15-13 15-23 0-8-4-15-10-21l-2-15z" />
      <path d="M-32-5c-6 7-9 15-9 24 0 22 17 40 38 43-12-5-21-17-21-30 0-11 6-21 15-28l-23-9z" />
      <path d="M32-5c6 7 9 15 9 24 0 22-17 40-38 43 12-5 21-17 21-30 0-11-6-21-15-28l23-9z" />
      <path d="M-5-50h10v10H-5z" />
    </g>
  </svg>
);

// Flag of the United Kingdom (Union Jack)
export const FlagGB: React.FC<FlagProps> = ({ className = 'w-5 h-3.5', ...props }) => (
  <svg
    viewBox="0 0 640 480"
    className={`rounded-[3px] overflow-hidden shrink-0 border border-black/15 dark:border-white/10 ${className}`}
    aria-label="United Kingdom Flag"
    {...props}
  >
    <clipPath id="gb-clip">
      <path d="M0 0h640v480H0z" />
    </clipPath>
    <g clipPath="url(#gb-clip)">
      <path fill="#012169" d="M0 0h640v480H0z" />
      {/* Diagonals White */}
      <path stroke="#ffffff" strokeWidth="60" d="M0 0l640 480M640 0L0 480" />
      {/* Diagonals Red */}
      <path stroke="#c8102e" strokeWidth="40" d="M0 0l640 480M640 0L0 480" />
      {/* Central St George Cross White */}
      <path stroke="#ffffff" strokeWidth="100" d="M320 0v480M0 240h640" />
      {/* Central St George Cross Red */}
      <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
    </g>
  </svg>
);

// Flag of Kurdistan (Ala Rengîn)
export const FlagKU: React.FC<FlagProps> = ({ className = 'w-5 h-3.5', ...props }) => {
  // Generate 21 sun rays
  const rays = Array.from({ length: 21 }, (_, i) => {
    const angle = (i * 360) / 21;
    return (
      <polygon
        key={i}
        points="320,185 325,232 315,232"
        fill="#febd11"
        transform={`rotate(${angle} 320 240)`}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-[3px] overflow-hidden shrink-0 border border-black/15 dark:border-white/10 ${className}`}
      aria-label="Kurdistan Flag"
      {...props}
    >
      <path fill="#e61717" d="M0 0h640v160H0z" />
      <path fill="#ffffff" d="M0 160h640v160H0z" />
      <path fill="#129139" d="M0 320h640v160H0z" />
      {/* Golden Sun Emblem with 21 Rays */}
      <g>
        <circle cx="320" cy="240" r="38" fill="#febd11" />
        {rays}
      </g>
    </svg>
  );
};

// Flag of Germany
export const FlagDE: React.FC<FlagProps> = ({ className = 'w-5 h-3.5', ...props }) => (
  <svg
    viewBox="0 0 640 480"
    className={`rounded-[3px] overflow-hidden shrink-0 border border-black/15 dark:border-white/10 ${className}`}
    aria-label="Germany Flag"
    {...props}
  >
    <path fill="#000000" d="M0 0h640v160H0z" />
    <path fill="#dd0000" d="M0 160h640v160H0z" />
    <path fill="#ffce00" d="M0 320h640v160H0z" />
  </svg>
);
