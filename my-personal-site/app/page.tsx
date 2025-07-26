import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
