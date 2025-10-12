import { render, screen } from '@testing-library/react';
import About from '../About';

// Mock the custom hook to provide controlled data for the test
jest.mock('../useAbout', () => ({
  useAbout: () => ({
    state: {
      heading: 'Test Heading',
      paragraphs: ['Test paragraph 1.', 'Test paragraph 2.'],
    },
  }),
}));

describe('About Component', () => {
  it('should render the heading and paragraphs provided by the hook', () => {
    render(<About />);

    // Check for the heading
    expect(screen.getByText('Test Heading')).toBeInTheDocument();

    // Check for the paragraphs
    expect(screen.getByText('Test paragraph 1.')).toBeInTheDocument();
    expect(screen.getByText('Test paragraph 2.')).toBeInTheDocument();
  });
});