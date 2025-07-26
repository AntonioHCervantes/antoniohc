export default function Skills() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];

  return (
    <section id="skills" className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-8">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-2 border rounded-full bg-background shadow"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
