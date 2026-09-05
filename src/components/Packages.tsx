import { useState } from 'react';
import { Check, Calculator, ArrowRight } from 'lucide-react';
import { PACKAGES, buildPackageWhatsAppLink } from '@/data/content';

export default function Packages() {
  const [area, setArea] = useState<number>(1200);

  return (
    <section id="packages" className="border-b border-border bg-background py-24">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Transparent Per-Sq.Ft Pricing</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Architectural &amp; Engineering Packages
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Complete planning and structural drawings tailored for homeowners and builders across Patna. Select your package and connect directly with our engineering team on WhatsApp.
          </p>

          {/* Quick Area Estimator */}
          <div className="mt-8 inline-flex items-center gap-3 bg-surface border border-border px-5 py-3 rounded-full">
            <Calculator className="text-gold h-4 w-4 shrink-0" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">Calculate for your area:</span>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min={100}
                max={50000}
                step={50}
                value={area || ''}
                onChange={(e) => setArea(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 bg-[#0B0C0E] border border-border px-2 py-1 text-xs text-white text-center font-medium focus:border-gold focus:outline-none rounded"
                placeholder="1200"
              />
              <span className="text-xs text-gold font-medium">sq.ft</span>
            </div>
          </div>
        </div>

        {/* 3 Packages Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {PACKAGES.map((pkg) => {
            const estimatedTotal = area > 0 ? area * pkg.rate : 0;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-lg transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-surface border-2 border-gold shadow-[0_8px_32px_rgba(201,162,77,0.2)] lg:-translate-y-2'
                    : 'bg-surface border border-border hover:border-gold/50'
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#DC2626] text-white text-[0.68rem] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  {/* Package Title & Rate */}
                  <div className="text-center pb-6 border-b border-border">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      {pkg.name}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-center gap-1 text-[#DC2626]">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#DC2626]">
                        ₹{pkg.rate}
                      </span>
                      <span className="text-sm font-semibold text-[#DC2626]">/sqft</span>
                    </div>

                    {/* Calculated estimated amount */}
                    {area > 0 && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Est. for {area.toLocaleString('en-IN')} sq.ft:{' '}
                        <strong className="text-white font-semibold">
                          ₹{estimatedTotal.toLocaleString('en-IN')}
                        </strong>
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-8 space-y-3.5 flex-1 text-sm text-neutral-300">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-emerald-400 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button -> WhatsApp redirection */}
                  <div className="mt-10 pt-6 border-t border-border">
                    <a
                      href={buildPackageWhatsAppLink(pkg.name, pkg.rate, area)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-300 ${
                        pkg.isPopular
                          ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-lg shadow-red-900/30'
                          : 'border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white'
                      }`}
                    >
                      Choose {pkg.name.replace(' Package', '')} Package
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote / Guidance */}
        <div className="mt-16 text-center text-xs text-muted-foreground max-w-xl mx-auto">
          <p>
            * All packages include on-site coordinate verification in Patna, complete architectural PDF deliverables, and direct consultation with registered civil engineers.
          </p>
        </div>
      </div>
    </section>
  );
}
