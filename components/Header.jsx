"use client";
import { useState } from "react";

const links = [["Work", "#work"], ["Services", "#services"], ["Studio", "#studio"], ["Contact", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="font-display text-xl font-bold tracking-[-.06em]">DIGITAL<span className="text-acid">/</span>LEAP</a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs uppercase tracking-[.2em] text-bone/65 transition hover:text-acid">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-bone px-5 py-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink transition hover:bg-acid md:block">Let&apos;s talk</a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav className="flex flex-col border-t border-white/10 bg-ink px-5 py-5 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="border-b border-white/10 py-4 font-display text-3xl">{label}</a>)}</nav>}
    </header>
  );
}
