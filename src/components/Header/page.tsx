"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import Logo from "../Logo";
import TextLogo from "../TextLogo";

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="flex items-center justify-between p-4 bg-[var(--color-background)] custom-container">
      <div className="flex items-center space-x-2 md:space-x-0">
        <Logo
          size={40}
          className="text-[var(--color-primary)] w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
        />
        <TextLogo
          size={16}
          gradient
          className="font-[var(--font-mono)] w-32 sm:w-48 md:w-64 hidden sm:block"
        />
      </div>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`
          bg-[var(--color-primary)]
          text-[var(--color-card-text)]
          rounded-full
          transition-transform
          hover:scale-110
          p-2         
        `}
      >
        {theme === "dark" ? (
          <FiSun className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        ) : (
          <FiMoon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        )}
      </button>
    </header>
  );
}
