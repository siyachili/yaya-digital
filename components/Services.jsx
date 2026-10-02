"use client";

const services = [
  {
    title: "Brand strategy",
    label: "Direction",
    headline: "Give the brand somewhere clear to stand.",
    description:
      "We define the position, audience and creative direction that gives the brand a clear point of view before design begins.",
    capabilities: [
      "Brand positioning",
      "Audience definition",
      "Competitor review",
      "Creative direction",
      "Content direction",
    ],
  },
  {
    title: "Identity design",
    label: "Expression",
    headline: "Build a visual language people remember.",
    description:
      "We translate strategy into a distinctive identity system designed to feel recognisable, coherent and ownable.",
    capabilities: [
      "Visual identity",
      "Logo systems",
      "Typography",
      "Colour systems",
      "Brand guidelines",
    ],
  },
  {
    title: "Creative direction",
    label: "World building",
    headline: "Shape how the brand shows up.",
    description:
      "We create the visual direction that connects imagery, campaigns, content and digital touchpoints into one consistent world.",
    capabilities: [
      "Art direction",
      "Campaign direction",
      "Digital content",
      "Social design",
      "Launch direction",
    ],
  },
  {
    title: "Web design",
    label: "Digital",
    headline: "Turn the brand into an experience.",
    description:
      "We design considered digital experiences where structure, typography, imagery and interaction work together with purpose.",
    capabilities: [
      "Website strategy",
      "Information architecture",
      "UX design",
      "UI design",
      "Prototyping",
      "E-commerce design",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#f6f4ef] px-4 py-20 text-[#111111] sm:px-7 sm:py-24 md:px-10 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* INTRO */}
        <div className="border-t border-black/20 pt-5 md:pt-6">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-black/40 md:text-[11px]">
                What we do
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="max-w-[1050px] font-display text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                We shape brands
                <br />
                from idea to experience.
              </h2>

              <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-10">
                <p className="max-w-md text-sm leading-6 text-black/55 md:text-[15px] md:leading-7">
                  Strategy gives the brand direction. Design gives it
                  character.
                </p>

                <p className="max-w-md text-sm leading-6 text-black/55 md:text-[15px] md:leading-7">
                  We bring both together across identity, creative and digital
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES STACK */}
        <div className="relative mt-20 md:mt-36">
          {services.map((service, index) => {
            const mobileTop = 64 + index * 46;
            const desktopTop = 76 + index * 58;

            return (
              <article
                key={service.title}
                className="sticky top-[var(--mobile-top)] overflow-hidden border-x border-t border-black/20 bg-[#ebe8e1] md:top-[var(--desktop-top)]"
                style={{
                  "--mobile-top": `${mobileTop}px`,
                  "--desktop-top": `${desktopTop}px`,
                  zIndex: index + 1,
                }}
              >
                {/* PERSISTENT TAB */}
                <div className="grid h-[46px] grid-cols-[1fr_auto] items-center border-b border-black/15 bg-[#ebe8e1] px-4 sm:px-6 md:h-[58px] md:grid-cols-12 md:px-9 lg:px-10">
                  <div className="md:col-span-8">
                    <h3 className="font-display text-base font-medium leading-none tracking-[-0.025em] sm:text-lg md:text-xl">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 md:col-span-4 md:justify-between">
                    <span className="hidden text-[9px] uppercase tracking-[0.18em] text-black/35 md:block">
                      {service.label}
                    </span>

                    <span className="text-[10px] tabular-nums tracking-[0.12em] text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* SERVICE BODY */}
                <div className="flex min-h-[72svh] flex-col px-4 py-8 sm:px-6 sm:py-9 md:min-h-[76svh] md:px-9 md:py-12 lg:px-10 lg:py-14">
                  {/* MAIN */}
                  <div className="grid flex-1 content-start gap-10 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-7">
                      <p className="mb-5 text-[9px] uppercase tracking-[0.18em] text-black/35 md:text-[10px]">
                        {service.label}
                      </p>

                      <h4 className="max-w-[900px] font-display text-[clamp(2.8rem,7.5vw,6.4rem)] font-normal leading-[0.9] tracking-[-0.06em]">
                        {service.headline}
                      </h4>
                    </div>

                    <div className="md:col-span-4 md:col-start-9 md:pt-8">
                      <p className="max-w-[390px] text-[15px] leading-6 text-black/55 md:text-base md:leading-7">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* CAPABILITIES */}
                  <div className="mt-14 border-t border-black/20 pt-5 md:mt-20 md:pt-6">
                    <div className="grid gap-7 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-3">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-black/35 md:text-[10px]">
                          Selected capabilities
                        </p>
                      </div>

                      <ul className="grid grid-cols-2 gap-x-6 gap-y-0 md:col-span-8 md:col-start-5 md:grid-cols-2 md:gap-x-12">
                        {service.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="border-b border-black/15 py-3 text-[13px] leading-5 tracking-[-0.01em] text-black/75 md:text-sm md:leading-6"
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
          })}

          <div className="border-t border-black/20" />
        </div>
      </div>
    </section>
  );
}