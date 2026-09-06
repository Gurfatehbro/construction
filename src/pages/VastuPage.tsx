import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sun, 
  Flame, 
  Droplets, 
  Wind, 
  Mountain, 
  Phone, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  Building2, 
  Ruler
} from 'lucide-react';
import { CONTACT, buildWhatsAppLink } from '@/data/content';
import VastuCalculator from '@/components/VastuCalculator';

interface DirectionZone {
  name: string;
  sanskrit: string;
  element: string;
  deity: string;
  icon: any;
  color: string;
  bestFor: string[];
  avoid: string[];
  description: string;
}

const ZONES: DirectionZone[] = [
  {
    name: 'North-East',
    sanskrit: 'Ishan Kon (ईशान)',
    element: 'Water (Jal)',
    deity: 'Lord Shiva / Jupiter',
    icon: Droplets,
    color: 'text-sky-400 border-sky-500/30 bg-sky-950/20',
    bestFor: ['Pooja & Meditation Room', 'Underground Water Tank / Borewell', 'Open Lawn / Verandah', 'Main Entrance (Pada 3/4)'],
    avoid: ['Toilets & Septic Tanks', 'Kitchen & Open Fire', 'Heavy RCC Columns & Staircase', 'Master Bedroom'],
    description: 'Supreme sacred cosmic gateway. Must remain clean, clutter-free, low-elevation, and light in structural weight to allow divine prosperity and clarity.',
  },
  {
    name: 'East',
    sanskrit: 'Purva (पूर्व)',
    element: 'Solar Light & Ether',
    deity: 'Lord Indra / Surya Dev',
    icon: Sun,
    color: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
    bestFor: ['Main Entrance (Jayant/Indra)', 'Living Room / Family Lounge', 'Study Room & Balcony', 'Large Sunlight Windows'],
    avoid: ['Heavy Storage Lockers', 'Toilets without exhaust buffer', 'High opaque boundary walls'],
    description: 'Source of early morning ultraviolet health rays and mental clarity. Maximizing openings in the East brings vitality, fame, and good health.',
  },
  {
    name: 'South-East',
    sanskrit: 'Agneya (आग्नेय)',
    element: 'Fire (Agni)',
    deity: 'Lord Agni / Venus (Shukra)',
    icon: Flame,
    color: 'text-rose-400 border-rose-500/30 bg-rose-950/20',
    bestFor: ['Kitchen (Cook facing East)', 'Electrical Distribution Panels & Inverters', 'Boilers, Geysers & Generators', 'Microwave & Cooking Ranges'],
    avoid: ['Underground Water Sumps', 'Borewells', 'Master Bedroom', 'Toilets / Septic Tanks'],
    description: 'The energetic thermal engine of the residence. Proper placement of fire equipment in Agneya fosters robust health, appetite, and commercial momentum.',
  },
  {
    name: 'South',
    sanskrit: 'Dakshina (दक्षिण)',
    element: 'Earth & Fire Transition',
    deity: 'Lord Yama / Mars (Mangal)',
    icon: Mountain,
    color: 'text-orange-400 border-orange-500/30 bg-orange-950/20',
    bestFor: ['Bedrooms (Head towards South)', 'Store Rooms & Heavy Wardrobes', 'Thick Masonry Structural Walls', 'Overhead Tank Staging'],
    avoid: ['Underground Water Tanks', 'Borewells', 'Large open glass apertures without louvers'],
    description: 'Zone of strength, physical endurance, and legal security. Requires dense structural massing and fewer openings compared to North and East.',
  },
  {
    name: 'South-West',
    sanskrit: 'Nairutya (नैऋत्य)',
    element: 'Earth (Prithvi)',
    deity: 'Nirut / Rahu',
    icon: Mountain,
    color: 'text-amber-300 border-amber-500/30 bg-amber-900/20',
    bestFor: ['Master Bedroom for Family Head', 'Heavy RCC Slabs & Highest Roof', 'Overhead Water Tank', 'Safe, Cash Locker & Gold Almirah'],
    avoid: ['Underground Water Bodies', 'Septic Tanks', 'Pooja Room', 'Basement Cutouts'],
    description: 'The anchoring earth anchor of the entire edifice. Must always be the highest, heaviest, and most enclosed zone to ensure authoritative stability.',
  },
  {
    name: 'West',
    sanskrit: 'Pashchima (पश्चिम)',
    element: 'Air & Water (Varuna)',
    deity: 'Lord Varuna / Saturn (Shani)',
    icon: Wind,
    color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20',
    bestFor: ['Dining Hall', 'Children Study & Play Area', 'Overhead Water Tank', 'Secondary Bedroom / Home Theater'],
    avoid: ['Underground Water Sumps', 'Main Portico Cutouts'],
    description: 'Zone of profits, trade prosperity, and stable family dining. Balances heavy structural elements and offers pleasant evening natural light.',
  },
  {
    name: 'North-West',
    sanskrit: 'Vayavya (वायव्य)',
    element: 'Air (Vayu)',
    deity: 'Lord Vayu / Chandra (Moon)',
    icon: Wind,
    color: 'text-teal-400 border-teal-500/30 bg-teal-950/20',
    bestFor: ['Guest Bedrooms', 'Toilets & Septic Tanks (Outer rim)', 'Finished Goods Storage / Garage', 'Unmarried Daughters Bedroom'],
    avoid: ['Master Bedroom', 'Heavy Immovable RCC Vaults', 'Underground Water Tanks'],
    description: 'Dynamic kinetic zone of air and circulation. Promotes swift dispatch of goods, lively social hospitality, and balanced elimination.',
  },
  {
    name: 'North',
    sanskrit: 'Uttara (उत्तर)',
    element: 'Water & Magnetic Ether',
    deity: 'Lord Kubera / Mercury (Budha)',
    icon: Droplets,
    color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
    bestFor: ['Cash Counter / Accounts Desk', 'Home Office & Library', 'Main Entrance (Mukhya/Bhallat)', 'Green Plant Terraces & Water Fountains'],
    avoid: ['Heavy RCC Storage Warehouses', 'Septic Tanks directly in magnetic line', 'Kitchen'],
    description: 'Governed by Kubera, the custodian of cosmic wealth and opportunities. Keeping North open and clean triggers relentless professional growth and financial inflow.',
  },
  {
    name: 'Center',
    sanskrit: 'Brahmasthan (ब्रह्मस्थान)',
    element: 'Cosmic Space (Akasha)',
    deity: 'Lord Brahma (Creator)',
    icon: Sparkles,
    color: 'text-gold border-gold/40 bg-gold/10',
    bestFor: ['Open Courtyard / Light Well', 'Spacious Central Living Hall', 'Atrium & Skylights', 'Soft Ambient Lighting'],
    avoid: ['RCC Columns & Load-bearing Walls', 'Staircases', 'Toilets', 'Kitchens & Cooking Hobs'],
    description: 'The pulsating heart and lungs of the home. Must remain light, open, and structurally unencumbered to permit cosmic energy circulation throughout all rooms.',
  },
];

