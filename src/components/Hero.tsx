import { Link } from 'react-router-dom';
import { IMAGES } from '@/data/content';

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

      <div className="container-wide relative pb-24 pt-40 z-10">
        <div className="reveal is-visible">
          <p className="eyebrow">Architecture · Construction · Interiors</p>

          <h1 className="mt-6 max-w-4xl text-[2.6rem] font-serif leading-[1.05] sm:text-6xl lg:text-7xl uppercase tracking-tight text-white">
            DESIGNING SPACES.
            <br />
            <span className="text-gold">BUILDING FUTURES.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From architectural visualization and construction to interiors and specialized spaces, Global Infraspace delivers complete solutions built around quality, precision and your vision.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/book-consultation"
              className="btn-base btn-gold"
            >
              Book a Consultation
            </Link>
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
