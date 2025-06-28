---
title: 'How I Built My Blog with Astro: My Step-by-Step Process'
date: '2025-06-02'
excerpt: 'Here’s the full story of how I rebuilt my blog with Astro — including all the tools, NPM packages, and lessons learned along the way.'
coverImage: '/images/astro.jpg'
---

I recently rebuilt my personal blog using **[Astro](https://astro.build)**, and I want to share the whole process — from the first `npx create astro@latest` to the NPM packages and components that make it work.

If you’re looking to do something similar, I hope this guide gives you a clear roadmap. ⚡

---

## Getting Started

When I decided to redo my blog, my goals were clear:

- **Fast and lightweight**
- **Focus on writing content**
- **No complicated CMS — just Markdown files**
- **Easy to host, scale, and maintain**

That’s why I picked **Astro** — it’s perfect for this kind of project.

---

## Initial Setup

Here’s what I ran to get going:

```bash
# Create a new Astro project
npx create astro@latest my-blog
cd my-blog

# Add Tailwind CSS for quick styling
npx astro add tailwind
```

Why Tailwind?
No custom CSS boilerplate, just utility classes and I can focus on layout without writing repetitive CSS.

## NPM Packages I Installed

```bash
astro — Core framework.
@astrojs/tailwind — Easy utility-first styles.
@astrojs/mdx — Support for writing posts and components in MDX.
@astrojs/rss — RSS feed generation for my blog.
date-fns — Formatting dates in posts.
recharts — Interactive graphs.
astrojs/image — Optimized image handling`

npm install @astrojs/mdx @astrojs/rss date-fns recharts
```

## ✍️ Writing Content

Astro makes content super easy. I just drop .md or .mdx files into src/content/posts.
Each file looks like this:

```bash
---
title: "My First Blog Post"
date: "2025-06-02"
excerpt: "A quick look at my process."
coverImage: "/images/my-post.jpg"
---

Your markdown content goes here.

```

## Styling

With Tailwind set up, customizing the UI was painless.
Here’s my typical style process:

- Define layout in components (Header.astro, Footer.astro)
- Use Tailwind utility classes directly (class="text-center text-xl mt-8")
- Keep a globals.css for any global tweaks.

## What I Learned

- Astro’s island architecture really pays off — my blog loads instantly and doesn’t ship any JS I don’t need.
- Setting up Tailwind saved me hours of writing custom CSS.
- NPM packages like date-fns and @astrojs/rss make small tasks like formatting dates and generating feeds super easy.
- Interactive components fit right into MDX without any friction.

### That’s my process. - Thanks for reading!
