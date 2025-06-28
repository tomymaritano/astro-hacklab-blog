import { a as createComponent, e as createAstro, d as renderTemplate, f as addAttribute, m as maybeRenderHead, g as renderSlot } from './astro/server_mRL9RAl9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/cover.jpg" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><script>\n  const theme = (() => {\n    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n      return localStorage.getItem('theme')\n    }\n    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      return 'dark'\n    }\n    return 'light'\n  })()\n\n  if (theme === 'light') {\n    document.documentElement.classList.remove('dark')\n  } else {\n    document.documentElement.classList.add('dark')\n  }\n<\/script>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"));
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/BaseHead.astro", void 0);

const $$Body = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body class="bg-indigo-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500">${renderSlot($$result, $$slots["default"])} </body>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/Body.astro", void 0);

export { $$BaseHead as $, $$Body as a };
