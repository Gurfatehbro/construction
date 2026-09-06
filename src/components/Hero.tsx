import { Link } from 'react-router-dom';
import { IMAGES, buildWhatsAppLink } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-20">
      {/* Background image */}
      <img
        src={IMAGES.heroBuilding}
        alt="Modern charcoal and glass building facade illuminated at dusk"
        width="1920"
        height="1280"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#C9A24D 1px, transparent 1px), linear-gradient(90deg, #C9A24D 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-wide relative z-10 pb-20 pt-32 sm:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow">
            Architecture • Engineering • Construction • Interiors
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Where vision takes structure
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From architectural visualization and construction to interiors and specialized spaces, Global Infraspace delivers complete solutions built around quality, precision and your vision.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation for my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-gold"
            >
              Book Consultation
            </a>
            <Link
              to="/services"
              className="btn-base btn-outline"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
