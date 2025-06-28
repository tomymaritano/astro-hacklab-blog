import { getCollection } from 'astro:content';
import type { Language } from './i18n';

export async function getPostsForLanguage(lang: Language) {
  const collectionName = `posts-${lang}` as 'posts-en' | 'posts-es';

  try {
    const posts = await getCollection(collectionName);
    return posts.filter(post => post && post.data && post.data.title);
  } catch {
    // Fallback to English if the collection doesn't exist or has no posts
    if (lang !== 'en') {
      const fallbackPosts = await getCollection('posts-en');
      return fallbackPosts.filter(post => post && post.data && post.data.title);
    }
    return [];
  }
}

export async function getPostBySlug(slug: string, lang: Language) {
  const collectionName = `posts-${lang}` as 'posts-en' | 'posts-es';

  try {
    const posts = await getCollection(collectionName);
    const post = posts.find(p => p.slug === slug);

    if (post) {
      return { post, isTranslated: true };
    }
  } catch {
    // Collection might not exist
  }

  // Fallback to English version
  if (lang !== 'en') {
    try {
      const englishPosts = await getCollection('posts-en');
      const post = englishPosts.find(p => p.slug === slug);

      if (post) {
        return { post, isTranslated: false };
      }
    } catch {
      // English collection also has issues
    }
  }

  return { post: null, isTranslated: false };
}
