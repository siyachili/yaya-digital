const items = [
  "Brand strategy",
  "Web design",
  "Development",
  "Digital products",
  "Campaigns",
  "Creative direction",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/20 bg-transparent py-4 text-white">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((x, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-[-0.04em] md:text-4xl"
          >
            <span className="mx-7">{x}</span>
            <span className="text-white/40">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}