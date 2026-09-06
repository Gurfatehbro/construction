import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, IMAGES, buildWhatsAppLink } from '@/data/content';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Selected Architectural &amp; Civil Projects
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A portfolio of private residences, commercial developments, and luxury interiors completed with meticulous engineering execution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-wide grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-surface border border-border overflow-hidden hover:border-gold/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-gold font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl text-white mt-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin size={12} className="text-gold" /> {item.location}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Completed Project</span>
                  <a
                    href={buildWhatsAppLink(`Hello Global Infraspace, I am interested in learning more about your project: ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-white uppercase tracking-wider flex items-center gap-1"
                  >
                    Inquire <ArrowRight size={12} />
                  </a>
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
          <a
            href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation for my upcoming project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-gold"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