const VASTU_SERVICES = [
  {
    icon: Ruler,
    title: 'Pre-Purchase Plot & Soil Direction Audit',
    desc: 'Before purchasing land, our civil & Vastu experts inspect true geographic magnetic orientation, road approaches (Vidisha plots), slope grades, and surrounding environmental influences to ensure a defect-free foundation.',
    features: ['Accurate 360° digital magnetic compass survey', 'Road approach & T-junction (Veedhi Shula) risk audit', 'Soil fertility, compaction & water table check', 'Plot shape correction (Shermukhi vs Gaumukhi)'],
  },
  {
    icon: Building2,
    title: 'Vastu-Compliant 2D Architectural CAD Plans',
    desc: 'We draft complete municipal-ready architectural floor plans utilizing the classical 32-Pada Vastu Purusha Mandala system without sacrificing contemporary space ergonomics or luxury room aesthetics.',
    features: ['Exact Pada calculations for main entrance gates', 'Optimized Master Bedroom, Kitchen & Pooja zoning', 'Zero-conflict plumbing & electrical shaft allocation', '100% compliant with local municipal bylaws'],
  },
  {
    icon: Layers,
    title: 'Structural Column & Beam Grid Alignment',
    desc: 'Civil engineering structural drawings calculated to ensure heavy RCC columns and shear beams never puncture the sensitive Brahmasthan (central core) or sacred cosmic energy lines (Marmasthanas).',
    features: ['Marmasthana protection in structural CAD grids', 'Clockwise heavy staircase orientation', 'Overhead & underground sump structural mass balancing', 'Earthquake-resistant safe load distribution'],
  },
  {
    icon: ShieldCheck,
    title: 'Non-Destructive Vastu Remedies for Existing Homes',
    desc: 'For already constructed homes, apartments, or corporate offices experiencing Vastu imbalances, we implement scientific non-invasive corrections without breaking walls or damaging your property.',
    features: ['Copper, brass & lead elemental energy partition strips', 'Vedic directional pyramids & cosmic helix energizers', 'Elemental chromatic wall paint corrections', 'Mirror and crystal energy deflection techniques'],
  },
];

