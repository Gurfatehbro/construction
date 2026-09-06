import Packages from '@/components/Packages';
import { Phone } from 'lucide-react';
import { CONTACT, buildWhatsAppLink } from '@/data/content';

export default function PackagesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Turnkey &amp; Design Pricing</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Construction &amp; Architectural Packages
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Transparent sq.ft pricing for residential and commercial building construction, and complete architectural planning packages with verified material specifications.
          </p>
        </div>
      </section>

      {/* Packages Component */}
      <Packages />

      {/* Help Section */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">Need a customized scope or commercial estimate?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Talk directly with our principal civil engineering consultants.</p>
          </div>
          <div className="flex gap-4">
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation regarding your Construction Packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-gold"
            >
              Book Consultation
            </a>
            <a href={`tel:${CONTACT.phoneHref}`} className="btn-base btn-outline">
              <Phone size={14} className="mr-2" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
