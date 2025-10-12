import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

jest.mock('../useContact', () => ({
  useContact: () => ({ state: { fields: [] } }),
}));

describe('Contact Component', () => {
  it('should render without crashing', () => {
    render(<Contact />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});