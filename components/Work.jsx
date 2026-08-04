const project = {
  n: "01",
  title: "Brendon Bridge",
  image: "/images/brendon.jpeg",
  url: "https://brendonbridgestudios.com/",
  meta: "A refined e-commerce home for a hyper-realistic artist, designed to let every artwork carry the room.",
  type: "Art / E-commerce",
  services: "Strategy · Web design · WordPress",
  result:
    "A premium digital gallery built to convert interest into enquiries and sales.",
};

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"
    >
      <div
        data-reveal
        className="reveal mx-auto mb-12 flex max-w-[1180px] items-end justify-between"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[.22em] text-white/55">
            Selected work
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-semibold tracking-[-.06em] text-white md:text-7xl lg:text-8xl">
            Work with a point of view.
          </h2>
        </div>

        <span className="hidden text-sm text-white/35 lg:block">
          2025—2026
        </span>
      </div>

      <article
        data-reveal
        className="reveal mx-auto grid max-w-[1180px] gap-5 md:grid-cols-[1.15fr_.85fr]"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
          className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 md:min-h-[500px] lg:min-h-[560px]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06] group-hover:brightness-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 transition duration-700 group-hover:from-black/95 group-hover:via-black/35" />

          <div className="absolute inset-0 z-[1] bg-white/0 transition duration-700 group-hover:bg-white/[0.04]" />

          <span className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[.2em] text-white/80 transition duration-500 group-hover:translate-x-1 group-hover:text-white md:left-8 md:top-8">
            Project {project.n}
          </span>

          <div className="absolute bottom-6 left-6 right-6 z-10 md:bottom-8 md:left-8 md:right-8">
            <p className="mb-3 text-xs uppercase tracking-[.18em] text-white/60 transition duration-500 group-hover:translate-y-[-2px] group-hover:text-white/80">
              {project.type}
            </p>

            <h3 className="font-display text-4xl font-semibold uppercase leading-none tracking-[-.07em] text-white transition duration-700 ease-out group-hover:translate-x-2 md:text-5xl lg:text-6xl">
              {project.title}
            </h3>
          </div>
        </a>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} website`}
          className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-700 hover:border-white/25 hover:bg-white/[0.055] md:min-h-[500px] md:p-8 lg:min-h-[560px] lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-white/[0.08] to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[.2em] text-white/40 transition duration-500 group-hover:text-white/70">
              Case study
            </span>
          </div>

          <div className="relative z-10 transition duration-700 ease-out group-hover:-translate-y-2">
            <p className="mb-7 max-w-md text-lg leading-relaxed text-white/80 md:text-xl">
              {project.meta}
            </p>

            <div className="space-y-3 border-t border-white/12 pt-6 text-sm leading-relaxed text-white/45 transition duration-500 group-hover:border-white/20 group-hover:text-white/60">
              <p>{project.services}</p>
              <p>{project.result}</p>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[.18em] text-white/55 transition duration-500 group-hover:translate-x-2 group-hover:text-white">
              Visit live website
            </p>
          </div>
        </a>
      </article>
    </section>
  );
}