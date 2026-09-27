import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import { type Project } from '@/lib/types/project';
import { projects } from '@/data/projects';

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  description: 'Test Description',
  imageUrl: '/',
  url: '#',
};

jest.mock('../useProjectCard', () => ({
  useProjectCard: (project: Project) => ({ state: { project } }),
}));

describe('ProjectCard Component', () => {
  it('should render without crashing', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('links the Dearshot card to its internal project page', () => {
    const dearshot = projects.find(({ slug }) => slug === 'dearshot');

    if (!dearshot) {
      throw new Error('Dearshot project is missing from the project catalog');
    }

    render(<ProjectCard project={dearshot} />);

    expect(screen.getByRole('link', { name: 'Ver más' })).toHaveAttribute(
      'href',
      '/projects/dearshot',
    );
    expect(screen.getByRole('img', { name: 'Dearshot' })).toBeInTheDocument();
  });
});
