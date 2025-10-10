'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useProjectsSection } from './useProjectsSection';

export default function ProjectsSection() {
  const {
    state: { projects },
  } = useProjectsSection();

  return (
    <section
      id="projects"
      className="w-full bg-white/90 py-32 text-gray-900 backdrop-blur-sm dark:bg-background/90 dark:text-gray-100"
    >
      <h2 className="mb-16 text-center text-3xl font-semibold">
        <span className="after:mx-auto after:mt-3 after:block after:h-1 after:w-16 after:bg-primary">Proyectos</span>
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1} className="transform transition-transform hover:scale-105">
              <ProjectCard project={project} />
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
