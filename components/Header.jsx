"use client";

import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-[-0.05em]"
        >
          YAYA
          <span className="text-acid">.</span>
          <span className="text-bone/70">DIGITAL</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.18em] text-bone/65 transition hover:text-acid"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-acid px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:scale-105 md:block"
        >
          Start a Project
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="flex flex-col border-t border-white/10 bg-ink px-5 py-5 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-3xl"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}