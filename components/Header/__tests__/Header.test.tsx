import { render, screen } from '@testing-library/react';
import Header from '../Header';

jest.mock('../useHeader', () => ({
  useHeader: () => ({ state: { isOpen: false }, actions: { openMenu: jest.fn(), closeMenu: jest.fn() } }),
}));

jest.mock('../../DrawerMenu/DrawerMenu', () => {
  const MockedDrawerMenu = () => <div data-testid="drawer-menu" />;
  MockedDrawerMenu.displayName = 'DrawerMenu';
  return MockedDrawerMenu;
});

describe('Header Component', () => {
  it('should render without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});