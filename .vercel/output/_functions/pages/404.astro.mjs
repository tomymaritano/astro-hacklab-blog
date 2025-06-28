import { a as createComponent, r as renderComponent, b as renderHead, d as renderTemplate } from '../chunks/astro/server_mRL9RAl9.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Body } from '../chunks/Body_DC24SEGF.mjs';
import { $ as $$Header, a as $$ContentLayout } from '../chunks/ContentLayout_BzQg6dRC.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE, $ as $$Footer } from '../chunks/Footer_DYj5tayY.mjs';
import { IoChevronForward } from 'react-icons/io5';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> ${renderComponent($$result, "Body", $$Body, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": "What I thought", "subtitle": "DEV, PRODUCT & MUCH MORE.", "videoUrl": "./background.mp4" })} <main class="pt-[56px]"> ${renderComponent($$result2, "ContentLayout", $$ContentLayout, {}, { "default": ($$result3) => renderTemplate` <section> <h1 class="text-3xl text-center font-mplus mt-12 mb-8">
Oops, not found
</h1> <div class="text-center py-4"> <a class="inline-flex items-center gap-1 underline underline-offset-2 decoration-indigo-500" href="/">Go to Index ${renderComponent($$result3, "IoChevronForward", IoChevronForward, {})} </a> </div> </section> ` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} </html>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/404.astro", void 0);

const $$file = "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
