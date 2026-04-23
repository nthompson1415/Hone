"use client";

import { useMemo, useState, type CSSProperties } from "react";

const RETAIL_PER_GAL = 5.4;
const ON_FARM_MODEL_PER_GAL = 1.1;
const MIN_GAL = 1_000;
const MAX_GAL = 100_000;
const STEP = 500;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatGallons(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    value,
  );
}

export function AnnualFuelSavingsSlider() {
  const [gallons, setGallons] = useState(25_000);

  const { savings, retailTotal, modeledCost } = useMemo(() => {
    const retailTotal = gallons * RETAIL_PER_GAL;
    const modeledCost = gallons * ON_FARM_MODEL_PER_GAL;
    return {
      savings: retailTotal - modeledCost,
      retailTotal,
      modeledCost,
    };
  }, [gallons]);

  const pct =
    ((gallons - MIN_GAL) / (MAX_GAL - MIN_GAL)) * 100;

  return (
    <div className="rounded-lg border border-white/10 bg-hone-charcoal/70 p-6 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-mono text-sm font-medium text-hone-fog">
            Annual biodiesel usage
          </h3>
          <p className="mt-1 max-w-xl text-sm text-hone-steel">
            Move the slider to match your expected gallons per year. Savings use
            the same illustrative pump vs. on-farm model costs as the economics
            primer on the site (not individualized advice).
          </p>
        </div>
        <p className="font-mono text-2xl font-semibold tabular-nums text-hone-brand sm:text-3xl">
          {formatGallons(gallons)} gal/yr
        </p>
      </div>

      <div className="mt-8">
        <label className="sr-only" htmlFor="annual-gallons">
          Annual gallons produced or displaced
        </label>
        <input
          id="annual-gallons"
          type="range"
          min={MIN_GAL}
          max={MAX_GAL}
          step={STEP}
          value={gallons}
          onChange={(e) => setGallons(Number(e.target.value))}
          className="hone-range-slider w-full cursor-pointer"
          style={{ "--fill-pct": `${pct}%` } as CSSProperties}
        />
        <div className="mt-2 flex justify-between font-mono text-xs text-hone-steel">
          <span>{formatGallons(MIN_GAL)}</span>
          <span>{formatGallons(MAX_GAL)}</span>
        </div>
      </div>

      <dl className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
        <div className="rounded-md border border-white/10 bg-hone-forest/40 px-4 py-3">
          <dt className="font-mono text-xs uppercase tracking-wider text-hone-steel">
            Retail diesel total
          </dt>
          <dd className="mt-1 font-mono text-lg font-semibold tabular-nums text-hone-fog">
            {formatCurrency(retailTotal)}
          </dd>
          <p className="mt-1 text-xs text-hone-steel">
            @ ${RETAIL_PER_GAL.toFixed(2)}/gal pump
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-hone-forest/40 px-4 py-3">
          <dt className="font-mono text-xs uppercase tracking-wider text-hone-steel">
            Modeled on-farm cost
          </dt>
          <dd className="mt-1 font-mono text-lg font-semibold tabular-nums text-hone-fog">
            {formatCurrency(modeledCost)}
          </dd>
          <p className="mt-1 text-xs text-hone-steel">
            ~${ON_FARM_MODEL_PER_GAL.toFixed(2)}/gal on-farm model
          </p>
        </div>
        <div className="rounded-md border border-hone-brand/35 bg-hone-brand/10 px-4 py-3 sm:col-span-1">
          <dt className="font-mono text-xs uppercase tracking-wider text-hone-brand">
            Net annual savings
          </dt>
          <dd className="mt-1 font-mono text-xl font-semibold tabular-nums text-hone-fog sm:text-2xl">
            {formatCurrency(savings)}
          </dd>
          <p className="mt-1 text-xs text-hone-silver">
            vs. buying {formatGallons(gallons)} gal at retail
          </p>
        </div>
      </dl>
    </div>
  );
}
