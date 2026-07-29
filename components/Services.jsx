"use client";

import { useState } from "react";

const services = [
  ["01", "Brand strategy", "Positioning, naming, messaging and a practical creative direction that connects the brand to the business."],
  ["02", "Identity design", "Distinct visual systems, verbal identity and flexible toolkits built to remain recognisable everywhere."],
  ["03", "Web design", "Clear information architecture, high-impact interfaces and thoughtful experiences designed around real user behaviour."],
  ["04", "Development", "Fast, responsive websites and digital products built with modern tools, clean systems and room to scale."],
  ["05", "Digital growth", "Campaigns, content systems, optimisation and ongoing creative support that keeps the work moving after launch."],
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-rule bg-bone text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <div data-reveal className="reveal md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[.22em]">What we do</p>
            <h2 className="font-display text-5xl font-semibold leading-[.9] tracking-[-.065em] md:text-7xl">From first thought to full launch.</h2>
            <p className="mt-8 max-w-sm leading-relaxed text-ink/58">Small senior team. Clear thinking. No layers between the conversation and the work.</p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {services.map(([number, title, copy], index) => {
              const isActive = active === index;
              return (
                <button
                  key={number}
                  onClick={() => setActive(index)}
                  className="service-row block w-full border-t border-ink/20 py-7 text-left"
                  aria-expanded={isActive}
                >
                  <div className="grid grid-cols-[48px_1fr_auto] items-center gap-3 md:grid-cols-[70px_1fr_auto]">
                    <span className="text-xs">{number}</span>
                    <h3 className="font-display text-3xl font-semibold tracking-[-.035em] md:text-5xl">{title}</h3>
                    <span className={`text-2xl transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>＋</span>
                  </div>
                  <div className={`service-copy grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="ml-12 max-w-xl pt-5 leading-relaxed text-ink/62 md:ml-[70px]">{copy}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
