import { Link } from 'react-router-dom';
import { CONTACT, buildWhatsAppLink } from '@/data/content';

export default function TestimonialCTA() {
  return (
    <>
      {/* Section: Client Feedback */}
      <section className="border-b border-border bg-background">
        <div className="container-wide grid gap-10 py-20 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Client feedback</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl text-white">
              Reviews are published only when they are real
            </h2>
          </div>

          <div className="reveal text-base leading-relaxed text-muted-foreground">
            <p>
              We do not publish invented testimonials, statistics or awards. Verified client reviews will appear here and on our Google Business Profile as they are received.
            </p>
            <p className="mt-4">
              If you have worked with Global Infraspace, we would be glad to have your honest feedback on Google.
            </p>
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I have worked with you and would like to share feedback.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline mt-8 hover:border-gold hover:text-gold inline-block"
            >
              Share feedback
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
              <Link
                to="/book-consultation"
                className="btn-base btn-gold hover:btn-gold-hover"
              >
                Book a Consultation
              </Link>
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
