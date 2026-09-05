import { useState } from 'react';
import { Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { ALL_SERVICES, CONTACT, buildWhatsAppLink, buildConsultationMessage } from '@/data/content';

export default function BookConsultationPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(ALL_SERVICES[0].title);
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildConsultationMessage({
      name,
      phone,
      discipline: service,
      location,
      notes,
    });
    window.open(buildWhatsAppLink(msg), '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Direct Consultation</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Book a Project Consultation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Schedule a meeting at our Gandhi Maidan office in Patna or arrange an on-site visit for your residential or commercial project.
          </p>
        </div>
      </section>

      {/* Booking Form & Info */}
      <section className="py-20">
        <div className="container-wide grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <div className="bg-surface border border-border p-8 sm:p-12">
            <h2 className="font-serif text-3xl text-white mb-2">Project Details</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form below and we will open a direct WhatsApp discussion with our engineering team:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  >
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Plot / Site Location in Patna
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Gandhi Maidan, Boring Road"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Project Scope &amp; Notes
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your plot size, floors planned, interior requirements, or estimated timeline..."
                  className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-base btn-gold flex items-center justify-center gap-2 py-4"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} /> Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Submit &amp; Open WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Office & Guidance info */}
          <div className="space-y-8">
            <div className="bg-surface border border-border p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">What to Bring</span>
              <h3 className="font-serif text-2xl text-white mt-2">To Your Consultation</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Plot dimensions, registry paper copies or digital land map</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Existing architectural floor plans (if any)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Inspiration images / aesthetic preference references</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface border border-border p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Patna Office</span>
              <h3 className="font-serif text-2xl text-white mt-2">Visit in Person</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-neutral-200">{CONTACT.office}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>Call: <a href={`tel:${CONTACT.phoneHref}`} className="text-white hover:text-gold font-medium">{CONTACT.phone}</a></span>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="https://maps.google.com/?q=Gandhi+Maidan+Patna+Bihar+800001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline w-full text-center block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
