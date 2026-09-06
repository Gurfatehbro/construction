import { Link } from 'react-router-dom';
import { CONTACT, buildWhatsAppLink } from '@/data/content';

export default function TestimonialCTA() {
  return (
    <>
      {/* Section: Awards & Recognition */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div className="reveal">
            <p className="eyebrow">Award &amp; Recognition</p>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
              Recognized for Excellence &amp; Client Trust
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Global Infraspace is honored as a <strong className="text-gold font-medium">Justdial Users' Choice 2026</strong> verified 5-star recipient for architectural design, turnkey construction, and luxury interior execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 p-4 bg-surface border border-border">
              <div className="flex text-gold text-xl tracking-widest">
                ★★★★★
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-neutral-300 font-semibold border-l border-border pl-4">
                Users' Choice 2026 · Justdial Verified
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I noticed your Justdial Users' Choice recognition and would like to book a consultation for my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold"
              >
                Book Consultation
              </a>
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I noticed your Justdial Users' Choice recognition and would like to discuss my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline hover:border-gold hover:text-gold"
              >
                Discuss on WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal flex justify-center">
            <a
              href={CONTACT.justdial}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Justdial Users' Choice 2026 verification for Global Infraspace"
              className="block relative group max-w-md w-full overflow-hidden border border-gold/30 bg-[#121316] p-3 shadow-2xl shadow-black/60 transition-all hover:border-gold hover:shadow-gold/10"
            >
              <img
                src="/images/justdial-award.png"
                alt="Global Infraspace - Justdial Users' Choice 2026 Award"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pt-3 pb-1 text-center">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gold font-semibold group-hover:underline flex items-center justify-center gap-1.5">
                  Official Justdial Users' Choice 2026 Certificate ↗
                </p>
                <span className="text-[0.65rem] text-muted-foreground group-hover:text-gold transition-colors">
                  Click to view verified profile on Justdial
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Planning a project? Let's talk. */}
      <section className="border-y border-border bg-surface">
        <div className="container-wide py-20">
          <div className="reveal">
            <span className="rule-gold" />
            <h2 className="mt-8 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
              Planning a project? Let's talk.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Book a consultation at our Gandhi Maidan office or on your site. Bring your plot papers, plans or reference images and we will give you a clear direction, timeline and cost range.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation for my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold hover:btn-gold-hover"
              >
                Book Consultation
              </a>
              <a
                href={buildWhatsAppLink("Hello Global Infraspace, I would like to discuss a project with you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline hover:border-gold hover:text-gold"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="btn-base btn-outline hover:border-gold hover:text-gold"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
