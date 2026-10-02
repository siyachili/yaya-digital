"use client";

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
        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between border-b border-black/15 px-5 sm:px-7 md:h-[74px] md:px-10 lg:px-12">
          {/* WORDMARK */}
          <a
            href="#top"
            onClick={closeMenu}
            className="relative z-[60] font-display text-[18px] font-semibold uppercase leading-none tracking-[-0.055em] md:text-[20px]"
          >
            Yaya Digital
          </a>

          {/* MENU */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="site-navigation"
            className="group relative z-[60] flex items-center gap-4"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] md:text-[11px]">
              {open ? "Close" : "Menu"}
            </span>

            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-black/20 transition-colors duration-300 group-hover:bg-black group-hover:text-white md:h-9 md:w-9">
              <span
                className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open
                    ? "rotate-45"
                    : "-translate-y-[3px]"
                }`}
              />

              <span
                className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open
                    ? "-rotate-45"
                    : "translate-y-[3px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* FULL SCREEN NAVIGATION */}
      <div
        id="site-navigation"
        className={`fixed inset-x-0 bottom-0 top-[68px] z-40 bg-white text-black transition-[transform,visibility] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:top-[74px] ${
          open
            ? "visible translate-y-0"
            : "invisible translate-y-[-100%]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 pb-6 pt-8 sm:px-7 md:px-10 md:pb-8 md:pt-10 lg:px-12">
          {/* MAIN MENU */}
          <div className="grid flex-1 items-center lg:grid-cols-12">
            <nav className="lg:col-span-8">
              {links.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="group block overflow-hidden border-b border-black/15 py-[10px] sm:py-3 md:py-4"
                >
                  <span
                    className={`block font-display text-[clamp(2.8rem,10vw,7.8rem)] font-medium leading-[0.86] tracking-[-0.07em] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                    style={{
                      transitionDelay: open
                        ? `${120 + index * 70}ms`
                        : "0ms",
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </nav>

            {/* DESKTOP SIDE INFORMATION */}
            <aside
              className={`mt-12 hidden transition-all duration-700 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:block ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: open ? "420ms" : "0ms",
              }}
            >
              <div className="border-t border-black/15 pt-4">
                <p className="mb-8 text-[9px] uppercase tracking-[0.18em] text-black/40">
                  Studio
                </p>

                <p className="max-w-[260px] text-sm leading-6 text-black/70">
                  Independent design studio creating identities and digital
                  experiences for ambitious brands.
                </p>
              </div>

              <div className="mt-10 border-t border-black/15 pt-4">
                <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-black/40">
                  New business
                </p>

                <a
                  href="mailto:hello@yayadigital.co.za"
                  className="text-sm transition-opacity duration-300 hover:opacity-45"
                >
                  hello@yayadigital.co.za
                </a>
              </div>
            </aside>
          </div>

          {/* FOOTER */}
          <div
            className={`mt-8 grid gap-5 border-t border-black/15 pt-5 text-[10px] uppercase tracking-[0.14em] transition-all duration-700 sm:grid-cols-2 sm:items-end md:text-[11px] lg:grid-cols-12 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "480ms" : "0ms",
            }}
          >
            <div className="lg:col-span-4">
              <p className="mb-1 text-black/35">
                Based in
              </p>

              <p>Johannesburg, South Africa</p>
            </div>

            <div className="flex gap-6 sm:justify-end lg:col-span-3 lg:col-start-10">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-40"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-40"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}