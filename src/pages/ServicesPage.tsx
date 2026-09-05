import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Phone } from 'lucide-react';
import { ALL_SERVICES, CONTACT, buildWhatsAppLink } from '@/data/content';
import VastuCalculator from '@/components/VastuCalculator';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Architecture & Visualisation',
    'Civil & Turnkey',
    'Interiors',
    'Specialised Construction',
    'MEP Services',
    'Finishing',
    'Civil & Engineering',
  ];

  const filtered = ALL_SERVICES.filter((s) => {
    const matchCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Complete Capabilities</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            42 Construction &amp; Interior Services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From 3D architectural elevations and turnkey building construction to luxury interiors, swimming pools, and independent engineering advice. 6 specialized services across every category.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="border-b border-border bg-[#0E0F12] py-4 sticky top-20 z-30">
        <div className="container-wide flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' ? ALL_SERVICES.length : ALL_SERVICES.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.14em] transition-colors ${
                    selectedCategory === cat
                      ? 'bg-gold text-black font-semibold'
                      : 'bg-surface text-muted-foreground hover:text-white border border-border'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 42 services..."
              className="w-full bg-surface border border-border pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-neutral-500 focus:border-gold focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col bg-surface border border-border transition-all hover:border-gold/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/architectural-elevation.jpg';
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-background/80 border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-gold backdrop-blur-sm">
                    {service.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h2 className="font-serif text-2xl text-white group-hover:text-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold hover:text-white transition-colors"
                    >
                      Service Details <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/book-consultation"
                      className="text-[0.7rem] text-muted-foreground hover:text-gold uppercase tracking-[0.14em]"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground text-base">
              No services found matching "{searchQuery}".
            </div>
          )}
        </div>
      </section>

      {/* Vastu Shastra Planning Tool */}
      <VastuCalculator />

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">Have a custom architectural or civil inquiry?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Speak directly with our principal civil engineering team.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/book-consultation" className="btn-base btn-gold">
              Book Consultation
            </Link>
            <a href={`tel:${CONTACT.phoneHref}`} className="btn-base btn-outline">
              <Phone size={14} className="mr-2" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
