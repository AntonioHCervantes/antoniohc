import { useContact } from './useContact';

export default function Contact() {
  const {
    state: { subtitle, socialLinks },
  } = useContact();

  return (
    <section id="contact" className="mx-auto max-w-lg px-4 py-20 text-center">
      <h2 className="mb-4 text-3xl font-semibold">Contacto</h2>
      <p className="mx-auto mb-10 max-w-md text-base text-muted-foreground">{subtitle}</p>
      <div className="flex justify-center gap-6">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-foreground hover:text-background"
          >
            <Icon className="h-6 w-6" />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
