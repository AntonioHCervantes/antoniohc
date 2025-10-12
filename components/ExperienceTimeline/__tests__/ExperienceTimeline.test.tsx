import { render, screen } from '@testing-library/react';
import ExperienceTimeline from '../ExperienceTimeline';

jest.mock('../useExperienceTimeline', () => ({
  useExperienceTimeline: () => ({ state: { experiences: [] } }),
}));

describe('ExperienceTimeline Component', () => {
  it('should render without crashing', () => {
    render(<ExperienceTimeline />);
    expect(screen.getByText('Experiencia')).toBeInTheDocument();
  });
});