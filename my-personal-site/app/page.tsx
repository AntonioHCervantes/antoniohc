import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Contact from '../components/Contact';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <ParallaxSection>
        <About />
      </ParallaxSection>
      <ParallaxSection speed={-5}>
        <Timeline />
      </ParallaxSection>
      <ParallaxSection speed={-7}>
        <Education />
      </ParallaxSection>
      <ParallaxSection speed={-10}>
        <Skills />
      </ParallaxSection>
      <ParallaxSection speed={-15}>
        <ProjectsSection />
      </ParallaxSection>
      <ParallaxSection speed={-20}>
        <Contact />
      </ParallaxSection>
    </main>
  );
}
