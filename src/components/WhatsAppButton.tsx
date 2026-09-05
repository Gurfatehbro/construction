import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/content';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Global Infraspace on WhatsApp"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-3 border border-gold bg-[#0B0C0E]/90 px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur transition-all duration-300 hover:bg-gold hover:text-[#0B0C0E] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
    >
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp</span>
    </a>
  );
}
