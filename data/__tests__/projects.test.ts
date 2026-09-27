import { getProjectDetail, projectDetails, projects } from '../projects';

describe('Dearshot project data', () => {
  it('adds Dearshot without changing the existing project order', () => {
    const existingSlugs = projectDetails
      .filter(({ slug }) => slug !== 'dearshot')
      .map(({ slug }) => slug);

    expect(existingSlugs).toEqual([
      'check-planner',
      'keep-calm-keep-working',
      'gift-ideas-finder',
      'smieals',
      'kuicco',
      'board-game-finder',
    ]);

    expect(projects.find(({ slug }) => slug === 'dearshot')).toMatchObject({
      title: 'Dearshot',
      imageUrl: '/images/dearshot.svg',
      url: '/projects/dearshot',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'Google Drive API',
      ],
    });
  });

  it('includes the verified Dearshot detail content and live destination', () => {
    const dearshot = getProjectDetail('dearshot');

    expect(dearshot).toMatchObject({
      liveUrl: 'https://dearshot.com/es',
      liveCta: 'Visitar Dearshot',
      heroImage: {
        src: '/images/dearshot.svg',
        alt: expect.stringContaining('Ilustración del logotipo de Dearshot'),
      },
      content: [
        { title: 'Problema y propuesta' },
        { title: 'Álbumes y organización' },
        { title: 'Privacidad y colaboración' },
        { title: 'Tecnología' },
      ],
      results: [
        { label: 'Privacidad', value: 'Álbumes privados' },
        { label: 'Archivos', value: 'Tu Google Drive' },
        { label: 'Organización', value: 'Familia y viajes' },
      ],
    });
  });
});
