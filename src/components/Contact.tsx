import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT, ALL_SERVICES, buildWhatsAppLink, buildConsultationMessage } from '@/data/content';

export default function Contact() {
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
    <section id="contact" className="border-b border-border bg-background">
      <div className="container-wide py-24">
        <div className="reveal mb-12">
          <p className="eyebrow">Direct inquiry</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
            Send an Enquiry or Visit Our Office
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Get an exact estimate, structural review, or 3D architectural plan for your residential or commercial project.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <div className="bg-surface border border-border p-8 sm:p-10">
            <h3 className="font-serif text-2xl text-white mb-6">Send Your Requirements</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 ..."
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  >
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    Site / Plot Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Area, Sector or City"
                    className="w-full bg-[#0B0C0E] border border-border px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details about your space, timeline or questions..."
                  className="w-full bg-[#0B0C0E] border border-border px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-base btn-gold flex items-center justify-center gap-2 py-4 tracking-wider uppercase text-xs font-semibold"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} /> Booking Consultation...
                  </>
                ) : (
                  <>
                    <Send size={14} /> Book Consultation
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="bg-surface border border-border p-8">
              <h3 className="font-serif text-2xl text-white mb-6">Contact Details</h3>

              <div className="space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1">Office Location</span>
                    <span className="text-white leading-relaxed">{CONTACT.office}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1">Phone Call</span>
                    <a href={`tel:${CONTACT.phoneHref}`} className="text-white hover:text-gold transition-colors font-medium">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-gold mb-1">Email</span>
                    <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-gold transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
                <a
                  href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
