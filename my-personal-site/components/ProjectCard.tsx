import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  cta?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/50 dark:bg-gray-800">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-grow flex-col p-6 text-gray-900 dark:text-gray-100">
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="flex-grow">{project.description}</p>
        {project.url && (
          <a
            href={project.url}
            className="mt-4 inline-block rounded bg-primary px-4 py-2 text-white transition-opacity hover:opacity-90"
          >
            {project.cta ?? 'Ver proyecto'}
          </a>
        )}
      </div>
    </div>
  );
}
