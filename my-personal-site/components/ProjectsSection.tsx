'use client';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ProjectCard from './ProjectCard';
import projects from './projectsData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-8">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1}
              className="transform transition-transform hover:scale-105"
            >
              <ProjectCard project={project} />
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
