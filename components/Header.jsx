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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white text-black">
        <div className="flex h-16 items-center justify-between px-5 sm:px-7 md:px-10 lg:px-12">
          <a
            href="#top"
            onClick={closeMenu}
            className="font-display text-[18px] font-semibold uppercase leading-none tracking-[-0.05em] md:text-[20px]"
          >
            Yaya Digital
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="site-navigation"
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          >
            <span>{open ? "Close" : "Menu"}</span>

            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-[5px] h-px w-5 bg-black transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute bottom-[5px] left-0 h-px w-5 bg-black transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-navigation"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white text-black transition-opacity duration-300 ${
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:px-12">
          <nav className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="group border-b border-black/15 py-4 md:py-5"
              >
                <span className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium leading-none tracking-[-0.055em] transition-opacity duration-200 group-hover:opacity-50">
                  {label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mx-auto mt-12 flex w-full max-w-[1400px] flex-col gap-5 border-t border-black/15 pt-5 text-[11px] uppercase tracking-[0.12em] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-black/45">
                Business enquiries
              </p>

              <a
                href="mailto:hello@yayadigital.co.za"
                className="normal-case tracking-normal transition-opacity hover:opacity-50"
              >
                hello@yayadigital.co.za
              </a>
            </div>

            <a
              href="#"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}