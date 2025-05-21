"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="flex items-center justify-between p-4 bg-[var(--color-background)]">
      <h1 className="text-xl font-bold text-[var(--color-card-text)]">
        Ravi Portfolio Header
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-[var(--color-primary)] text-[var(--color-card-text)] hover:scale-110 transition-transform"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </header>
  );
}
