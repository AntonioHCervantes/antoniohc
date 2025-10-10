import { useContact } from './useContact';

export default function Contact() {
  const {
    state: { fields },
  } = useContact();

  return (
    <section id="contact" className="mx-auto max-w-lg px-4 py-20 text-center">
      <h2 className="mb-4 text-3xl font-semibold">Contacto</h2>
      <form className="space-y-4">
        {fields.map((field) => (
          <input
            key={field.name}
            className="w-full rounded border p-2"
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
          />
        ))}
        <textarea className="w-full rounded border p-2" rows={4} placeholder="Mensaje" />
        <button type="submit" className="rounded bg-foreground px-6 py-2 text-background transition hover:opacity-80">
          Enviar
        </button>
      </form>
    </section>
  );
}
