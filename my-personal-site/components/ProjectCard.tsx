import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}
