import { Link } from 'react-router-dom';
import { IMAGES } from '@/data/content';

export default function Projects() {
  const items = [
    {
      title: '3D Architectural Design',
      image: IMAGES.service3D,
      alt: '3D architectural visualisation of a modern residence displayed beside technical drawings',
    },
    {
      title: 'Building Construction',
      image: IMAGES.serviceConstruction,
      alt: 'Reinforced concrete frame of a multi-storey building under construction with site engineers',
    },
    {
      title: 'Interior Design',
      image: IMAGES.serviceInterior,
      alt: 'Contemporary living room interior with charcoal walls, wooden flooring and warm accent lighting',
    },
    {
      title: 'Swimming Pool Construction',
      image: IMAGES.servicePool,
      alt: 'Modern residential swimming pool with dark stone coping and underwater lighting at dusk',
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="container-wide py-24">
        <div className="reveal">
          <p className="eyebrow">Capability views</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
            The kind of spaces we design and build
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are design and visualisation references that show the standard we work to. Photographs of completed Global Infraspace projects are shared directly during consultation.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="reveal">
              <Link
                to="/gallery"
                className="group relative block aspect-[3/4] overflow-hidden bg-background"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-background/85 px-4 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                  {item.title}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/gallery"
            className="btn-base btn-outline hover:border-gold hover:text-gold inline-block"
          >
            View gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
