export default function About() {
  return (
    <section
      id="about"
      className="bg-neutral-50 px-6 py-24 text-black md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              About Yaya Digital
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We build digital experiences that people remember.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Yaya Digital is a Johannesburg-based creative digital agency
              helping ambitious businesses grow through strategy, design and
              technology.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              From high-performance websites to complete brand experiences, we
              create digital products that don't just look good—they perform,
              convert and leave a lasting impression.
            </p>

            <div className="mt-16 grid gap-10 border-t border-neutral-200 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-semibold">01</h3>
                <p className="mt-3 text-neutral-600">
                  Strategy-first thinking to solve real business problems.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">02</h3>
                <p className="mt-3 text-neutral-600">
                  Premium design crafted with clarity, simplicity and purpose.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">03</h3>
                <p className="mt-3 text-neutral-600">
                  Modern development using technologies built for speed,
                  scalability and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}