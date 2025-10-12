import { render, screen } from '@testing-library/react';
import Education from '../Education';

jest.mock('../useEducation', () => ({
  useEducation: () => ({ state: { studies: [] } }),
}));

describe('Education Component', () => {
  it('should render without crashing', () => {
    render(<Education />);
    expect(screen.getByText('Educación')).toBeInTheDocument();
  });
});