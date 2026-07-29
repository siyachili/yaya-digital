export default function Hero() {
  return (
    <section id="top" className="noise grid-bg relative min-h-screen overflow-hidden px-5 pb-16 pt-36 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-center justify-between text-[10px] uppercase tracking-[.25em] text-bone/55 md:text-xs">
          <span>Independent digital studio</span>
          <span>Johannesburg / South Africa</span>
        </div>

        <h1 className="hero-title max-w-[1340px] font-display text-[17vw] font-semibold uppercase leading-[.76] tracking-[-.09em] md:text-[10.5rem]">
          <span className="hero-line"><span>Digital ideas</span></span>
          <span className="hero-line"><span>built to <em className="outline-text not-italic">move.</em></span></span>
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-bone/68 md:col-span-5 md:text-xl">
            We design brands, websites and digital products that help ambitious businesses look sharper, work smarter and grow with confidence.
          </p>
          <div className="flex gap-3 md:col-span-4 md:col-start-9">
            <a href="#work" className="button-pill group flex flex-1 items-center justify-between rounded-full border border-white/20 px-6 py-4 text-xs uppercase tracking-[.16em]">
              Explore work <span>↘</span>
            </a>
            <a href="#contact" aria-label="Start a project" className="magnetic-button grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-acid text-xl text-ink">↗</a>
          </div>
        </div>
      </div>

      <div className="hero-orb absolute -right-20 top-32 h-72 w-72 rounded-full bg-violet/40 blur-[100px]" />
      <div className="absolute bottom-8 left-5 text-[10px] uppercase tracking-[.25em] text-bone/35 md:left-10">Scroll to discover ↓</div>
    </section>
  );
}
