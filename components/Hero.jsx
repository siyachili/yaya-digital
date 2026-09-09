import { Roboto_Condensed } from "next/font/google";

const displayFont = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-4rem)] items-center bg-[#f5f5f1] px-5 pb-10 pt-24 text-black sm:px-7 md:px-10 md:pb-12 md:pt-28 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        <div className="mb-12 flex items-center justify-between border-t border-black/20 pt-3 text-[10px] uppercase tracking-[0.14em] text-black/60 md:mb-16 md:text-[11px]">

        </div>

        <h2
          className={`${displayFont.className} max-w-[1200px] text-[clamp(3.75rem,9vw,8.75rem)] font-normal uppercase leading-[0.82] tracking-[-0.055em]`}
        >
          Building brands
          <br />
          and 
          <br />
          Digital experiences.
        </h2>

        <div className="mt-14 grid gap-10 border-t border-black/20 pt-5 md:mt-20 md:grid-cols-12 md:items-start">
          <p className="max-w-md text-base leading-7 text-black/70 md:col-span-5 md:text-lg md:leading-8">
            Yaya Digital works with growing businesses to build clear brand
            identities and thoughtful digital solutions that help them show up better
            online.
          </p>

          <div className="flex items-center gap-8 md:col-span-4 md:col-start-9 md:justify-end">
            <a
              href="#clients"
              className="border-b border-black pb-1 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Our clients
            </a>

            <a
              href="#contact"
              className="border-b border-black pb-1 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}