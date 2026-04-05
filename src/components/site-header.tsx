import Image from "next/image";

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
          className="flex shrink-0 cursor-pointer items-center gap-2 transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-brand"
        >
          <Image
            src="/brand/hone-logo.jpg"
            alt="Hone Energy Systems"
            width={158}
            height={205}
            className="h-9 w-auto sm:h-10"
            priority
          />
          <span className="sr-only">Hone Energy Systems</span>
        </a>
        <nav
          aria-label="Primary"
          className="-mx-1 flex max-w-[min(100%,28rem)] flex-1 items-center gap-0.5 overflow-x-auto px-1 [scrollbar-width:none] md:max-w-none md:flex-none md:gap-1 [&::-webkit-scrollbar]:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 cursor-pointer rounded px-2 py-1.5 text-sm text-hone-silver transition-colors duration-200 ease-out hover:text-hone-fog focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="cursor-pointer rounded border border-hone-brand/45 bg-hone-brand/10 px-3 py-1.5 text-sm font-medium text-hone-fog transition-colors duration-200 ease-out hover:border-hone-brand/70 hover:bg-hone-brand/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-brand"
        >
          Data requirements
        </a>
      </div>
    </header>
  );
}
