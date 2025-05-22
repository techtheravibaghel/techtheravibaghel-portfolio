"use client";
import React from "react";

interface TextLogoProps {
  size?: number; 
  gradient?: boolean;
  className?: string;
}

export default function TextLogo({
  size = 48,
  gradient = false,
  className = "",
}: TextLogoProps) {
  const gradientId = "textLogoGradient";
  return (
    <svg
      width={size * (13 / 1)}
      height={size}
      viewBox="0 0 1300 100" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gradient-start)" />
            <stop offset="100%" stopColor="var(--gradient-end)" />
          </linearGradient>
        </defs>
      )}

      <text
        x="0"
        y="75"
        fontFamily="var(--font-serif)"
        fontSize="80"
        letterSpacing="20"
        fill={gradient ? `url(#${gradientId})` : "var(--color-primary)"}
      >
        TECHTHERAVIBAGHEL
      </text>
    </svg>
  );
}
