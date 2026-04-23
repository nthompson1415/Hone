import type { Metadata } from "next";
import Link from "next/link";
import { AnnualFuelSavingsSlider } from "@/components/annual-fuel-savings-slider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Fuel savings calculator | Hone Energy Systems",
  description:
    "Illustrative annual savings from on-farm biodiesel vs. retail diesel, using the same model assumptions as the site economics section.",
};

export default function SavingsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-hone-brand">
              Economics · Interactive
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-hone-fog sm:text-4xl">
              Annual fuel savings
            </h1>
            <p className="mt-4 text-base leading-relaxed text-hone-silver">
              Adjust expected biodiesel gallons per year. Figures use the same
              illustrative pump price and on-farm model cost as the{" "}
              <Link
                href="/#economics"
                className="text-hone-fog underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-hone-brand/60"
              >
                home page economics section
              </Link>
              —for discussion with your accountant and fuel log, not individualized
              financial advice.
            </p>

            <div className="mt-10">
              <AnnualFuelSavingsSlider />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
