import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock the custom hook to provide controlled data for the test
jest.mock('../useHero', () => ({
  useHero: () => ({
    state: {
      text: 'Test Text',
    },
    actions: {
      scrollToAbout: jest.fn(),
    },
  }),
}));

describe('Hero Component', () => {
  it('should render without crashing', () => {
    render(<Hero />);
    // Check for the name to ensure it rendered with mock data
    expect(screen.getByText('Antonio Hernández Cervantes')).toBeInTheDocument();
  });
});