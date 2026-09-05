import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import TestimonialCTA from '@/components/TestimonialCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <TestimonialCTA />
    </>
  );
}
