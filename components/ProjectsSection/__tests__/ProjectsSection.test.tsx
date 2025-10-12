import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

jest.mock('../useProjectsSection', () => ({
  useProjectsSection: () => ({ state: { projects: [] } }),
}));

describe('ProjectsSection Component', () => {
  it('should render without crashing', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
  });
});