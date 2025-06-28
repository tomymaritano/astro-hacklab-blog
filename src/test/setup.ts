import '@testing-library/jest-dom';

// Mock Astro globals
(globalThis as any).Astro = {
  props: {},
  request: {
    url: 'http://localhost:4321/',
  },
  site: new URL('http://localhost:4321/'),
  url: new URL('http://localhost:4321/'),
};
