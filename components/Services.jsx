"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand strategy",
    copy:
      "Clear thinking before the design begins. We help shape how a brand should look, sound and position itself before translating that direction into digital.",
    capabilities: [
      "Brand positioning",
      "Creative direction",
      "Audience definition",
      "Competitor review",
      "Digital strategy",
      "Website strategy",
      "Content direction",
    ],
  },

  {
    number: "02",
    title: "Identity & design",
    copy:
      "Visual systems designed to give brands a distinctive and consistent presence across digital platforms.",
    capabilities: [
      "Art direction",
      "Visual identity",
      "Typography",
      "Colour systems",
      "Digital design systems",
      "Social media design",
      "UI design",
      "Responsive design",
    ],
  },

  {
    number: "03",
    title: "Web design",
    copy:
      "Digital experiences shaped around clarity, storytelling and usability — from the first wireframe through to the final interface.",
    capabilities: [
      "Website architecture",
      "Wireframing",
      "User experience design",
      "User interface design",
      "Portfolio websites",
      "E-commerce experiences",
      "Interactive experiences",
      "Prototyping",
    ],
  },

  {
    number: "04",
    title: "Development",
    copy:
      "Modern websites built for performance, flexibility and long-term use, with technology selected around what the project actually needs.",
    capabilities: [
      "React / Next.js development",
      "WordPress/ Shopify development",
      "CMS",
      "E-commerce development",
      "API integrations",
      "Responsive implementation",
      "Cross-device testing",
      "Performance optimisation",
      "Technical support",
    ],
  },

  {
    number: "05",
    title: "Digital growth",
    copy:
      "The work does not have to stop at launch. We help brands improve, maintain and evolve their digital presence over time.",
    capabilities: [
      "Website optimisation",
      "Content updates",
      "Campaign landing pages",
      "SEO",
      "Performance monitoring",
      "Design support",
      "Website maintenance",
      "Digital consulting",
      "Ongoing development",
      "Post-launch support",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  const toggleService = (index) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section
      id="services"
      className="bg-white px-5 py-24 text-ink sm:px-7 md:px-10 md:py-32 lg:px-14 lg:py-40"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          {/* LEFT */}
          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-ink/45">
              What we do
            </p>

            <h2 className="max-w-md font-display text-5xl font-semibold tracking-[-0.055em] md:text-6xl lg:text-7xl">
              From first thought to full launch.
            </h2>

            <p className="mt-7 max-w-sm leading-relaxed text-ink/55">
              Strategy, design and development brought together to create
              stronger digital experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 md:col-start-6">
            {services.map(
              ({ number, title, copy, capabilities }, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={number}
                    className="border-t border-ink/20"
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(index)}
                      aria-expanded={isActive}
                      className="group block w-full py-7 text-left md:py-8"
                    >
                      <div className="grid grid-cols-[48px_1fr_auto] items-center gap-3 md:grid-cols-[70px_1fr_auto]">
                        <span className="text-xs text-ink/45">
                          {number}
                        </span>

                        <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] transition-opacity duration-300 group-hover:opacity-60 md:text-5xl">
                          {title}
                        </h3>

                        <span
                          className={`text-2xl font-light leading-none transition-transform duration-500 ease-out ${
                            isActive ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          ＋
                        </span>
                      </div>
                    </button>

                    {/* OPEN CONTENT */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-10 pl-12 md:pb-12 md:pl-[70px]">
                          {/* DESCRIPTION */}
                          <p className="max-w-xl text-base leading-relaxed text-ink/55 md:text-lg">
                            {copy}
                          </p>

                          {/* CAPABILITIES */}
                          <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 md:mt-10">
                            {capabilities.map((capability) => (
                              <p
                                key={capability}
                                className="border-b border-ink/10 pb-3 text-[15px] leading-relaxed text-ink/80 md:text-base"
                              >
                                {capability}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              },
            )}

            <div className="border-t border-ink/20" />
          </div>
        </div>
      </div>
    </section>
  );
}