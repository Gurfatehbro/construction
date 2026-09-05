import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data/content';

const FEATURED_SERVICES = [
  {
    slug: '3d-architectural-design',
    title: '3D Architectural Design',
    desc: 'Photoreal 3D visualisation, elevations and walkthroughs so you can approve the design before a single brick is laid.',
    image: IMAGES.service3D,
    alt: '3D architectural visualisation of a modern residence displayed beside technical drawings',
  },
  {
    slug: 'building-construction',
    title: 'Building Construction',
    desc: 'End-to-end residential and commercial construction, from foundation and RCC to finishing and handover.',
    image: IMAGES.serviceConstruction,
    alt: 'Reinforced concrete frame of a multi-storey building under construction with site engineers',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    desc: 'Residential and commercial interiors — layout, joinery, lighting, finishes and execution under one team.',
    image: IMAGES.serviceInterior,
    alt: 'Contemporary living room interior with charcoal walls, wooden flooring and warm accent lighting',
  },
  {
    slug: 'swimming-pool-construction',
    title: 'Swimming Pool Construction',
    desc: 'Private and commercial swimming pools — structure, waterproofing, filtration, finishes and maintenance.',
    image: IMAGES.servicePool,
    alt: 'Modern residential swimming pool with dark stone coping and underwater lighting at dusk',
  },
  {
    slug: 'home-theater-interiors',
    title: 'Home Theater Interiors',
    desc: 'Acoustically treated theater and media rooms with seating, lighting and screen planning.',
    image: IMAGES.serviceTheater,
    alt: 'Private home theater room with acoustic wall panelling, tiered seating and cove lighting',
  },
];

export default function Services() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-wide py-24">
        <div className="reveal">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
            Services built around complete delivery
          </h2>
        </div>

        {/* 6 Grid items */}
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((item) => (
            <div key={item.slug} className="reveal">
              <Link
                to={`/services/${item.slug}`}
                className="group flex h-full flex-col bg-background transition-colors hover:bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-2xl text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          ))}

          {/* 6th Card: 18 services summary */}
          <div className="reveal">
            <div className="flex h-full flex-col justify-between bg-surface p-8">
              <div>
                <h3 className="font-serif text-2xl text-white">18 services in total</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Painting, false ceiling, plumbing, flooring, waterproofing, kitchen and bathroom remodeling, structural repairs, metal buildings, maintenance and civil engineering consultation.
                </p>
              </div>
              <Link
                to="/services"
                className="btn-base btn-gold mt-8 w-fit inline-block"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
