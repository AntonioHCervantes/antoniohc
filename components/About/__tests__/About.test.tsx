import { render, screen } from '@testing-library/react';
import About from '../About';

// Mock the custom hook to provide controlled data for the test
jest.mock('../useAbout', () => ({
  useAbout: () => ({
    state: {
      heading: 'Test Heading',
      subheading: 'Test Subheading',
      introduction: 'Test introduction.',
      biographyCta: {
        label: 'Ver biografía completa',
        href: '/biografia',
      },
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
  it('should render the heading provided by the hook', () => {
    render(<About />);

    // Check for the heading
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Subheading')).toBeInTheDocument();
    expect(screen.getByText('Test introduction.')).toBeInTheDocument();
    expect(screen.getByText('Ver biografía completa')).toBeInTheDocument();

    // Check for the highlights
    expect(screen.getByText('Value A')).toBeInTheDocument();
    expect(screen.getByText('Value B')).toBeInTheDocument();
    expect(screen.getByText('Value C')).toBeInTheDocument();
  });
});
