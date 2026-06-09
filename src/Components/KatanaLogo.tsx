interface KatanaLogoProps {
  className?: string
  size?: number
}

const KatanaLogo = ({ className = "", size = 40 }: KatanaLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 44"
      width={size * 0.73}
      height={size}
      className={className}
      aria-label="KatanaShop logo"
    >
      {/* Blade */}
      <path
        d="M16 1 L17.8 1.8 L18.5 28 L16 30 L13.5 28 L14.2 1.8 Z"
        fill="#f0f0f0"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      />
      {/* Blade edge highlight */}
      <path
        d="M16 2.5 L17.2 3 L17.8 27 L16 28.5 Z"
        fill="#ffffff"
        opacity="0.5"
      />
      {/* Tsuba (guard) */}
      <ellipse
        cx="16"
        cy="31"
        rx="7"
        ry="2.4"
        fill="none"
        stroke="#f0f0f0"
        strokeWidth="1.2"
      />
      <ellipse
        cx="16"
        cy="31"
        rx="5.5"
        ry="1.6"
        fill="none"
        stroke="#f0f0f0"
        strokeWidth="0.5"
      />
      {/* Red accent on tsuba */}
      <ellipse
        cx="16"
        cy="31"
        rx="4.2"
        ry="1.1"
        fill="none"
        stroke="#8b0000"
        strokeWidth="0.7"
        opacity="0.9"
      />
      {/* Handle (tsuka) */}
      <rect x="14.5" y="33" width="3" height="8" rx="0.7" fill="#f0f0f0" />
      {/* Handle wrapping pattern */}
      <line x1="14.7" y1="34.5" x2="17.3" y2="35.5" stroke="#d0d0d0" strokeWidth="0.5" />
      <line x1="14.7" y1="36.2" x2="17.3" y2="37.2" stroke="#d0d0d0" strokeWidth="0.5" />
      <line x1="14.7" y1="37.9" x2="17.3" y2="38.9" stroke="#d0d0d0" strokeWidth="0.5" />
      {/* Pommel (kashira) */}
      <rect x="14.2" y="40.8" width="3.6" height="1.2" rx="0.5" fill="#f0f0f0" />
    </svg>
  )
}

export default KatanaLogo
