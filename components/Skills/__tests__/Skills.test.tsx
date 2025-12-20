import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

jest.mock('../useSkills', () => ({
  useSkills: () => ({
    state: {
      skillGroups: [{ title: 'Group Title', skills: [{ name: 'Test Skill', level: 100 }] }],
    },
  }),
}));

describe('Skills Component', () => {
  it('should render without crashing', () => {
    render(<Skills />);
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Group Title')).toBeInTheDocument();
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
  });
});