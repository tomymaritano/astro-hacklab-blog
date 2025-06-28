import { a as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, d as renderTemplate, g as renderSlot } from './astro/server_mRL9RAl9.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { title = "A Developer\u2019s Journal", subtitle = "Notes on building, learning, and shipping meaningful products.", videoUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="relative w-full h-[45vh] min-h-[300px] flex items-center justify-center text-center overflow-hidden border-b border-white/10 dark:border-white/10"> <!-- Video de fondo --> <video${addAttribute(videoUrl, "src")} autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-80"></video> <!-- Overlay oscuro --> <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div> <!-- Contenido del header --> <div class="relative z-10 px-4 pt-14 animate-fade-in"> <h1 class="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2"> ${title} </h1> <p class="text-indigo-500 hover:text-purple-400 text-base fong-bold sm:text-lg max-w-xl mx-auto drop-shadow-md"> ${subtitle} </p> </div> </header>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`px-8 mx-auto max-w-3xl ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</article>`;
}, "/Users/tomasmaritano/Documents/github/astro-hacklab-blog/src/components/ContentLayout.astro", void 0);

export { $$Header as $, $$ContentLayout as a };
