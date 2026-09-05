import Packages from '@/components/Packages';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/data/content';

export default function PackagesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <p className="eyebrow">Turnkey Construction &amp; Design Pricing</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
            Construction &amp; Architectural Packages
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Transparent per-sq.ft rates for turnkey building construction (Silver ₹1,800, Gold ₹2,000, Platinum ₹2,300) and architectural planning (₹10, ₹15, ₹30) with certified branded materials and on-site engineering.
          </p>
        </div>
      </section>

      {/* Pricing Cards Component */}
      <Packages />

      {/* Help Section */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">Need a customized scope or commercial estimate?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Talk directly with our principal civil engineering consultants.</p>
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
