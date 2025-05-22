export default function Logo({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gradient-start)" />
          <stop offset="100%" stopColor="var(--gradient-end)" />
        </linearGradient>
      </defs>

      {/* Use the gradient as fill or stroke */}
      <path
        d="M20,80 L50,20 L80,80 Z" /* example shape */
        fill="url(#logoGradient)"
      />
    </svg>
  );
}
