export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 text-black md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          Contact
        </p>

        <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
          Ready to build something exceptional?
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Whether you're launching a new brand, redesigning your website, or
          building a digital product, we'd love to hear about it.
        </p>

        <div className="mt-16 flex flex-col gap-8 border-t border-neutral-200 pt-10 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:hello@yayadigital.co.za"
            className="text-2xl font-medium transition hover:text-neutral-600"
          >
            hello@yayadigital.co.za
          </a>

          <a
            href="mailto:hello@yayadigital.co.za"
            className="rounded-full border border-black px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}