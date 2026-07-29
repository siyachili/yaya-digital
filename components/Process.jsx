const steps = [
  ["Discover", "We get close to the business, audience and opportunity."],
  ["Define", "We turn insight into a clear creative and commercial direction."],
  ["Design", "We create, test and refine the system across key touchpoints."],
  ["Deliver", "We launch cleanly and leave your team equipped to keep moving."],
];
export default function Process() {
  return (
    <section className="section-rule mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <p className="mb-8 text-xs uppercase tracking-[.22em] text-acid">
        The process
      </p>
      <div className="grid gap-0 md:grid-cols-4">
        {steps.map(([t, c], i) => (
          <div
            key={t}
            className="border-t border-white/15 py-8 md:border-l md:border-t-0 md:px-7"
          >
            <span className="text-xs text-bone/35">0{i + 1}</span>
            <h3 className="my-7 font-display text-3xl font-semibold tracking-[-.04em]">
              {t}
            </h3>
            <p className="text-sm leading-relaxed text-bone/55">{c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
