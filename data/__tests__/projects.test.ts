import { getProjectDetail, projects } from '../projects';

describe('project data', () => {
  it('adds Dearshot while preserving the order of the existing projects', () => {
    expect(projects.map(({ slug }) => slug)).toEqual([
      'dearshot',
      'check-planner',
      'keep-calm-keep-working',
      'gift-ideas-finder',
      'smieals',
      'kuicco',
      'board-game-finder',
    ]);
  });

  it('provides the Spanish Dearshot detail, logo, sections, and official call to action', () => {
    const dearshot = getProjectDetail('dearshot');

    expect(dearshot).toBeDefined();
    if (!dearshot) {
      return;
    }

    expect(dearshot.summary).toContain('Google Drive');
    expect(dearshot.heroImage).toEqual({
      src: '/images/dearshot-logo.svg',
      alt: 'Logotipo de Dearshot',
    });
    expect(dearshot.liveUrl).toBe('https://dearshot.com/es');
    expect(dearshot.technologies).toEqual([
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Google Drive API',
    ]);
    expect(dearshot.content.map(({ title }) => title)).toEqual([
      'Una propuesta para compartir recuerdos',
      'Organización de álbumes',
      'Privacidad y colaboración',
      'Tecnología',
    ]);
    expect(dearshot.results).toHaveLength(3);
  });
});
