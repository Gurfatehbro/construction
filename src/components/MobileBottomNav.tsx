import { NavLink } from 'react-router-dom';
import { Home, Layers, MessageCircle, Building2, Phone } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/content';

export default function MobileBottomNav() {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#0B0C0E]/95 backdrop-blur-xl border-t border-[#222226] px-4 py-2"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center justify-around relative max-w-md mx-auto">
        {/* 1. Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-1 px-2 transition-colors ${
              isActive ? 'text-gold' : 'text-muted-foreground hover:text-white'
            }`
          }
        >
          <Home size={19} />
          <span className="text-[0.62rem] uppercase tracking-wider font-medium">Home</span>
        </NavLink>

        {/* 2. Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-1 px-2 transition-colors ${
              isActive ? 'text-gold' : 'text-muted-foreground hover:text-white'
            }`
          }
        >
          <Layers size={19} />
          <span className="text-[0.62rem] uppercase tracking-wider font-medium">Services</span>
        </NavLink>

        {/* 3. CENTER: WhatsApp Button */}
        <div className="relative -top-4 flex flex-col items-center">
          <a
            href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Global Infraspace on WhatsApp"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-[#0B0C0E] border-4 border-[#0B0C0E] shadow-[0_4px_24px_rgba(201,162,77,0.55)] transition-all active:scale-90 hover:scale-105"
          >
            <MessageCircle size={26} className="fill-[#0B0C0E] stroke-[#0B0C0E]" />
            {/* Pulse effect */}
            <span className="absolute inset-0 -z-10 rounded-full bg-gold animate-pulse-ring opacity-75" />
          </a>
          <span className="mt-1 text-[0.62rem] uppercase tracking-wider font-semibold text-gold">
            WhatsApp
          </span>
        </div>

        {/* 4. Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-1 px-2 transition-colors ${
              isActive ? 'text-gold' : 'text-muted-foreground hover:text-white'
            }`
          }
        >
          <Building2 size={19} />
          <span className="text-[0.62rem] uppercase tracking-wider font-medium">Projects</span>
        </NavLink>

        {/* 5. Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-1 px-2 transition-colors ${
              isActive ? 'text-gold' : 'text-muted-foreground hover:text-white'
            }`
          }
        >
          <Phone size={19} />
          <span className="text-[0.62rem] uppercase tracking-wider font-medium">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}
