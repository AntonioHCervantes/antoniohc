export default function Contact() {
  return (
    <section id="contact" className="max-w-lg mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
      <form className="space-y-4">
        <input className="w-full border rounded p-2" type="text" placeholder="Nombre" />
        <input className="w-full border rounded p-2" type="email" placeholder="Correo" />
        <textarea className="w-full border rounded p-2" rows={4} placeholder="Mensaje" />
        <button type="submit" className="px-6 py-2 bg-foreground text-background rounded hover:opacity-80 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
