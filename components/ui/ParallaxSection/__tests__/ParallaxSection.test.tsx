import { render, screen } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxSection from '../ParallaxSection';

describe('ParallaxSection Component', () => {
  it('should render without crashing', () => {
    render(
      <ParallaxProvider>
        <ParallaxSection>
          <div>Test Child</div>
        </ParallaxSection>
      </ParallaxProvider>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});