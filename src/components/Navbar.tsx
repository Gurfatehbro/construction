import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { useScrolled } from '@/hooks/useScrollAnimation';
import { CONTACT } from '@/data/content';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#222226]' : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                    isActive ? 'text-gold' : 'text-muted-foreground'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white border border-gold/40 px-3.5 py-2 rounded-full bg-surface/90 hover:border-gold hover:text-gold transition-colors shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span>750-649-2611</span>
            </a>
            <Link
              to="/book-consultation"
              className="btn-base btn-gold"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Right Controls: Visible Phone Pill & Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wider text-gold border border-gold/40 px-2.5 py-1 rounded-full bg-surface/90 active:scale-95 transition-transform"
            >
              <Phone className="h-3 w-3 text-gold" />
              <span>750-649-2611</span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-1.5 text-foreground"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-[#141518] border-l border-[#222226] p-8 transition-transform duration-300 flex flex-col justify-between ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#222226]">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="text-white p-2">
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-left text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                      isActive ? 'text-gold font-semibold' : 'text-muted-foreground hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#222226]">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {CONTACT.phone}
            </a>
            <Link
              to="/book-consultation"
              onClick={() => setMenuOpen(false)}
              className="w-full btn-base btn-gold text-center block"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
