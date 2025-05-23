"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { GiFountainPen } from "react-icons/gi";

export default function Home() {
  const { theme } = useDarkMode();
  return (
    <div className="h-full flex items-center justify-center gap-5 flex-col bg-[var(--color-background)] custom-container">
      <h1 className="text-4xl text-[var(--color-card-text)]">
        Welcome to {theme} mode!
      </h1>

      <div className="bg-[var(--color-background)]  rounded-lg px-6 py-8 ring shadow-xl ring-[var(--color-primary)] w-[40%]">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] p-2 shadow-lg">
            <GiFountainPen size={20} className="text-xl sm:text-2xl md:text-3xl text-[var(--color-card-text)]"/>
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-[var(--color-card-text)]">
          Writes upside-down
        </h3>
        <p className="mt-2 text-sm text-[var(--color-card-subtext)]">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}
