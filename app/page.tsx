import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline';
import Education from '@/components/Education/Education';
import Skills from '@/components/Skills/Skills';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import Contact from '@/components/Contact/Contact';
import ParallaxSection from '@/components/ui/ParallaxSection/ParallaxSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-0">
      <Header />
      <Hero />
      <ParallaxSection>
        <About />
      </ParallaxSection>
      <ParallaxSection speed={-5}>
        <ExperienceTimeline />
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
