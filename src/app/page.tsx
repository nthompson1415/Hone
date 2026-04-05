import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero; ambient mesh is global (layout) */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center">
            <div>
              <p className="hone-animate-in hone-delay-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-hone-brand">
                Machine as platform · Economics first · Industrial integrity · Energy
                autonomy
              </p>
              <h1 className="hone-animate-in hone-delay-2 mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-hone-fog sm:text-5xl lg:text-6xl">
                Industrial-grade fuel autonomy: Turning on-farm oils into{" "}
                <span className="text-hone-brand">ASTM-compliant energy</span>.
              </h1>
              <p className="hone-animate-in hone-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-hone-silver">
                Hone is not a hardware novelty; it is farm infrastructure on par with
                irrigation and drying. We bridge conservative operators and
                next-generation sustainability with engineering-led independence.
              </p>
              <div className="hone-animate-in hone-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#economics"
                  className="inline-flex cursor-pointer items-center justify-center rounded border border-hone-brand/55 bg-hone-brand/15 px-5 py-3 text-sm font-semibold text-hone-fog transition-colors duration-200 ease-out hover:border-hone-brand/80 hover:bg-hone-brand/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-brand"
                >
                  Review the fuel spread model
                </a>
                <a
                  href="#spec"
                  className="inline-flex cursor-pointer items-center justify-center rounded border border-white/15 px-5 py-3 text-sm font-semibold text-hone-fog transition-colors duration-200 ease-out hover:border-hone-brand/45 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hone-brand"
                >
                  Product specification
                </a>
              </div>
            </div>
            <div className="hone-animate-in hone-delay-5 relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-hone-charcoal/40 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-[box-shadow,border-color] duration-200 ease-out hover:border-white/[0.14] hover:shadow-[0_0_0_1px_rgba(227,33,40,0.12)]">
                <Image
                  src="/brand/hone-bioforge-system.jpg"
                  alt="BioForge biodiesel production system and Hone-branded dispensing unit"
                  width={1024}
                  height={682}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 26rem, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Critical spec */}
        <section
          id="spec"
          className="border-b border-white/10 bg-hone-forest/50"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Specification
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              BioForge produces ASTM D6751 biodiesel, not renewable diesel.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-hone-charcoal/60 p-6">
                <h3 className="font-mono text-sm font-medium text-hone-fog">
                  Biodiesel, ASTM D6751
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-hone-silver">
                  Transesterification converts triglycerides into methyl esters
                  suitable for compression-ignition engines when quality control
                  and feedstock preparation meet spec. BioForge is designed for
                  this pathway.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-hone-charcoal/60 p-6">
                <h3 className="font-mono text-sm font-medium text-hone-steel">
                  Renewable diesel, ASTM D975 (different product)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-hone-steel">
                  Renewable diesel typically refers to hydrotreated paraffinic
                  fuels under refinery-style processes. It is{" "}
                  <strong className="text-hone-silver">
                    not interchangeable in claims or compliance
                  </strong>{" "}
                  with biodiesel from transesterification. We do not blur these
                  lines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Core process
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              Why transesterification matters in the field
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-hone-silver">
              Raw oils are too viscous for modern fuel systems: they do not
              atomize like diesel, which drives incomplete combustion, deposits,
              and fouling. Transesterification breaks heavy triglycerides into
              smaller fuel molecules, biodiesel, that spray, combust, and
              handle more predictably when held to{" "}
              <span className="text-hone-fog">ASTM D6751</span>.
            </p>
          </div>
        </section>

        {/* BioForge capabilities */}
        <section
          id="bioforge"
          className="border-b border-white/10 bg-hone-forest/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              BioForge modular ecosystem
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              Capabilities framed as farm-level resilience
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-hone-charcoal/40 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Feedstock filtration &amp; dewatering
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Solids and moisture are removed upstream.{" "}
                  <strong className="text-hone-fog">Dewatering is critical:</strong>{" "}
                  water promotes soap formation, which reduces yield and fouls the
                  system.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-hone-charcoal/40 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  ASME-certified reaction vessels
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Stainless reactors built for thermal control and safety at
                  operating scale; industrial integrity, not batch tinkering.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-hone-charcoal/40 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Automated dosing &amp; mixing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Precision-controlled methoxide delivery (methanol + NaOH/KOH
                  catalyst) for consistent fuel quality run to run.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-hone-charcoal/40 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Phase separation &amp; QC sensors
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Inline density and viscosity monitoring to support separation
                  discipline and ASTM D6751-aligned quality control.
                </p>
              </li>
              <li className="rounded-lg border border-white/10 bg-hone-charcoal/40 p-6 sm:col-span-2">
                <h3 className="font-mono text-sm text-hone-fog">
                  Biogas integration module (optional)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Closed-loop narrative for livestock operations: capture
                  manure-derived methane for process heat and electricity;{" "}
                  <span className="text-hone-fog">manure → heat</span>;{" "}
                  <span className="text-hone-fog">oil → fuel</span>.
                </p>
              </li>
            </ul>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-12 lg:grid-cols-2">
              <div>
                <h3 className="font-mono text-sm font-medium text-hone-fog">
                  G800
                </h3>
                <p className="mt-2 text-sm text-hone-silver">
                  Sized for single-operator throughput, logistics, and capital
                  curves; fuel stack resilience without overbuilding the plant.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm font-medium text-hone-fog">
                  G1500, cooperative hub
                </h3>
                <p className="mt-2 text-sm text-hone-silver">
                  Higher-throughput asset for a shared deployment model: one hub
                  serving many members in a ~$275.8B cooperative sector, improving
                  regional energy resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Economics */}
        <section id="economics" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Economics before environment
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              G800 illustration, 25,000 gal/year
            </p>
            <p className="mt-4 max-w-3xl text-sm text-hone-steel">
              Illustrative model for discussion with your accountant and fuel
              log, not individualized financial advice.
            </p>

            <div className="mt-10 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-hone-forest/80 font-mono text-xs uppercase tracking-wider text-hone-steel">
                  <tr>
                    <th className="px-4 py-3 font-medium">Line</th>
                    <th className="px-4 py-3 font-medium">Assumption</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-hone-silver">
                  <tr>
                    <td className="px-4 py-3 text-hone-fog">Retail diesel (pump)</td>
                    <td className="px-4 py-3">$3.63 / gal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-hone-fog">
                      On-farm production cost (model)
                    </td>
                    <td className="px-4 py-3">
                      ~$0.16 / gal plus feedstock; confirm in diligence
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-hone-fog">Annual volume</td>
                    <td className="px-4 py-3">25,000 gal</td>
                  </tr>
                  <tr className="bg-hone-green/20">
                    <td className="px-4 py-3 font-semibold text-hone-fog">
                      Net annual fuel savings (headline)
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold text-hone-fog">
                      $86,750
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-hone-fog">
                      Payback with 50% USDA REAP
                    </td>
                    <td className="px-4 py-3">
                      ~4.6 years (e.g. $1M capex → $500k net after grant)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-white/10 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Secondary revenue, meal
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Where oil is extracted from oilseed on-farm, meal remains a
                  marketable co-product for livestock feed, historically near{" "}
                  <span className="text-hone-fog">~$300/ton</span> depending on
                  markets. A sunk cost becomes a ledger line.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Electrical load, stated plainly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hone-silver">
                  Expect roughly{" "}
                  <span className="text-hone-fog">2,000–2,500 kWh/year</span>{" "}
                  incremental use on typical crop-farm profiles; multiply by your
                  utility rate; we model it openly because your balance sheet
                  deserves the full picture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section
          id="programs"
          className="border-b border-white/10 bg-hone-forest/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Regulatory navigation
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              REAP navigation partner
            </p>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-hone-silver">
              <li>
                <span className="font-mono text-hone-fog">USDA REAP: </span>
                Up to 50% of eligible project costs. Illustrative: $1M equipment →
                $500k net after grant; actual eligibility requires verification.
              </li>
              <li>
                <span className="font-mono text-hone-fog">Section 9003: </span>
                Loan guarantees for advanced biofuel infrastructure where
                applicable; a strategic financing lane, not a guarantee of
                approval.
              </li>
              <li>
                <span className="font-mono text-hone-fog">
                  Carbon monetization:{" "}
                </span>
                RINs under federal RFS and LCFS-style credits in participating
                jurisdictions; program-dependent liquidity; we help you map what
                applies to your site and fuel pathway.
              </li>
            </ul>
          </div>
        </section>

        {/* Verification */}
        <section id="verification" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Verification
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              Trusted-neighbor evidence
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-lg border border-white/10 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Institutional &amp; field
                </h3>
                <p className="mt-2 text-sm text-hone-silver">
                  SUNY Morrisville partnership; operational learnings from
                  Stryker and Dumond farms; peer-visible deployment, not slide
                  deck fiction.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  Hone Reforged
                </h3>
                <p className="mt-2 text-sm text-hone-silver">
                  Transition de-risking: surplus or off-season scenarios paired
                  with structured diesel buyback liquidity; details provided in
                  commercial process.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 p-6">
                <h3 className="font-mono text-sm text-hone-fog">
                  In-season reliability
                </h3>
                <p className="mt-2 text-sm text-hone-silver">
                  1–2 week repair commitment to reduce harvest-window downtime
                  risk, the fear that keeps autonomy off the table.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carbon */}
        <section className="border-b border-white/10 bg-hone-forest/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Carbon origin
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              Biogenic vs. fossil carbon
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-hone-silver">
              Biodiesel carbon was recently cycled through crops; fossil diesel
              introduces geologic carbon. On-site production avoids roughly{" "}
              <span className="font-mono text-hone-fog">16.8 lb CO₂</span> per
              gallon vs. the fossil baseline in our accounting narrative;
              methodology available on request for your verifier.
            </p>
          </div>
        </section>

        {/* Contact / data requirements */}
        <section id="contact" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-hone-brand">
              Tailored analysis
            </h2>
            <p className="mt-3 max-w-3xl text-2xl font-semibold text-hone-fog">
              Data we need to localize your model
            </p>
            <ol className="mt-8 list-decimal space-y-3 pl-5 text-sm text-hone-silver">
              <li>
                <span className="text-hone-fog">Feedstock profile</span>; soy,
                waste cooking oil, animal fats, or blends (pretreatment and
                economics shift materially).
              </li>
              <li>
                <span className="text-hone-fog">Electricity rate</span>, $/kWh
                and demand structure to net out the 2,000–2,500 kWh/year increment.
              </li>
              <li>
                <span className="text-hone-fog">State programs</span>; e.g.
                California LCFS vs. Northeast heating oil mandates; compliance
                copy must match your jurisdiction.
              </li>
              <li>
                <span className="text-hone-fog">Cooperative participation</span>;
                whether a G1500 hub-and-spoke structure is on the table.
              </li>
            </ol>
            <p className="mt-8 text-sm text-hone-steel">
              Contact Hone through your commercial channel; this site is a
              technical and economic primer for board-ready conversations.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