const FAQS = [
  {
    q: 'Can modern luxury architecture coexist with 100% Vastu Shastra?',
    a: 'Absolutely. Traditional Vastu Shastra was fundamentally designed as ancient climatic and magnetic civil engineering. At Global Infraspace, our certified architects harmonize Vedic principles (like daylight orientation in the East, thermal mass in the South-West, and wind ventilation from the North-West) with ultra-modern open-plan luxury aesthetics.',
  },
  {
    q: 'Is a South-facing plot considered inauspicious?',
    a: 'No, this is a widespread myth. Classical texts state that South-facing plots can be remarkably prosperous when the main entrance is pinpointed precisely on Pada 3 (Vithatha) or Pada 4 (Grihaksht). Many of the world’s most successful industrialists and commercial offices operate on correctly energized South-facing properties.',
  },
  {
    q: 'What is the Brahmasthan, and why is it so critical in floor layouts?',
    a: 'The Brahmasthan is the central 1/9th core of the building plan, representing the element of Space (Akasha). In architectural terms, placing heavy structural columns, toilets, or staircases in the center blocks cross-ventilation, daylight penetration, and cosmic energy circulation, creating chronic stress for occupants.',
  },
  {
    q: 'What if our constructed home already has Vastu defects? Must we demolish walls?',
    a: 'Not at all. Over 85% of architectural Vastu defects in built apartments and villas can be corrected through non-destructive civil remedies — such as installing elemental metal energy strips (brass, copper, zinc) under flooring joints, repositioning activity zones, and elemental color therapy.',
  },
];

