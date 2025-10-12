import { render, screen } from '@testing-library/react';
import AnimatedBackground from '../AnimatedBackground';

jest.mock('../useAnimatedBackground', () => ({
  useAnimatedBackground: () => ({
    state: { color: '#000' },
    actions: { handleInit: jest.fn() },
  }),
}));

jest.mock('react-tsparticles', () => ({
  __esModule: true,
  default: () => <div data-testid="animated-background" />,
}));

describe('AnimatedBackground Component', () => {
  it('should render without crashing', async () => {
    render(<AnimatedBackground />);
    await screen.findByTestId('animated-background');
  });
});