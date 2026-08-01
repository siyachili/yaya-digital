export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">
            YAYA<span className="text-neutral-400">.</span>DIGITAL
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-600">
            A creative digital agency crafting websites, brands and digital
            experiences for ambitious businesses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Navigation
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <a href="#work" className="transition hover:text-neutral-500">
              Work
            </a>
            <a href="#services" className="transition hover:text-neutral-500">
              Services
            </a>
            <a href="#about" className="transition hover:text-neutral-500">
              About
            </a>
            <a href="#contact" className="transition hover:text-neutral-500">
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Get in touch
          </p>

          <a
            href="mailto:hello@yayadigital.co.za"
            className="block text-sm transition hover:text-neutral-500"
          >
            hello@yayadigital.co.za
          </a>

          <p className="mt-3 text-sm text-neutral-600">
            Johannesburg, South Africa
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Yaya Digital. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <a href="#">Instagram</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div> 
    </footer>
  );
}