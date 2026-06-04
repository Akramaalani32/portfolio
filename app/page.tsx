import Navbar    from '@/components/Navbar';
import Hero      from '@/components/Hero';
import TechTicker from '@/components/TechTicker';
import Projects  from '@/components/Projects';
import About     from '@/components/About';
import Contact   from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechTicker />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
