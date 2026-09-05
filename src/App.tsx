import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileBottomNav from '@/components/MobileBottomNav';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ProjectsPage from '@/pages/ProjectsPage';
import GalleryPage from '@/pages/GalleryPage';
import BlogPage from '@/pages/BlogPage';
import BookConsultationPage from '@/pages/BookConsultationPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

export default function App() {
  useScrollReveal();

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-background text-white selection:bg-gold/35 selection:text-white flex flex-col justify-between pb-20 lg:pb-0">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/book-consultation" element={<BookConsultationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
