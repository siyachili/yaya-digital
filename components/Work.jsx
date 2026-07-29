const projects = [
  {
    cls: "project-brendon",
    n: "01",
    title: "Brendon Bridge",
    meta: "A refined e-commerce home for a hyper-realistic artist, designed to let every artwork carry the room.",
    type: "Art / E-commerce",
    services: "Strategy · Web design · WordPress",
    result: "A premium digital gallery built to convert interest into enquiries and sales."
  },
  {
    cls: "project-inga",
    n: "02",
    title: "Inga Africa",
    meta: "A warmer, more confident digital presence shaped around African craft, character and modern commerce.",
    type: "Lifestyle / Retail",
    services: "Digital direction · UX · Development",
    result: "A clearer customer journey with stronger visual storytelling."
  },
  {
    cls: "project-matcha",
    n: "03",
    title: "Matcha Haus",
    meta: "A playful visual world for a Johannesburg matcha concept made to feel social, fresh and instantly recognisable.",
    type: "Hospitality / Concept",
    services: "Brand direction · Campaign design",
    result: "A flexible identity system ready for packaging, pop-ups and social."
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <div data-reveal className="reveal mb-14 flex items-end justify-between">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[.22em] text-acid">Selected work</p>
          <h2 className="font-display text-5xl font-semibold tracking-[-.06em] md:text-8xl">Work with a point of view.</h2>
        </div>
        <span className="hidden text-sm text-bone/45 md:block">2025—2026</span>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article data-reveal key={project.title} className={`reveal project-row grid gap-5 ${index === 1 ? "md:grid-cols-[.72fr_1.28fr]" : "md:grid-cols-[1.3fr_.7fr]"}`}>
            <div className={`project-art ${project.cls} min-h-[480px] rounded-[2rem] p-8 md:min-h-[620px] ${index === 1 ? "md:order-2" : ""}`}>
              <span className="relative z-10 text-xs uppercase tracking-[.2em]">Project {project.n}</span>
              <div className="project-label absolute bottom-8 left-8 z-10 right-8">
                <p className="mb-3 text-xs uppercase tracking-[.18em] text-white/65">{project.type}</p>
                <h3 className="font-display text-5xl font-semibold uppercase leading-none tracking-[-.07em] md:text-7xl">{project.title}</h3>
              </div>
            </div>

            <div className={`flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-white/12 p-8 md:p-10 ${index === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[.2em] text-bone/45">Case study</span>
                <span className="text-2xl text-acid">↗</span>
              </div>
              <div>
                <p className="mb-7 max-w-md text-xl leading-relaxed text-bone/78">{project.meta}</p>
                <div className="space-y-3 border-t border-white/12 pt-6 text-sm text-bone/48">
                  <p>{project.services}</p>
                  <p>{project.result}</p>
                </div>
                <a href="#contact" className="mt-8 inline-block text-xs uppercase tracking-[.18em] text-acid">Discuss a similar project ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
