export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 text-xs uppercase tracking-[.18em] text-bone/45 md:flex-row md:items-center md:justify-between md:px-10">
        <span>Yaya Digital © {new Date().getFullYear()}</span>
        <div className="flex gap-7">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <span>Johannesburg, South Africa</span>
      </div>
    </footer>
  );
}
