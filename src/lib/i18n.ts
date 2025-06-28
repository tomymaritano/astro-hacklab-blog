export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.about': 'About',
    'nav.search': 'Search...',
    'nav.theme.light': 'Light mode',
    'nav.theme.dark': 'Dark mode',

    // Hero Section
    'hero.title': "A Developer's Journal",
    'hero.subtitle': 'Notes on building, learning, and shipping meaningful products.',
    'hero.badge': 'Building Digital Products',
    'hero.scroll': 'Scroll to explore my digital journey ↓',

    // Content
    'content.intro':
      'As an indie dev, I enjoy sharing and writing about technologies, ideas, business, trends, and everything related to the digital world. This blog is my space to explore and reflect on topics I am passionate about, always aiming to provide value to other developers and enthusiasts in the field.',
    'content.readMore': 'Read more',
    'content.readTime': 'min read',
    'content.publishedOn': 'Published on',
    'content.updatedOn': 'Updated on',
    'content.backToPosts': '← Back to posts',
    'content.sharePost': 'Share this post',
    'content.relatedPosts': 'Related posts',
    'content.noImage': 'No image',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.builtWith': 'Built with',
    'footer.source': 'Source code',

    // Meta
    'meta.description': 'Personal blog about web development, AI, and digital product creation',
    'meta.keywords': 'web development, javascript, react, astro, AI, digital products',

    // Errors
    'error.postNotFound': 'Post not found',
    'error.pageNotFound': 'Page not found',
    'error.goHome': 'Go to home',

    // Language
    'lang.switchTo': 'Switch to',
    'lang.current': 'Current language',
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.posts': 'Posts',
    'nav.about': 'Acerca',
    'nav.search': 'Buscar...',
    'nav.theme.light': 'Modo claro',
    'nav.theme.dark': 'Modo oscuro',

    // Sección Hero
    'hero.title': 'El Diario de un Desarrollador',
    'hero.subtitle': 'Notas sobre crear, aprender y lanzar productos digitales significativos.',
    'hero.badge': 'Construyendo Productos Digitales',
    'hero.scroll': 'Desplázate para explorar mi viaje digital ↓',

    // Contenido
    'content.intro':
      'Como desarrollador independiente, disfruto compartir y escribir sobre tecnologías, ideas, negocios, tendencias y todo lo relacionado con el mundo digital. Este blog es mi espacio para explorar y reflexionar sobre temas que me apasionan, siempre buscando aportar valor a otros desarrolladores y entusiastas del área.',
    'content.readMore': 'Leer más',
    'content.readTime': 'min de lectura',
    'content.publishedOn': 'Publicado el',
    'content.updatedOn': 'Actualizado el',
    'content.backToPosts': '← Volver a posts',
    'content.sharePost': 'Compartir este post',
    'content.relatedPosts': 'Posts relacionados',
    'content.noImage': 'Sin imagen',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.builtWith': 'Construido con',
    'footer.source': 'Código fuente',

    // Meta
    'meta.description': 'Blog personal sobre desarrollo web, IA y creación de productos digitales',
    'meta.keywords': 'desarrollo web, javascript, react, astro, IA, productos digitales',

    // Errores
    'error.postNotFound': 'Post no encontrado',
    'error.pageNotFound': 'Página no encontrada',
    'error.goHome': 'Ir al inicio',

    // Idioma
    'lang.switchTo': 'Cambiar a',
    'lang.current': 'Idioma actual',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const segments = url.pathname.split('/');
  const langSegment = segments[1];

  if (langSegment && langSegment in languages) {
    return langSegment as Language;
  }

  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof translations.en): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

export function getLocalizedUrl(url: string, lang: Language): string {
  const segments = url.split('/').filter(Boolean);

  // Remove existing language prefix if present
  if (segments[0] && segments[0] in languages) {
    segments.shift();
  }

  // Add new language prefix (except for default language)
  if (lang !== defaultLang) {
    segments.unshift(lang);
  }

  return '/' + segments.join('/');
}

export function removeLanguagePrefix(url: string): string {
  const segments = url.split('/').filter(Boolean);

  if (segments[0] && segments[0] in languages) {
    segments.shift();
  }

  return '/' + segments.join('/');
}
