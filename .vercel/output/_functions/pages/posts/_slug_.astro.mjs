import { a as createComponent, e as createAstro, r as renderComponent, b as renderHead, d as renderTemplate, f as addAttribute } from '../../chunks/astro/server_mRL9RAl9.mjs';
import 'kleur/colors';
import { a as SITE_TITLE, $ as $$Footer, r as renderEntry, g as getCollection } from '../../chunks/Footer_DYj5tayY.mjs';
import { $ as $$BaseHead, a as $$Body } from '../../chunks/Body_DC24SEGF.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { post, Content } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": post.data.title + ` / ${SITE_TITLE}`, "description": post.data.excerpt, "image": post.data.coverImage })}${renderHead()}</head> ${renderComponent($$result, "Body", $$Body, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "posts": post.data.posts ?? [], "client:component-hydration": "only", "client:component-path": "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/Navbar", "client:component-export": "default" })}  <main class="pt-[56px]"> <article class="markdown-body"> ${post.data.coverImage && renderTemplate`<img class="mb-6"${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.coverImage, "src")}${addAttribute(post.data.title, "alt")}>`} <h1>${post.data.title}</h1> ${post.data.excerpt && renderTemplate`<p class="text-zinc-600 dark:text-zinc-400 mb-2 italic">${post.data.excerpt}</p>`} ${post.data.date && renderTemplate`<time class="text-xs text-zinc-500 dark:text-zinc-500 mb-6 block">
📅 ${new Date(post.data.date).toLocaleDateString()} </time>`} ${renderComponent($$result2, "Content", Content, {})} </article> </main> ` })} ${renderComponent($$result, "Footer", $$Footer, {})} </html>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.filter((post) => post && post.slug).map((post) => ({ params: { slug: post.slug }, props: { post } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  if (!post) {
    throw new Error("Post not found");
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "post": post, "Content": Content })}`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/posts/[slug].astro", void 0);

const $$file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
