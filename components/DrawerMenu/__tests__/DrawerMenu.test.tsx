import { render, screen } from '@testing-library/react';
import DrawerMenu from '../DrawerMenu';
import { Home } from 'lucide-react';

jest.mock('../useDrawerMenu', () => ({
  useDrawerMenu: () => ({
    state: { links: [{ href: '/', label: 'Home', icon: Home }], pathname: '/' },
    actions: { handleNavigate: jest.fn() },
  }),
}));

describe('DrawerMenu Component', () => {
  it('should render without crashing when open', () => {
    render(<DrawerMenu open={true} onClose={() => {}} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});