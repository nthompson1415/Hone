import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-hone-forest/78 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/brand/hone-logo.jpg"
              alt="Hone Energy Systems"
              width={640}
              height={220}
              className="h-9 w-auto opacity-95"
            />
            <p className="mt-3 font-mono text-xs font-medium uppercase tracking-wider text-hone-steel">
              Energy Systems
            </p>
            <p className="mt-1 max-w-sm text-sm text-hone-steel">
              Industrial energy platform for agricultural fuel autonomy. BioForge
              produces ASTM D6751 biodiesel, not renewable diesel (ASTM D975).
            </p>
          </div>
          <p className="font-mono text-xs text-hone-steel">
            © {new Date().getFullYear()} Hone Energy Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
