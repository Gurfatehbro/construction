import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, buildWhatsAppLink } from '@/data/content';
import { MapPin } from 'lucide-react';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', '3D Design', 'Construction', 'Interiors', 'Swimming Pool', 'Home Theater', 'Commercial'];

  const items = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Visualisation &amp; Design References</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Capability Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            These are design and visualisation references that show the standard we work to. Photographs of completed Global Infraspace projects are shared directly during consultation.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border bg-[#0E0F12] py-3 sticky top-20 z-30">
        <div className="container-wide flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-[0.68rem] uppercase tracking-[0.14em] transition-colors whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-gold text-black font-semibold'
                  : 'bg-surface text-muted-foreground hover:text-white border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden border border-border bg-surface"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-surface">
                  <span className="text-[0.65rem] uppercase tracking-[0.16em] text-gold">{item.category}</span>
                  <h3 className="font-serif text-xl text-white mt-1 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-[0.7rem] text-muted-foreground">
                    <MapPin size={12} className="text-gold" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I would like to book a consultation for my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-gold"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
