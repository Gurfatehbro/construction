import { useParams, Link } from 'react-router-dom';
import { ALL_SERVICES, CONTACT, buildWhatsAppLink } from '@/data/content';
import { ArrowLeft, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = ALL_SERVICES.find((s) => s.slug === slug) || ALL_SERVICES[0];

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Breadcrumb & Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold hover:text-white mb-6"
          >
            <ArrowLeft size={14} /> Back to All Services
          </Link>
          <span className="eyebrow block">{service.category}</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="py-20">
        <div className="container-wide grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="aspect-[16/9] overflow-hidden border border-border bg-black mb-10">
              <img
                src={service.image}
                alt={service.title}
                onError={(e) => {
                  e.currentTarget.src = '/images/architectural-elevation.jpg';
                }}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="font-serif text-3xl text-white">Overview &amp; Deliverables</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{service.fullDetails}</p>
              <p>
                All works executed under Global Infraspace follow Indian Standard (IS) codes, verified material brands, and daily quality checklists supervised by senior site engineers.
              </p>
            </div>

            <h3 className="font-serif text-2xl text-white mt-12 mb-6">Key Specifications</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-surface border border-border">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="space-y-8">
            <div className="bg-surface border border-border p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Ready to Discuss?</span>
              <h3 className="font-serif text-2xl text-white mt-2">Book Consultation for {service.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Meet our design &amp; engineering team at our Gandhi Maidan office or arrange a site visit for plot assessment.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  to="/book-consultation"
                  className="w-full btn-base btn-gold text-center block"
                >
                  Book Consultation
                </Link>
                <a
                  href={buildWhatsAppLink(`Hello Global Infraspace, I would like to consult on ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-base btn-outline text-center block"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>3rd Floor, The Hub, Gandhi Maidan – 800001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>Call: <a href={`tel:${CONTACT.phoneHref}`} className="text-white hover:text-gold">{CONTACT.phone}</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
