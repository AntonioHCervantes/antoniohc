import { render, screen } from '@testing-library/react';
import About from '../About';

// Mock the custom hook to provide controlled data for the test
jest.mock('../useAbout', () => ({
  useAbout: () => ({
    state: {
      heading: 'Test Heading',
      subheading: 'Test Subheading',
      introduction: 'Test introduction.',
      paragraphs: ['Test paragraph 1.', 'Test paragraph 2.'],
      highlights: [
        { label: 'Highlight A', value: 'Value A' },
        { label: 'Highlight B', value: 'Value B' },
        { label: 'Highlight C', value: 'Value C' },
      ],
      portrait: { src: '/test.jpg', alt: 'Test Alt' },
    },
  }),
}));

describe('About Component', () => {
  it('should render the heading and paragraphs provided by the hook', () => {
    render(<About />);

    // Check for the heading
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Subheading')).toBeInTheDocument();
    expect(screen.getByText('Test introduction.')).toBeInTheDocument();

    // Check for the paragraphs
    expect(screen.getByText('Test paragraph 1.')).toBeInTheDocument();
    expect(screen.getByText('Test paragraph 2.')).toBeInTheDocument();

    // Check for the highlights
    expect(screen.getByText('Value A')).toBeInTheDocument();
    expect(screen.getByText('Value B')).toBeInTheDocument();
    expect(screen.getByText('Value C')).toBeInTheDocument();
  });
});