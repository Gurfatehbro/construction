import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-wide grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <div className="reveal">
          <span className="rule-gold" />
          <h2 className="mt-8 font-serif text-3xl leading-tight sm:text-4xl text-white">
            A single team for design, construction and interiors
          </h2>
        </div>

        {/* Right Column */}
        <div className="reveal space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Global Infraspace works with homeowners, businesses and property owners who want one accountable partner instead of a chain of separate contractors. We plan the space, visualise it in 3D, build the structure and finish the interiors.
          </p>
          <p>
            Our work spans new residential and commercial construction, complete interiors, swimming pools, home theaters, waterproofing, remodeling and structural repair — along with independent civil engineering advice when you simply need a clear answer before committing money.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold hover:text-white transition-colors"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
