import { a as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, d as renderTemplate, b as renderHead, r as renderComponent } from '../chunks/astro/server_mRL9RAl9.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$Header, a as $$ContentLayout } from '../chunks/ContentLayout_BzQg6dRC.mjs';
import 'clsx';
import { g as getCollection, $ as $$Footer, S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/Footer_DYj5tayY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PostGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostGrid;
  const { posts = [] } = Astro2.props;
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.data.date || "").getTime();
    const dateB = new Date(b.data.date || "").getTime();
    return dateB - dateA;
  });
  return renderTemplate`${maybeRenderHead()}<div class="max-w-5xl mx-auto mt-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="group block overflow-hidden rounded-2xl text-center transition-transform duration-200 hover:scale-105">  ${post.data.coverImage ? renderTemplate`<img${addAttribute(post.data.coverImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-48 object-cover rounded-md transition-transform duration-200 group-hover:scale-110">` : renderTemplate`<div class="w-full h-48 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
Sin imagen
</div>`}  <div class="p-4 space-y-1"> <h2 class="text-base font-semibold text-black dark:text-white group-hover:text-indigo-500 transition"> ${post.data.title} </h2> ${post.data.excerpt && renderTemplate`<p class="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 overflow-hidden text-ellipsis"> ${post.data.excerpt} </p>`} ${post.data.date && renderTemplate`<span class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block"> ${new Date(post.data.date).toLocaleDateString()} </span>`} </div> </a>`)} </div>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/PostGrid.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) => post && post.data && post.data.title);
  return renderTemplate`<html lang="en" class="antialiased"> <head><title>HackLab — Posts</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body class="bg-white dark:bg-[#0B0B0B] min-h-screen flex flex-col text-black dark:text-white"> ${renderComponent($$result, "Navbar", null, { "client:only": "react", "posts": posts, "client:component-hydration": "only", "client:component-path": "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "subtitle": SITE_DESCRIPTION, "videoUrl": "./background.mp4" })} <main class="py-5 mt-10"> ${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": async ($$result2) => renderTemplate` <section> <p class="indent-3 text-justify text-zinc-700 dark:text-zinc-300">
As an indie dev, I enjoy sharing and writing about technologies,
            ideas, business, trends, and everything related to the digital
            world. This blog is my space to explore and reflect on topics I am
            passionate about, always aiming to provide value to other developers
            and enthusiasts in the field.
</p> </section> ${renderComponent($$result2, "PostGrid", $$PostGrid, { "posts": posts })} ` })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/index.astro", void 0);

const $$file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
