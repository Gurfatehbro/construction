import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { CONTACT, buildWhatsAppLink } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Construction, interiors, 3D architectural design and specialised building solutions delivering quality homes and commercial spaces.
          </p>
        </div>

        {/* Col 2: Services */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-foreground">Services</h3>
          <ul className="mt-6 space-y-3">
            <li>
              <Link to="/services/3d-architectural-design" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                3D Architectural Design
              </Link>
            </li>
            <li>
              <Link to="/services/building-construction" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Building Construction
              </Link>
            </li>
            <li>
              <Link to="/services/interior-design" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Interior Design
              </Link>
            </li>
            <li>
              <Link to="/services/swimming-pool-construction" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Swimming Pool Construction
              </Link>
            </li>
            <li>
              <Link to="/services/home-theater-interiors" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Home Theater Interiors
              </Link>
            </li>
            <li>
              <Link to="/services/false-ceiling" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                False Ceiling
              </Link>
            </li>
            <li>
              <Link to="/services/painting" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Painting
              </Link>
            </li>
            <li>
              <Link to="/services/plumbing" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Plumbing
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sm text-gold hover:underline font-medium">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-foreground">Company</h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gold">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gold">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-gold text-gold font-medium">
                Design Packages
              </Link>
            </li>
            <li>
              <Link to="/book-consultation" className="hover:text-gold">
                Book a Consultation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gold">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-foreground">Contact</h3>
          <address className="mt-6 space-y-4 text-sm not-italic text-muted-foreground">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT.office}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-gold text-white font-medium">
                {CONTACT.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </p>
          </address>

          <a
            href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline mt-6 hover:border-gold hover:text-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} GLOBAL INFRASPACE. All rights reserved.</p>
          <p>Designing Spaces. Building Futures.</p>
        </div>
      </div>
    </footer>
  );
}
