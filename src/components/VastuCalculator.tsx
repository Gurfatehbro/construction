import { useState } from 'react';
import { Compass, Ruler, Sparkles, RotateCcw, CheckCircle2, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/content';

interface VastuResult {
  entrance: string;
  masterBedroom: string;
  kitchen: string;
  poojaRoom: string;
  livingRoom: string;
  toilets: string;
  staircase: string;
  waterBorewell: string;
  overheadTank: string;
  balcony: string;
}

export default function VastuCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [facing, setFacing] = useState<string>('');
  const [result, setResult] = useState<{
    area: number;
    facingName: string;
    suggestions: VastuResult;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (!l || !w || !facing) {
      alert('Please enter plot length, width and select plot front direction.');
      return;
    }

    const area = Math.round(l * w);

    let entranceRule = 'North or East corner for optimal prosperity';
    if (facing === 'North') {
      entranceRule = 'North / North-East (Mukhya or Bhallat pada) - Highly Auspicious for wealth and prosperity';
    } else if (facing === 'East') {
      entranceRule = 'East / North-East (Jayant or Indra pada) - Highly Auspicious for health, clarity & fame';
    } else if (facing === 'South') {
      entranceRule = 'South-East 3rd or 4th Pada (Vithatha / Grihaksht) - Auspicious when placed away from South-West';
    } else if (facing === 'West') {
      entranceRule = 'West / North-West (Pushpadanta or Sugriva pada) - Promotes business stability & growth';
    } else if (facing === 'North-East') {
      entranceRule = 'Direct North-East (Ishan) - Supreme sacred energy gateway';
    } else if (facing === 'North-West') {
      entranceRule = 'North-West quadrant avoiding corner vertex';
    } else if (facing === 'South-East') {
      entranceRule = 'South-East (Agneya) avoiding direct corner';
    } else if (facing === 'South-West') {
      entranceRule = 'West of South-West or South of South-West under specialized architectural orientation';
    }

    const suggestions: VastuResult = {
      entrance: entranceRule,
      masterBedroom: 'South-West (Nairutya) - Ensures stability, authority, and financial strength for the head of family.',
      kitchen: 'South-East (Agneya) - Governed by Agni (Fire Element). Cooking facing East is ideal. Alternative: North-West (Vayavya).',
      poojaRoom: 'North-East (Ishan Kon) - Supreme sacred zone of positive cosmic energies. Face East or North during prayer.',
      livingRoom: 'North or East - Facilitates smooth incoming flow of positive cosmic vibrations and guest harmony.',
      toilets: 'North-West (Vayavya) or West - Neutral elimination zone. Strictly avoid North-East, South-West, or center (Brahmasthan).',
      staircase: 'South, South-West, or West - Heavy load zones suitable for clockwise ascending stair structures.',
      waterBorewell: 'North-East (Ishan) - Deep water bodies in the North-East bring prosperity and peace.',
      overheadTank: 'South-West (Nairutya) or West - Maximizes height and structural weight in the earth quadrant.',
      balcony: 'North or East - Maximizes early morning sunlight and positive natural ventilation.',
    };

    setResult({
      area,
      facingName: facing,
      suggestions,
    });

    const fullVastuReportMessage =
      `🏛️ *Vastu Shastra Planning Report - Global Infraspace*\n\n` +
      `📋 *Plot Specifications:*\n` +
      `• Plot Dimensions: ${l} ft × ${w} ft\n` +
      `• Total Area: ${area.toLocaleString('en-IN')} sq.ft\n` +
      `• Road Facing Direction: *${facing}*\n\n` +
      `🧭 *Vastu Purusha Mandala Room Allocations:*\n` +
      `• Main Entrance: ${suggestions.entrance}\n` +
      `• Master Bedroom: ${suggestions.masterBedroom}\n` +
      `• Kitchen: ${suggestions.kitchen}\n` +
      `• Pooja Room: ${suggestions.poojaRoom}\n` +
      `• Living Room: ${suggestions.livingRoom}\n` +
      `• Toilets / Bathrooms: ${suggestions.toilets}\n` +
      `• Staircase: ${suggestions.staircase}\n` +
      `• Underground Borewell: ${suggestions.waterBorewell}\n` +
      `• Overhead Water Tank: ${suggestions.overheadTank}\n` +
      `• Balcony / Verandah: ${suggestions.balcony}\n\n` +
      `Please review my plot details and share a customized 2D/3D Vastu-compliant architectural floor plan.`;

    const waUrl = buildWhatsAppLink(fullVastuReportMessage);
    window.location.href = waUrl;
  };

  const handleReset = () => {
    setLength('');
    setWidth('');
    setFacing('');
    setResult(null);
  };

  const whatsAppMessage = result
    ? `Hello Global Infraspace, I used your Vastu Planning Tool for my plot (${length} ft x ${width} ft = ${result.area} sq.ft) with ${result.facingName}-facing entrance. I would like to consult with your architectural team on a Vastu-compliant 3D floor plan.`
    : `Hello Global Infraspace, I would like to consult on a Vastu Shastra architectural floor plan for my plot.`;

  return (
    <section id="vastu-tool" className="relative overflow-hidden border-t border-b border-border bg-[#0B0C0E] py-20 lg:py-28">
      {/* Background Architectural Blueprint with Ambient Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/95 to-[#0B0C0E]/90 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles size={14} className="text-gold animate-pulse" />
              <span>Vastu Planning Tool</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Enter Your Plot Size <br />
              <span className="text-gold">Get Vastu Suggestions</span>
            </h2>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Enter only your plot length, width and front direction. Get an instant preliminary Vastu suggestion for important rooms, water bodies, and service locations.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-neutral-300">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border">
                <Ruler size={14} className="text-gold" /> Length &amp; Width
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border">
                <Compass size={14} className="text-gold" /> Plot Facing
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border">
                <CheckCircle2 size={14} className="text-gold" /> Instant Guide
              </span>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <ShieldCheck size={16} className="text-gold shrink-0" />
              <span>Follows Vedic Vastu Purusha Mandala principles integrated with modern structural codes.</span>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#121418] border border-border/80 shadow-2xl p-6 sm:p-9 backdrop-blur-md">
              <div className="flex items-center justify-between pb-5 border-b border-border/60">
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#E03A3E]">
                    Free Vastu Calculator
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                    Enter Plot Details
                  </h3>
                </div>
                <span className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white bg-blue-600 rounded">
                  Free
                </span>
              </div>

              {/* Requirement Helper Banner */}
              <div className="mt-5 flex items-center gap-3.5 rounded-xl bg-[#1A1D23] border border-white/5 p-3.5 text-xs text-neutral-300">
                <div className="p-2 bg-[#0B0C0E] rounded-lg text-gold shrink-0">
                  <Compass size={18} />
                </div>
                <div>
                  <strong className="block text-white font-medium">Only 3 details required</strong>
                  <span className="text-muted-foreground text-[0.78rem]">
                    Plot length, plot width and the road/front direction.
                  </span>
                </div>
              </div>

              {/* Input Form */}
              <form onSubmit={handleCalculate} className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-neutral-400 mb-2 font-medium">
                      Plot Length
                    </label>
                    <div className="relative flex items-center">
                      <Ruler size={16} className="absolute left-3.5 text-neutral-500 pointer-events-none" />
                      <input
                        type="number"
                        min="1"
                        step="any"
                        required
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="e.g. 60"
                        className="w-full bg-[#0B0C0E] border border-border/80 rounded-lg pl-10 pr-10 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                      />
                      <span className="absolute right-3.5 text-xs text-neutral-500 font-medium">ft</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-neutral-400 mb-2 font-medium">
                      Plot Width
                    </label>
                    <div className="relative flex items-center">
                      <Ruler size={16} className="absolute left-3.5 text-neutral-500 pointer-events-none" />
                      <input
                        type="number"
                        min="1"
                        step="any"
                        required
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="e.g. 40"
                        className="w-full bg-[#0B0C0E] border border-border/80 rounded-lg pl-10 pr-10 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                      />
                      <span className="absolute right-3.5 text-xs text-neutral-500 font-medium">ft</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-neutral-400 mb-2 font-medium">
                    Plot Front / Road Direction
                  </label>
                  <div className="relative flex items-center">
                    <Compass size={16} className="absolute left-3.5 text-neutral-500 pointer-events-none" />
                    <select
                      required
                      value={facing}
                      onChange={(e) => setFacing(e.target.value)}
                      className="w-full bg-[#0B0C0E] border border-border/80 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select plot front / facing</option>
                      <option value="North">North (Uttara) — Most Auspicious for Prosperity</option>
                      <option value="East">East (Purva) — Highly Auspicious for Health &amp; Vitality</option>
                      <option value="South">South (Dakshina) — Auspicious via Proper Pada Alignment</option>
                      <option value="West">West (Pashchima) — Auspicious for Business &amp; Stability</option>
                      <option value="North-East">North-East (Ishan) — Supreme Divine Energy</option>
                      <option value="South-East">South-East (Agneya) — Fire Energy Zone</option>
                      <option value="North-West">North-West (Vayavya) — Air Energy Zone</option>
                      <option value="South-West">South-West (Nairutya) — Earth Energy Zone</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold py-3.5 px-6 rounded-lg text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                  >
                    <span>Get Vastu Suggestion</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-3.5 bg-surface border border-border/80 hover:border-neutral-500 text-neutral-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={15} />
                    <span>Reset</span>
                  </button>
                </div>

                <p className="text-[0.7rem] text-muted-foreground leading-relaxed text-center pt-2">
                  Preliminary direction-based planning guidance. Clicking "Get Vastu Suggestion" opens your complete plot report directly on official WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Results Modal / Expansion View */}
        {result && (
          <div className="mt-14 rounded-2xl bg-[#14161B] border border-gold/40 p-6 sm:p-10 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  Vastu Analysis Summary
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white mt-1">
                  Optimal Layout for {length} ft × {width} ft ({result.area.toLocaleString()} sq.ft)
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  Plot Facing: <strong className="text-gold font-semibold">{result.facingName}</strong>
                </p>
              </div>

              <a
                href={buildWhatsAppLink(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Get 3D Vastu Plan on WhatsApp</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Vastu Zones Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Home size={15} /> Main Entrance / Gate
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.entrance}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <CheckCircle2 size={15} /> Master Bedroom
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.masterBedroom}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Sparkles size={15} /> Kitchen (Rasoi)
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.kitchen}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Sparkles size={15} /> Pooja / Prayer Room
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.poojaRoom}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Home size={15} /> Living &amp; Drawing Hall
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.livingRoom}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <CheckCircle2 size={15} /> Toilets &amp; Bathrooms
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.toilets}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Ruler size={15} /> Staircase Location
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.staircase}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <Compass size={15} /> Water Borewell &amp; Sump
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.waterBorewell}
                </p>
              </div>

              <div className="p-5 bg-[#0B0C0E] border border-border/80 rounded-xl">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.16em] font-semibold mb-2">
                  <ShieldCheck size={15} /> Overhead Tank &amp; Balcony
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {result.suggestions.overheadTank} {result.suggestions.balcony}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Need architectural CAD floor plans incorporating municipal bylaws with strict Vastu Purusha Mandala compliance?
              </p>
              <a
                href={buildWhatsAppLink(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                Discuss with Principal Architect <ArrowRight size={13} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
