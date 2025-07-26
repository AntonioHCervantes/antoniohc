export default function Timeline() {
  return (
    <section id="timeline" className="w-full bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Experiencia</h2>
        <ul className="space-y-6">
          <li className="border-l-2 border-foreground pl-4">
            <h3 className="font-bold">2024 - Empresa A</h3>
            <p>Desarrollador Frontend</p>
          </li>
          <li className="border-l-2 border-foreground pl-4">
            <h3 className="font-bold">2022 - Empresa B</h3>
            <p>Ingeniero de Software</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
