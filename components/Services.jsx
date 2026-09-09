const services = [
  {
    title: "Brand strategy",
    headline: "Clarifying what your business stands for.",
    description:
      "We define your positioning, audience and direction before any design work begins.",
    capabilities: [
      "Positioning",
      "Audience research",
      "Competitor review",
      "Creative direction",
      "Content direction",
    ],
  },
  {
    title: "Identity design",
    headline: "Building a brand people can recognise.",
    description:
      "We create the visual system your business needs to communicate clearly and consistently.",
    capabilities: [
      "Visual identity",
      "Logo systems",
      "Typography",
      "Colour",
      "Brand guidelines",
    ],
  },
  {
    title: "Web design",
    headline: "Making your business clear online.",
    description:
      "We design considered websites around your content, customers and commercial goals.",
    capabilities: [
      "Website strategy",
      "Information architecture",
      "UX and UI design",
      "Prototyping",
      "E-commerce",
    ],
  },
  {
    title: "Development",
    headline: "Turning the design into a reliable product.",
    description:
      "We build responsive websites that perform well and remain straightforward to manage.",
    capabilities: [
      "Next.js",
      "React",
      "Shopify",
      "WordPress",
      "CMS development",
    ],
  },
  {
    title: "Ongoing support",
    headline: "Keeping the website useful after launch.",
    description:
      "We maintain, improve and extend your website as the needs of the business change.",
    capabilities: [
      "Maintenance",
      "Performance",
      "SEO foundations",
      "Content updates",
      "Technical support",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-20 text-black sm:px-7 sm:py-24 md:px-10 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Introduction */}
        <div className="grid gap-7 border-t border-black/20 pt-5 md:grid-cols-12 md:gap-8">
          <p className="text-[10px] uppercase tracking-[0.14em] text-black/50 md:col-span-3 md:text-xs">
            What we do
          </p>

          <h2 className="max-w-4xl font-display text-[clamp(2.6rem,11vw,5.25rem)] font-medium leading-[0.93] tracking-[-0.05em] md:col-span-8 md:col-start-5">
            Strategy, identity and digital execution.
          </h2>
        </div>

        {/* Sticky card stack */}
        <div className="relative mt-16 md:mt-32">
          {services.map(
            (
              {
                title,
                headline,
                description,
                capabilities,
              },
              index,
            ) => {
              const mobileTop = 64 + index * 44;
              const desktopTop = 64 + index * 52;

              return (
                <article
                  key={title}
                  className="sticky top-[var(--mobile-top)] border-x border-t border-black/20 bg-[#f0eee8] shadow-[0_-12px_24px_rgba(0,0,0,0.035)] md:top-[var(--desktop-top)]"
                  style={{
                    "--mobile-top": `${mobileTop}px`,
                    "--desktop-top": `${desktopTop}px`,
                    zIndex: index + 1,
                  }}
                >
                  {/* Persistent service title */}
                  <div className="flex h-11 items-center border-b border-black/20 bg-[#f0eee8] px-4 sm:px-6 md:h-[52px] md:px-9 lg:px-10">
                    <h3 className="font-display text-base font-medium leading-none tracking-[-0.025em] sm:text-lg md:text-xl">
                      {title}
                    </h3>
                  </div>

                  {/* Active card */}
                  <div className="flex min-h-[calc(100svh-var(--mobile-top)-2.75rem)] flex-col px-4 py-7 sm:px-6 sm:py-8 md:min-h-[calc(100svh-var(--desktop-top)-3.25rem)] md:px-9 md:py-10 lg:px-10 lg:py-12">
                    <div className="grid flex-1 content-start gap-7 md:grid-cols-12 md:gap-10">
                      {/* Main statement */}
                      <div className="md:col-span-7">
                        <p className="max-w-3xl font-display text-[clamp(2.2rem,10vw,4.5rem)] font-normal leading-[0.97] tracking-[-0.045em]">
                          {headline}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-4 md:col-start-9">
                        <p className="max-w-sm text-[15px] leading-6 text-black/60 md:text-base md:leading-7">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mt-10 border-t border-black/20 pt-4 md:mt-14 md:pt-5">
                      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                        <p className="text-[9px] uppercase tracking-[0.14em] text-black/45 md:col-span-3 md:text-[10px]">
                          Capabilities
                        </p>

                        <ul className="grid grid-cols-2 gap-x-5 gap-y-2 md:col-span-8 md:col-start-5 md:grid-cols-3 md:gap-x-8">
                          {capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="border-b border-black/15 pb-2 text-[13px] leading-5 md:text-sm md:leading-6"
                            >
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            },
          )}

          <div className="border-t border-black/20" />
        </div>
      </div>
    </section>
  );
}