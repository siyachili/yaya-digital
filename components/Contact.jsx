export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-acid px-7 py-16 text-ink md:px-14 md:py-24">
        <p className="mb-10 text-xs uppercase tracking-[.22em]">
          Have a project in mind?
        </p>
        <h2 className="max-w-5xl font-display text-6xl font-semibold leading-[.85] tracking-[-.075em] md:text-[8.5rem]">
          Let&apos;s make something impossible to ignore.
        </h2>
        <div className="mt-14 flex flex-col gap-6 border-t border-ink/25 pt-8 md:flex-row md:items-center md:justify-between">
          <a
            className="text-xl font-semibold md:text-3xl"
            href="mailto:hello@yayadigital.co.za"
          >
            hello@yayadigital.co.za
          </a>
          <a
            href="mailto:hello@yayadigital.co.za"
            className="rounded-full bg-ink px-7 py-4 text-center text-xs uppercase tracking-[.18em] text-bone"
          >
            Start a conversation ↗
          </a>
        </div>
      </div>
    </section>
  );
}
