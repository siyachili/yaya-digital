export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center bg-[#f7f7f5] px-6 py-24 text-black md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-12 flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>Creative Digital Agency</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl font-display text-6xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-[8.5rem]">
          Digital products
          <br />
          crafted to grow
          <br />
          ambitious brands.
        </h1>

        {/* Bottom Content */}
        <div className="mt-20 grid gap-12 border-t border-black/10 pt-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="max-w-xl text-lg leading-8 text-neutral-600">
              Yaya Digital partners with founders and businesses to create
              premium websites for better presence online, memorable brands and high-performing digital
              experiences that deliver real results.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:col-span-3 md:col-start-10">
            <a
              href="#work"
              className="rounded-full border border-black px-7 py-4 text-center text-sm font-medium transition hover:bg-black hover:text-white"
            >
              View Our Work
            </a>

            <a
              href="#contact"
              className="rounded-full bg-black px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}