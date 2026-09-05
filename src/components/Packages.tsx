import { useState } from 'react';
import { Check, Calculator, ArrowRight, Layers, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import {
  PACKAGES,
  CONSTRUCTION_PACKAGES,
  CONSTRUCTION_SPEC_SECTIONS,
  buildPackageWhatsAppLink,
  buildConstructionPackageWhatsAppLink,
} from '@/data/content';

export default function Packages() {
  const [activeTab, setActiveTab] = useState<'construction' | 'planning'>('construction');
  const [constructionArea, setConstructionArea] = useState<number>(1200);
  const [planningArea, setPlanningArea] = useState<number>(1200);
  const [showFullTable, setShowFullTable] = useState<boolean>(true);

  return (
    <section id="packages" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Transparent Pricing &amp; Specifications</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Choose Your Construction Package
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Clear per-sq.ft pricing with brand-named material grades, structural standards, and transparent handover stages. Direct WhatsApp consultation on every package.
          </p>

          {/* Tab Selector: Turnkey Construction vs Architectural Planning */}
          <div className="mt-10 inline-flex p-1.5 bg-surface border border-border rounded-xl">
            <button
              onClick={() => setActiveTab('construction')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                activeTab === 'construction'
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 size={15} />
              <span>Turnkey Construction (₹1,800 - ₹2,300)</span>
            </button>
            <button
              onClick={() => setActiveTab('planning')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                activeTab === 'planning'
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers size={15} />
              <span>Architectural Design (₹10 - ₹30)</span>
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            TAB 1: TURNKEY CONSTRUCTION PACKAGES
            ══════════════════════════════════════════════ */}
        {activeTab === 'construction' && (
          <div className="mt-12 animate-in fade-in duration-300">
            {/* Quick Area Estimator */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 bg-surface border border-border px-6 py-3.5 rounded-full shadow-lg">
                <Calculator className="text-gold h-4 w-4 shrink-0" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">Calculate for your plot/built-up area:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={100}
                    max={100000}
                    step={100}
                    value={constructionArea || ''}
                    onChange={(e) => setConstructionArea(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-24 bg-[#0B0C0E] border border-border px-2.5 py-1 text-xs text-white text-center font-semibold focus:border-gold focus:outline-none rounded"
                    placeholder="1200"
                  />
                  <span className="text-xs text-gold font-medium">sq.ft</span>
                </div>
              </div>
            </div>

            {/* 3 Construction Cards */}
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
              {CONSTRUCTION_PACKAGES.map((pkg) => {
                const estimatedTotal = constructionArea > 0 ? constructionArea * pkg.rate : 0;

                return (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col rounded-xl transition-all duration-300 ${
                      pkg.isPopular
                        ? 'bg-[#14161B] border-2 border-gold shadow-[0_8px_32px_rgba(201,162,77,0.25)] lg:-translate-y-2'
                        : 'bg-surface border border-border hover:border-gold/50'
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span
                          className={`text-white text-[0.68rem] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${
                            pkg.isPopular ? 'bg-gold text-black font-semibold' : 'bg-[#DC2626] text-white'
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="p-8 sm:p-10 flex flex-col flex-1">
                      <div className="text-center pb-6 border-b border-border">
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                          {pkg.name} Package
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{pkg.tagline}</p>

                        <div className="mt-4 flex items-baseline justify-center gap-1 text-[#DC2626]">
                          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#DC2626]">
                            ₹{pkg.rate.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm font-semibold text-[#DC2626]">/ sq.ft</span>
                        </div>

                        {constructionArea > 0 && (
                          <div className="mt-3 p-2 bg-[#0B0C0E] border border-white/5 rounded text-xs text-neutral-300">
                            Est. for {constructionArea.toLocaleString('en-IN')} sq.ft:{' '}
                            <strong className="text-gold font-bold">
                              ₹{estimatedTotal.toLocaleString('en-IN')}
                            </strong>
                          </div>
                        )}
                      </div>

                      {/* Key Highlights */}
                      <ul className="mt-8 space-y-3.5 flex-1 text-sm text-neutral-300">
                        {pkg.highlights.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="h-5 w-5 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-emerald-400 stroke-[2.5]" />
                            </span>
                            <span className="leading-snug text-xs sm:text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* WhatsApp Button */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <a
                          href={buildConstructionPackageWhatsAppLink(pkg.name, pkg.rate, constructionArea)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full btn-base text-center flex items-center justify-center gap-2 py-3.5 ${
                            pkg.isPopular ? 'btn-gold' : 'btn-outline hover:border-gold hover:text-gold'
                          }`}
                        >
                          <span>Choose {pkg.name}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Toggle Table Visibility Button */}
            <div className="mt-14 text-center">
              <button
                onClick={() => setShowFullTable(!showFullTable)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border hover:border-gold text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-lg transition-colors"
              >
                <span>{showFullTable ? 'Hide Detailed Specifications Table' : 'View Full Construction Specifications Table'}</span>
                {showFullTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* ══════════════════════════════════════════════
                FULL SPECIFICATIONS COMPARISON TABLE
                ══════════════════════════════════════════════ */}
            {showFullTable && (
              <div className="mt-10 overflow-hidden border border-border rounded-xl bg-surface shadow-2xl max-w-6xl mx-auto">
                <div className="p-6 bg-[#14161B] border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-white">Full Material &amp; Specification Comparison</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Complete trade-by-trade breakdown across Silver (₹1,800), Gold (₹2,000), and Platinum (₹2,300)
                    </p>
                  </div>
                  <span className="text-[0.68rem] uppercase tracking-[0.18em] text-gold font-semibold">
                    Indian Standard (IS) Monitored
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-[#0B0C0E] text-neutral-400 uppercase tracking-wider">
                        <th className="p-4 sm:p-5 font-semibold w-1/4">Features &amp; Trades</th>
                        <th className="p-4 sm:p-5 font-semibold w-1/4 text-white">
                          Silver <span className="block text-[#DC2626] font-bold text-sm normal-case mt-0.5">₹1,800/ sq.ft</span>
                        </th>
                        <th className="p-4 sm:p-5 font-semibold w-1/4 text-gold bg-gold/5">
                          Gold <span className="block text-[#DC2626] font-bold text-sm normal-case mt-0.5">₹2,000/ sq.ft</span>
                        </th>
                        <th className="p-4 sm:p-5 font-semibold w-1/4 text-white">
                          Platinum <span className="block text-[#DC2626] font-bold text-sm normal-case mt-0.5">₹2,300/ sq.ft</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {CONSTRUCTION_SPEC_SECTIONS.map((section, sIdx) => (
                        <>
                          {/* Section Header Row */}
                          <tr key={`sec-${sIdx}`} className="bg-[#121418] border-t-2 border-b border-border">
                            <td colSpan={4} className="p-3.5 sm:px-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
                              {section.category}
                            </td>
                          </tr>

                          {/* Section Feature Rows */}
                          {section.features.map((feat, fIdx) => (
                            <tr key={`feat-${sIdx}-${fIdx}`} className="hover:bg-white/[0.02] transition-colors">
                              <td className="p-4 sm:p-5 font-medium text-neutral-200 border-r border-border/40">
                                {feat.name}
                              </td>
                              <td className="p-4 sm:p-5 text-neutral-300 border-r border-border/40 leading-relaxed">
                                {feat.silver}
                              </td>
                              <td className="p-4 sm:p-5 text-neutral-200 bg-gold/[0.02] border-r border-border/40 leading-relaxed font-medium">
                                {feat.gold}
                              </td>
                              <td className="p-4 sm:p-5 text-neutral-200 leading-relaxed">
                                {feat.platinum}
                              </td>
                            </tr>
                          ))}
                        </>
                      ))}

                      {/* Bottom Action / Select Package Row */}
                      <tr className="bg-[#0E1013] border-t-2 border-border">
                        <td className="p-5 font-serif text-lg text-white">Select Package</td>
                        <td className="p-5">
                          <a
                            href={buildConstructionPackageWhatsAppLink('Silver', 1800, constructionArea)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-base btn-outline text-xs py-2.5 px-4 w-full text-center block hover:border-gold hover:text-gold"
                          >
                            Choose Silver
                          </a>
                        </td>
                        <td className="p-5 bg-gold/5">
                          <a
                            href={buildConstructionPackageWhatsAppLink('Gold', 2000, constructionArea)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-base btn-gold text-xs py-2.5 px-4 w-full text-center block"
                          >
                            Choose Gold
                          </a>
                        </td>
                        <td className="p-5">
                          <a
                            href={buildConstructionPackageWhatsAppLink('Platinum', 2300, constructionArea)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-base btn-outline text-xs py-2.5 px-4 w-full text-center block hover:border-gold hover:text-gold"
                          >
                            Choose Platinum
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════════════════════════
            TAB 2: ARCHITECTURAL & DESIGN PACKAGES
            ══════════════════════════════════════════════ */}
        {activeTab === 'planning' && (
          <div className="mt-12 animate-in fade-in duration-300">
            {/* Quick Area Estimator */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 bg-surface border border-border px-6 py-3.5 rounded-full shadow-lg">
                <Calculator className="text-gold h-4 w-4 shrink-0" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">Calculate for your design area:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={100}
                    max={50000}
                    step={50}
                    value={planningArea || ''}
                    onChange={(e) => setPlanningArea(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-20 bg-[#0B0C0E] border border-border px-2.5 py-1 text-xs text-white text-center font-medium focus:border-gold focus:outline-none rounded"
                    placeholder="1200"
                  />
                  <span className="text-xs text-gold font-medium">sq.ft</span>
                </div>
              </div>
            </div>

            {/* 3 Planning Cards */}
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
              {PACKAGES.map((pkg) => {
                const estimatedTotal = planningArea > 0 ? planningArea * pkg.rate : 0;

                return (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col rounded-xl transition-all duration-300 ${
                      pkg.isPopular
                        ? 'bg-[#14161B] border-2 border-gold shadow-[0_8px_32px_rgba(201,162,77,0.2)] lg:-translate-y-2'
                        : 'bg-surface border border-border hover:border-gold/50'
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-[#DC2626] text-white text-[0.68rem] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="p-8 sm:p-10 flex flex-col flex-1">
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

                        {planningArea > 0 && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            Est. for {planningArea.toLocaleString('en-IN')} sq.ft:{' '}
                            <strong className="text-white font-semibold">
                              ₹{estimatedTotal.toLocaleString('en-IN')}
                            </strong>
                          </p>
                        )}
                      </div>

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

                      <div className="mt-8 pt-6 border-t border-border">
                        <a
                          href={buildPackageWhatsAppLink(pkg.name, pkg.rate, planningArea)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-base btn-gold text-center flex items-center justify-center gap-2 py-3.5"
                        >
                          <span>Select {pkg.name}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
