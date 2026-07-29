const items = ["Brand strategy", "Web design", "Development", "Digital products", "Campaigns", "Creative direction"];
export default function Marquee() {
  return <div className="overflow-hidden border-y border-ink bg-acid py-4 text-ink"><div className="flex w-max animate-marquee">{[...items,...items].map((x,i)=><span key={i} className="flex items-center whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-[-.04em] md:text-4xl"><span className="mx-7">{x}</span><span>✳</span></span>)}</div></div>;
}
