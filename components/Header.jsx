"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const isMobileOrTablet = window.innerWidth < 1024;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (!isMobileOrTablet) {
        setHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      if (open || currentScrollY < 80) {
        setHeaderVisible(true);
      } else if (scrollDifference > 8) {
        setHeaderVisible(false);
      } else if (scrollDifference < -8) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeaderVisibility);
        ticking.current = true;
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setHeaderVisible(true);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setHeaderVisible(true);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
    setHeaderVisible(true);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6 md:pt-5 ${
          headerVisible || open
            ? "translate-y-0"
            : "-translate-y-[calc(100%+1.5rem)]"
        }`}
      >
        {/* Logo */}

        YAYA

        DIGITAL

        {/* Desktop navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {links.slice(0, 4).map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative py-2 text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop contact link */}
        <a
          href="#contact"
          className="group hidden items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white lg:flex"
        >
          <span className="relative py-2">
            Start a project

            <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-white transition-transform duration-300 group-hover:scale-x-0" />
          </span>

          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-white transition-transform duration-500 group-hover:scale-[4]" />
          </span>
        </a>

        {/* Mobile and tablet menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          className="relative z-[60] flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white lg:hidden"
        >
          <span>{open ? "Close" : "Menu"}</span>

          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/25">
            <span
              className={`absolute h-px w-3.5 bg-white transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />

            <span
              className={`absolute h-px w-3.5 bg-white transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Mobile and tablet menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col px-5 pb-8 pt-28 md:px-10 md:pt-32">
          <nav className="flex flex-1 flex-col justify-center">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-white/12 py-4 md:py-5"
              >
                <span
                  className={`font-display text-[clamp(2.7rem,11vw,5.8rem)] font-medium uppercase leading-[0.9] tracking-[-0.07em] text-white transition-all duration-700 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${index * 70 + 180}ms`
                      : "0ms",
                  }}
                >
                  {label}
                </span>
              </a>
            ))}
          </nav>

          <div
            className={`mt-10 flex items-end justify-between border-t border-white/12 pt-6 transition-all delay-500 duration-700 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Based in
              </p>

              <p className="text-sm text-white/80">
                Johannesburg, South Africa
              </p>
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-white pb-1 text-[10px] uppercase tracking-[0.18em] text-white"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}