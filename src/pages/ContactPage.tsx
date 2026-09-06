import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT, ALL_SERVICES, buildWhatsAppLink, buildConsultationMessage } from '@/data/content';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(ALL_SERVICES[0].title);
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

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
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Contact Global Infraspace
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Connect with our office at Gandhi Maidan or send your project inquiry for a fast, structured consultation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-wide grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <div className="bg-surface border border-border p-8 sm:p-12">
            <h2 className="font-serif text-3xl text-white mb-6">Send an Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Your Name *
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
                    placeholder="+91 ..."
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Service *
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
                    Site / Plot Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Area, Sector or City"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details about your space, timeline or questions..."
                  className="w-full bg-[#0B0C0E] border border-border px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-base btn-gold flex items-center justify-center gap-2 py-4 tracking-wider uppercase text-xs font-semibold"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Booking Consultation...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Book Consultation
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details Card */}
          <div className="space-y-8">
            <div className="bg-surface border border-border p-8 sm:p-10">
              <h2 className="font-serif text-3xl text-white mb-8">Office &amp; Contacts</h2>

              <div className="space-y-6 text-sm text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1 font-semibold">Head Office</span>
                    <span className="text-white leading-relaxed">{CONTACT.office}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1 font-semibold">Phone Support</span>
                    <a href={`tel:${CONTACT.phoneHref}`} className="text-white hover:text-gold transition-colors font-medium text-base">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1 font-semibold">Email</span>
                    <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-gold transition-colors text-base">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <a
                  href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-gold flex-1 text-center"
                >
                  WhatsApp Us
                </a>
                <a
                  href="https://maps.google.com/?q=Gandhi+Maidan+Patna+Bihar+800001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline flex-1 text-center"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
