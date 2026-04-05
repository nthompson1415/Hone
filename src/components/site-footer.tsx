export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-hone-forest">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-hone-fog">HONE</p>
            <p className="mt-1 max-w-sm text-sm text-hone-steel">
              Industrial energy platform for agricultural fuel autonomy. BioForge
              produces ASTM D6751 biodiesel — not renewable diesel (ASTM D975).
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
