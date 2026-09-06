import { Link } from 'react-router-dom';
import { Building, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT, IMAGES, buildWhatsAppLink } from '@/data/content';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Page Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">About Global Infraspace</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Designing Spaces. Building Futures.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A premier construction, interior design and 3D architectural design company delivering homes, commercial spaces, pools and specialised interiors.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="border-b border-border py-20">
        <div className="container-wide grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <span className="rule-gold" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl text-white leading-tight">
              A single, accountable partner instead of a chain of separate vendors
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Global Infraspace was founded to eliminate the persistent disconnect between architectural designers, civil contractors, and interior craftsmen. Homeowners and developers often face delays, cost overruns, and compromised quality because each trade works in silos.
              </p>
              <p>
                We bring complete end-to-end delivery under one management standard. We plan your layout, render it in photorealistic 3D, build the reinforced concrete structure, and execute the bespoke interior finishes with full on-site civil engineering supervision.
              </p>
              <p>
                Whether building a luxury villa from the ground up, outfitting a corporate office, constructing a private swimming pool, or designing an acoustic home theater, our clients deal with one team, one contract, and one benchmark of excellence.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation with your architectural team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold"
              >
                Book Consultation
              </a>
              <Link to="/services" className="btn-base btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-border bg-surface">
              <img
                src={IMAGES.serviceConstruction}
                alt="Global Infraspace construction site supervision"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 p-6 bg-surface border border-border">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Head Office</span>
              <p className="mt-2 text-sm text-neutral-300">
                3rd Floor, The Hub, Near Regent Cinema, Gandhi Maidan – 800001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="border-b border-border bg-surface py-20">
        <div className="container-wide">
          <p className="eyebrow">Our Methodology</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-white">How we execute projects</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 bg-background border border-border">
              <span className="text-xs tracking-[0.3em] text-gold font-medium">01</span>
              <h3 className="font-serif text-2xl text-white mt-4">3D Pre-Visualisation</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Settle all proportions, materials, lighting schemes, and elevations in photoreal 3D on screen before any procurement begins.
              </p>
            </div>

            <div className="p-8 bg-background border border-border">
              <span className="text-xs tracking-[0.3em] text-gold font-medium">02</span>
              <h3 className="font-serif text-2xl text-white mt-4">Transparent BOQ &amp; Specs</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every quotation names exact material grades (TMT steel, cement, waterproofing chemicals) and transparent payment milestones.
              </p>
            </div>

            <div className="p-8 bg-background border border-border">
              <span className="text-xs tracking-[0.3em] text-gold font-medium">03</span>
              <h3 className="font-serif text-2xl text-white mt-4">Direct Site Supervision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our site engineers conduct daily in-person inspections to guarantee structural integrity and finish quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Certification */}
      <section className="border-b border-border bg-background py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="relative group max-w-md w-full overflow-hidden border border-gold/40 bg-[#121316] p-3 shadow-2xl">
              <img
                src="/images/justdial-award.png"
                alt="Justdial Users' Choice 2026 - Global Infraspace"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pt-3 pb-1 text-center">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  Official Justdial Users' Choice 2026 Award
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="rule-gold" />
            <p className="eyebrow mt-6">Industry Recognition</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white leading-tight">
              Honored as Justdial Users' Choice 2026
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Recognized for high standards of structural engineering, architectural precision, and transparent turnkey execution. We are proud to hold 5-star client satisfaction across our design, construction, and interior portfolio.
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 bg-surface border border-border">
              <span className="text-gold text-2xl tracking-widest">★★★★★</span>
              <span className="text-xs uppercase tracking-[0.16em] text-neutral-300 font-medium border-l border-border pl-4">
                Verified 5-Star Customer Rating
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation with your architectural team.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold"
              >
                Book Consultation
              </a>
              <Link to="/projects" className="btn-base btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