export default function VastuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen bg-background text-white selection:bg-gold/30">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-border bg-[#0B0C0E] py-20 lg:py-28">
        <div 
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #C9A24D 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-surface/90 text-gold text-xs font-semibold uppercase tracking-[0.18em]">
              <Compass className="h-4 w-4 animate-spin-slow" />
              <span>Vedic Architecture &amp; Scientific Directional Planning</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Vastu Shastra Architectural Planning &amp; Design
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Harmonizing the classical Vedic <strong className="text-white">Vastu Purusha Mandala</strong> with modern structural civil engineering. We design homes and commercial complexes that channel natural solar light, geomagnetic forces, and cosmic elemental harmony — without compromising on luxury aesthetics.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#calculator" className="btn-base btn-gold flex items-center gap-2">
                <Sparkles size={16} /> Calculate Your Plot Vastu
              </a>
              <Link to="/book-consultation" className="btn-base btn-outline">
                Book Vastu Consultation
              </Link>
              <a
                href={buildWhatsAppLink(
                  `Hello Global Infraspace, I would like to consult with your Vastu Shastra architectural team regarding my plot floor plan.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base bg-[#25D366] text-black font-semibold hover:bg-[#20bd5a] flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl text-gold font-medium">32 Pada</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Entrance Precision Grid</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold font-medium">100%</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Vedic &amp; CAD Integration</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold font-medium">Non-Invasive</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Remedies for Built Homes</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold font-medium">Free</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Initial Orientation Audit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SCIENTIFIC PRINCIPLES SECTION ── */}
      <section className="py-20 border-b border-border bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">The Science Behind The Tradition</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white">
              Why Vastu Shastra Works: Solar, Magnetic &amp; Elemental Physics
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Vastu Shastra is not superstition; it is India&apos;s oldest architectural science governing thermal comfort, natural daylight orientation, cross-ventilation dynamics, and Earth&apos;s geomagnetic lines.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-[#0E0F12] border border-border">
              <Sun className="h-8 w-8 text-amber-400 mb-4" />
              <h3 className="font-serif text-xl text-white">Solar Thermal Gradient</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Sun rises in the East emitting beneficial UV rays for breakfast and prayer rooms, whilst afternoon infrared radiation hits the thick South-West walls where heavy storage and master bedrooms shield the home.
              </p>
            </div>

            <div className="p-6 bg-[#0E0F12] border border-border">
              <Compass className="h-8 w-8 text-sky-400 mb-4" />
              <h3 className="font-serif text-xl text-white">Earth’s Magnetic Axis</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Earth behaves as a massive magnet with poles aligned North-South. Human blood contains magnetic iron hemoglobin; sleeping with head toward South aligns harmoniously with Earth&apos;s polarity for deep sleep.
              </p>
            </div>

            <div className="p-6 bg-[#0E0F12] border border-border">
              <Wind className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="font-serif text-xl text-white">Wind &amp; Pressure Dynamics</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                In the Indian subcontinent, prevailing breezes originate from the South-West and North-West. Sizing windows and courtyards according to Vastu ensures continuous passive natural cooling.
              </p>
            </div>

            <div className="p-6 bg-[#0E0F12] border border-border">
              <Sparkles className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-white">Pancha Mahabhutas</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Balancing the 5 universal building blocks — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akasha) — guarantees that every functional zone thrives without energetic clashes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 9-ZONE VASTU PURUSHA MANDALA GUIDE ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-border">
            <div>
              <span className="eyebrow">Cosmic Energy Grid Matrix</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
                The 9 Directional Cosmic Zones
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
                Explore the Vastu Purusha Mandala directional roadmap used by our senior architects to locate each room with pinpoint precision.
              </p>
            </div>
            <a href="#calculator" className="btn-base btn-gold shrink-0">
              Test In Calculator Below ↓
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ZONES.map((zone, idx) => {
              const Icon = zone.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 sm:p-8 border transition-all duration-300 hover:border-gold/50 flex flex-col justify-between ${zone.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-xs uppercase tracking-[0.16em] font-semibold text-gold">
                          {zone.sanskrit}
                        </span>
                        <h3 className="font-serif text-2xl text-white mt-1">
                          {zone.name}
                        </h3>
                      </div>
                      <div className="p-2.5 rounded-full bg-surface/80 border border-white/10 shrink-0">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-xs text-neutral-300">
                      <span><strong>Element:</strong> {zone.element}</span>
                      <span>•</span>
                      <span><strong>Deity:</strong> {zone.deity}</span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-300">
                      {zone.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-wider font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 size={12} /> Best Recommended For:
                        </p>
                        <ul className="space-y-1">
                          {zone.bestFor.map((item, i) => (
                            <li key={i} className="text-xs text-neutral-200 flex items-start gap-1.5">
                              <span className="text-emerald-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[0.68rem] uppercase tracking-wider font-semibold text-rose-400 mb-2 flex items-center gap-1.5">
                          <ShieldCheck size={12} /> Strictly Avoid:
                        </p>
                        <ul className="space-y-1">
                          {zone.avoid.map((item, i) => (
                            <li key={i} className="text-xs text-neutral-400 flex items-start gap-1.5">
                              <span className="text-rose-400 mt-0.5">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. EMBEDDED INTERACTIVE VASTU CALCULATOR ── */}
      <div id="calculator">
        <VastuCalculator />
      </div>

      {/* ── 5. SERVICES DELIVERABLES ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Professional Deliverables</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
              Comprehensive Vastu Architectural Services
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              We bridge the gap between ancient scriptures and certified civil drafting. Here is what you receive when engaging Global Infraspace for your Vastu project.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {VASTU_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 bg-[#0E0F12] border border-border hover:border-gold/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-surface border border-gold/30 text-gold">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-serif text-2xl text-white">{srv.title}</h3>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {srv.desc}
                    </p>

                    <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-neutral-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <Link
                      to="/book-consultation"
                      className="text-xs uppercase tracking-[0.16em] font-semibold text-gold hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      Book This Service <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`tel:${CONTACT.phoneHref}`}
                      className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1"
                    >
                      <Phone size={12} /> {CONTACT.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. 5-STEP WORKFLOW ── */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Proven Methodology</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white">
              Our 5-Step Architectural Vastu Process
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              From compass survey to CAD blueprints and turnkey execution.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: '01', title: 'True Compass Audit', desc: 'Precision degree reading establishing true geographical North vs magnetic declination.' },
              { step: '02', title: 'Mandala Superimposition', desc: '9x9 Vastu Purusha 81-pada grid mapped over your exact plot boundary and road axis.' },
              { step: '03', title: '2D CAD Floor Plans', desc: 'Room-by-room architectural floor drawings aligning functional living with sacred zones.' },
              { step: '04', title: 'Structural Protection', desc: 'Ensuring structural RCC columns and beams do not penetrate the Brahmasthan or Marmas.' },
              { step: '05', title: 'Turnkey Construction', desc: 'Supervised on-site construction ensuring zero accidental deviations during physical execution.' },
            ].map((st, i) => (
              <div key={i} className="p-6 bg-surface border border-border relative">
                <span className="font-serif text-3xl text-gold/60 font-semibold">{st.step}</span>
                <h4 className="mt-4 font-serif text-lg text-white">{st.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ACCORDION ── */}
      <section className="py-20 border-b border-border bg-surface">
        <div className="container-wide max-w-4xl">
          <div className="text-center">
            <span className="eyebrow">Clear Answers</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white">
              Frequently Asked Vastu Questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Addressing common homeowner dilemmas with clear architectural answers.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-border bg-[#0E0F12] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-white hover:text-gold transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl font-medium pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. BOTTOM HERO CTA ── */}
      <section className="py-20 bg-gradient-to-b from-[#0E0F12] to-background">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Ready to Plan Your Vastu-Compliant Dream Home?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Speak directly with our principal civil architect and Vastu consultant. We evaluate your plot drawings and deliver customized 2D and 3D architectural plans.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/book-consultation" className="btn-base btn-gold">
              Book Consultation
            </Link>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="btn-base btn-outline flex items-center gap-2"
            >
              <Phone size={14} className="text-gold" />
              Call {CONTACT.phone}
            </a>
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I want to book a Vastu consultation for my house construction.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base bg-[#25D366] text-black font-semibold hover:bg-[#20bd5a]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
