"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Clients", "#clients"],
  ["Contact Us", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white text-black">
        <div className="mx-auto grid h-[68px] max-w-[1600px] grid-cols-[1fr_auto] items-center border-b border-black/15 px-5 sm:px-7 md:h-[74px] md:px-10 lg:px-12">
          {/* LOGO */}
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Yaya Digital home"
            className="relative z-[60] block w-fit"
          >
            <Image
              src="/images/yaya.png"
              alt="Yaya Digital"
              width={140}
              height={50}
              priority
              className="h-auto w-[92px] object-contain sm:w-[100px] md:w-[110px] lg:w-[116px]"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 xl:flex 2xl:gap-10">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="group relative py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/60 transition-colors duration-300 hover:text-black"
              >
                {label}

                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* MOBILE + TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="site-navigation"
            className="group relative z-[60] flex items-center gap-3 xl:hidden"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] md:text-[11px]">
              {open ? "Close" : "Menu"}
            </span>

            <span className="relative flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
              <span
                className={`absolute h-px w-[18px] bg-black transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open
                    ? "rotate-45"
                    : "-translate-y-[3px]"
                }`}
              />

              <span
                className={`absolute h-px w-[18px] bg-black transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open
                    ? "-rotate-45"
                    : "translate-y-[3px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE + TABLET NAVIGATION */}
      <div
        id="site-navigation"
        className={`fixed inset-x-0 bottom-0 top-[68px] z-40 bg-white text-black transition-[transform,visibility] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:top-[74px] xl:hidden ${
          open
            ? "visible translate-y-0"
            : "invisible -translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 pb-6 sm:px-7 md:px-10 md:pb-8 lg:px-12">
          {/* NAVIGATION */}
          <nav className="flex flex-1 flex-col justify-center">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="group overflow-hidden border-b border-black/15 py-3 sm:py-4 md:py-5"
              >
                <span
                  className={`block font-display text-[clamp(2.8rem,10vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${100 + index * 65}ms`
                      : "0ms",
                  }}
                >
                  {label}
                </span>
              </a>
            ))}
          </nav>

          {/* MOBILE / TABLET FOOTER */}
          <div
            className={`grid gap-7 border-t border-black/15 pt-5 transition-all duration-700 sm:grid-cols-2 sm:items-end ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "440ms" : "0ms",
            }}
          >
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-black/35">
                New business
              </p>

              <a
                href="mailto:hello@yayadigital.co.za"
                className="text-[13px] transition-opacity duration-300 hover:opacity-50 md:text-sm"
              >
                hello@yayadigital.co.za
              </a>
            </div>

            <div className="flex items-end justify-between gap-6 sm:justify-end">
              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.16em] transition-opacity duration-300 hover:opacity-40 md:text-[10px]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.16em] transition-opacity duration-300 hover:opacity-40 md:text-[10px]"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}