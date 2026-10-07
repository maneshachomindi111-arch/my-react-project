export default function AppIcon({ size = 72, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-md transition-transform hover:scale-105 duration-300 ${className}`}
    >
      <defs>
        {/* Navy to Emerald Gradient */}
        <linearGradient id="bgGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Emerald Vibrant Bar Gradient */}
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Gold Coin Gradient */}
        <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Subtle Glass Reflection */}
        <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* App Icon Container (Rounded Squircle) */}
      <rect width="120" height="120" rx="28" fill="url(#bgGrad)" />

      {/* Glass Glossy Top Highlight */}
      <path
        d="M0 28C0 12.536 12.536 0 28 0H92C107.464 0 120 12.536 120 28V46C80 40 40 40 0 54V28Z"
        fill="url(#shineGrad)"
      />

      {/* Wallet Body Base */}
      <rect x="22" y="38" width="76" height="54" rx="14" fill="#ffffff" fillOpacity="0.12" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" />
      
      {/* Rising Bar Chart Graphs */}
      {/* Bar 1 */}
      <rect x="34" y="66" width="9" height="16" rx="4" fill="#93c5fd" />
      {/* Bar 2 */}
      <rect x="47" y="56" width="9" height="26" rx="4" fill="#6ee7b7" />
      {/* Bar 3 */}
      <rect x="60" y="46" width="9" height="36" rx="4" fill="url(#barGrad)" />

      {/* Trend Arrow Line */}
      <path
        d="M34 68L48 56L61 44L75 36"
        stroke="#34d399"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trend Arrow Head */}
      <path
        d="M68 36H75V43"
        stroke="#34d399"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wallet Flap with Coin Clasp */}
      <path
        d="M74 54H94C96.2091 54 98 55.7909 98 58V72C98 74.2091 96.2091 76 94 76H74C71.7909 76 70 74.2091 70 72V58C70 55.7909 71.7909 54 74 54Z"
        fill="#0f172a"
        stroke="#38bdf8"
        strokeWidth="1.5"
      />
      {/* Gold Clasp Coin */}
      <circle cx="84" cy="65" r="4.5" fill="url(#coinGrad)" />
      <circle cx="84" cy="65" r="2.5" fill="#fef3c7" fillOpacity="0.8" />
    </svg>
  );
}
