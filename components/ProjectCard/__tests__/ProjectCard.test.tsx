import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import { type Project } from '@/lib/types/project';

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
});