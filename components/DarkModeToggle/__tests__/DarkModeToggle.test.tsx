import { render, screen } from '@testing-library/react';
import DarkModeToggle from '../DarkModeToggle';

jest.mock('../useDarkModeToggle', () => ({
  useDarkModeToggle: () => ({ state: { enabled: false, mounted: true }, actions: { toggle: jest.fn() } }),
}));

describe('DarkModeToggle Component', () => {
  it('should render without crashing', () => {
    render(<DarkModeToggle />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
});
