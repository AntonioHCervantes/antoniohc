import '@testing-library/jest-dom';

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

const resizeObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.ResizeObserver = jest.fn().mockImplementation(resizeObserverMock);

HTMLCanvasElement.prototype.getContext = jest.fn();