import { render } from '@testing-library/react';
import Providers from '../Providers';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('Providers Component', () => {
  it('should render without crashing', () => {
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>
    );
  });
});