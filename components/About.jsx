export default function About() {
  return (
    <section
      id="studio"
      className="section-rule relative overflow-hidden bg-violet px-5 py-24 text-bone md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
        <p className="text-xs uppercase tracking-[.22em] md:col-span-3">
          About Yaya Digital 
        </p>
        <div className="md:col-span-8">
          <h2 className="font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-8xl">
            Small team. Big thinking. Zero beige.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/78">
            Yaya Digital is an independent Johannesburg studio for founders and
            teams ready to move beyond safe, forgettable design. We combine
            strategy, creativity and technology under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}
