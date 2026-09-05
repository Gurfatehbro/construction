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
          <p className="eyebrow">Design &amp; Engineering Pricing</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
            Architectural &amp; Structural Design Packages
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Clear, transparent rates per square foot (₹10, ₹15, ₹30) for architectural planning, 3D front elevations, plumbing, electrical, and structural reinforcement drawings in Patna.
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
