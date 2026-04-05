const nav = [
  { href: "#process", label: "Process" },
  { href: "#bioforge", label: "BioForge" },
  { href: "#economics", label: "Economics" },
  { href: "#programs", label: "Programs" },
  { href: "#verification", label: "Verification" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hone-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-hone-fog transition-colors hover:text-hone-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-accent"
        >
          HONE
          <span className="ml-1 text-hone-steel font-normal">Energy Systems</span>
        </a>
        <nav
          aria-label="Primary"
          className="-mx-1 flex max-w-[min(100%,28rem)] flex-1 items-center gap-0.5 overflow-x-auto px-1 [scrollbar-width:none] md:max-w-none md:flex-none md:gap-1 [&::-webkit-scrollbar]:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded px-2 py-1.5 text-sm text-hone-silver transition-colors hover:text-hone-fog focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded border border-hone-moss/60 bg-hone-green/40 px-3 py-1.5 text-sm font-medium text-hone-fog transition-colors hover:border-hone-accent/50 hover:bg-hone-green/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-accent"
        >
          Data requirements
        </a>
      </div>
    </header>
  );
}
