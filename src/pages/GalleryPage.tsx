import { useState } from 'react';
import { GALLERY_ITEMS, buildWhatsAppLink } from '@/data/content';
import { MapPin, X, ArrowRight, Maximize2, MessageCircle } from 'lucide-react';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['All', '3D Design', 'Floor Plans', 'Construction', 'Interiors', 'Swimming Pool', 'Home Theater', 'Commercial'];

  const items = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-background text-white selection:bg-gold/30">
      {/* Header */}
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="container-wide">
          <p className="eyebrow">Visualisation &amp; Project References</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Architectural &amp; Civil Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explore our latest 3D elevations, structural villa executions, luxury swimming pools, architectural CAD floor plans, and turnkey interior designs. Click on any image to view in high resolution and inquire directly.
          </p>
        </div>
      </section>

      {/* Tabs Filter Bar */}
      <section className="border-b border-border bg-[#0E0F12] py-3.5 sticky top-20 z-30">
        <div className="container-wide flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => {
            const count = cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-[0.68rem] uppercase tracking-[0.14em] transition-colors whitespace-nowrap rounded-sm ${
                  activeTab === cat
                    ? 'bg-gold text-black font-semibold'
                    : 'bg-surface text-muted-foreground hover:text-white border border-border'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="group relative overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-gold/50 flex flex-col justify-between"
              >
                {/* Image Container with Hover Overlay */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <span className="p-3 rounded-full bg-black/70 text-gold border border-gold/40 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={18} />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-background/85 border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-gold backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-white group-hover:text-gold transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                      <MapPin size={13} className="text-gold shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-neutral-300 hover:text-white uppercase tracking-wider font-medium flex items-center gap-1"
                    >
                      View Photo
                    </button>
                    <a
                      href={buildWhatsAppLink(`Hello Global Infraspace, I saw this design in your gallery: "${item.title}" (${item.category}). I would like to discuss a similar plan for my property.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold hover:text-white uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle size={13} />
                      <span>Inquire <ArrowRight size={12} /></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={buildWhatsAppLink("Hello Global Infraspace, I would like to book an architectural and civil consultation for my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-gold"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#121316] border border-gold/40 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:text-gold border border-white/20 transition-colors"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>

            {/* Enlarged Image */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 sm:p-8 bg-[#141518] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-gold font-semibold">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin size={13} className="text-gold" />
                  <span>{selectedItem.location}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={buildWhatsAppLink(`Hello Global Infraspace, I am inquiring about this project from your gallery: "${selectedItem.title}" (${selectedItem.category}). Please share more details and arrange a consultation.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
