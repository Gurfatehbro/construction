import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '@/data/content';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const activeArticle = BLOG_ARTICLES.find((a) => a.id === activeArticleId);

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Insights &amp; Knowledge</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Construction &amp; Architectural Insights
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Clear, honest articles covering construction cost estimation in Patna, Bihar building bylaws, 3D visualization benefits, and civil engineering guides.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-wide max-w-4xl">
          {activeArticle ? (
            <div>
              <button
                onClick={() => setActiveArticleId(null)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold hover:text-white mb-8"
              >
                <ArrowLeft size={14} /> Back to All Articles
              </button>
              <div className="flex items-center gap-3 text-xs text-gold uppercase tracking-[0.16em] mb-3">
                <span className="font-semibold">{activeArticle.category}</span>
                <span>•</span>
                <span className="text-muted-foreground">{activeArticle.date}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="mt-8 pt-8 border-t border-border text-base sm:text-lg leading-relaxed text-neutral-300 space-y-6 whitespace-pre-line">
                {activeArticle.content}
              </div>

              <div className="mt-12 p-8 bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl text-white">Planning your project in Patna?</h3>
                  <p className="text-sm text-muted-foreground mt-1">Get an exact line-item material quotation and 3D architectural plan.</p>
                </div>
                <Link to="/book-consultation" className="btn-base btn-gold whitespace-nowrap">
                  Book Consultation
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {BLOG_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="p-8 bg-surface border border-border hover:border-gold/40 transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-gold uppercase tracking-[0.16em]">
                    <span className="font-semibold">{article.category}</span>
                    <span>•</span>
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>

                  <h2
                    onClick={() => setActiveArticleId(article.id)}
                    className="font-serif text-2xl sm:text-3xl text-white mt-3 hover:text-gold transition-colors cursor-pointer"
                  >
                    {article.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <button
                    onClick={() => setActiveArticleId(article.id)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:text-white"
                  >
                    Read Full Article <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
