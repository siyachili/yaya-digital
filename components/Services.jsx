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
      className="bg-white px-5 py-24 text-black sm:px-7 md:px-10 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Introduction */}
        <div className="grid gap-8 border-t border-black/20 pt-5 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.12em] text-black/50 md:col-span-3">
            What we do
          </p>

          <h2 className="max-w-4xl font-display text-[clamp(2.75rem,5vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.045em] md:col-span-8 md:col-start-5">
            Strategy, identity and digital execution.
          </h2>
        </div>

        {/* Sticky panel stack */}
        <div className="relative mt-20 md:mt-32">
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
              const topPosition = 64 + index * 52;

              return (
                <article
                  key={title}
                  className="relative border-x border-t border-black/20 bg-[#f0eee8] md:sticky"
                  style={{
                    top: `${topPosition}px`,
                    zIndex: index + 1,
                    boxShadow:
                      index === 0
                        ? "none"
                        : "0 -14px 28px rgba(0, 0, 0, 0.035)",
                  }}
                >
                  {/* Title that remains visible */}
                  <div className="flex h-[52px] items-center border-b border-black/20 bg-[#f0eee8] px-5 sm:px-7 md:px-9 lg:px-10">
                    <h3 className="font-display text-lg font-medium leading-none tracking-[-0.025em] md:text-xl">
                      {title}
                    </h3>
                  </div>

                  {/* Main panel content */}
                  <div className="flex min-h-[430px] flex-col px-5 py-8 sm:px-7 md:min-h-[470px] md:px-9 md:py-10 lg:min-h-[500px] lg:px-10 lg:py-12">
                    <div className="grid flex-1 gap-10 md:grid-cols-12">
                      <div className="md:col-span-7">
                        <p className="max-w-3xl font-display text-[clamp(2.4rem,4.4vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.04em]">
                          {headline}
                        </p>
                      </div>

                      <div className="md:col-span-4 md:col-start-9">
                        <p className="max-w-sm text-base leading-7 text-black/60">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-14 border-t border-black/20 pt-5">
                      <div className="grid gap-5 md:grid-cols-12">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-black/45 md:col-span-3">
                          Capabilities
                        </p>

                        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 md:col-span-8 md:col-start-5 lg:grid-cols-3">
                          {capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="text-sm leading-6"
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