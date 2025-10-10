import { useAbout } from './useAbout';

export default function About() {
  const {
    state: { heading, paragraphs },
  } = useAbout();

  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-semibold">{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-4 text-center">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
