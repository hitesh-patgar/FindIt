import React from "react";

type Props = {
  text?: string;
  className?: string;
};

export default function NeonSign({ text = "FindIt", className }: Props) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        role="img"
        aria-label={`${text} neon sign illustration`}
        className="h-full w-full rounded-2xl"
      >
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#3b0764" />
            <stop offset="60%" stopColor="#1e0b3a" />
            <stop offset="100%" stopColor="#0b0720" />
          </radialGradient>
          <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowYellow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="800" height="600" fill="url(#bg)" rx="24" />

        {/* Top box with question mark */}
        <g transform="translate(400 160)" filter="url(#glowYellow)">
          <path d="M-80 -10 L0 -50 L80 -10 L80 60 L-80 60 Z" fill="none" stroke="#facc15" strokeWidth="10" strokeLinejoin="round" />
          <circle cx="0" cy="15" r="10" fill="#facc15" />
          <path d="M0 -40 C30 -40 40 -20 25 -5 C15 5 10 10 10 25" fill="none" stroke="#facc15" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* Hanging shape */}
        <path d="M260 200 Q400 120 540 200" fill="none" stroke="#22d3ee" strokeWidth="10" filter="url(#glowBlue)" />

        {/* Main sign plate */}
        <g filter="url(#glowBlue)">
          <rect x="140" y="220" width="520" height="260" rx="20" fill="none" stroke="#22d3ee" strokeWidth="14" />
          <rect x="155" y="235" width="490" height="230" rx="16" fill="none" stroke="#38bdf8" strokeWidth="4" opacity="0.7" />
        </g>

        {/* Text */}
        <g filter="url(#glowBlue)" transform="translate(400 360)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily="'Inter', ui-sans-serif, system-ui, -apple-system"
            fontSize="96"
            fontWeight={800}
            fill="#60a5fa"
            letterSpacing="4"
          >
            {text}
          </text>
        </g>
      </svg>
    </div>
  );
}
