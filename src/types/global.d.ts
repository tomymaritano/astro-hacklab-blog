// Global type declarations

declare global {
  namespace globalThis {
    var Astro: {
      props: Record<string, any>;
      request: {
        url: string;
      };
      site: URL;
      url: URL;
    };
  }
}

export {};
