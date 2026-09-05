import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, IMAGES } from '@/data/content';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Portfolio &amp; Executions</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Selected Works &amp; Architectural Projects
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A showcase of modern residential villas, commercial structures, luxury interior spaces, swimming pools and acoustic home theaters.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-wide grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-surface border border-border overflow-hidden transition-all hover:border-gold/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/building-construction.jpg';
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-background/85 border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                  <MapPin size={13} className="text-gold" />
                  <span>{item.location}</span>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold hover:text-white"
                  >
                    Discuss Similar Project <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">Have a specific design or plot in mind?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Let's review your floor plan, plot size, and aesthetic direction.</p>
          </div>
          <Link to="/book-consultation" className="btn-base btn-gold">
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
