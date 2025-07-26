import ProjectCard from './ProjectCard';
import projects from './projectsData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-8">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
