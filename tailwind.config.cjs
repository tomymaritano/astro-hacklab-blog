// tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,svelte,vue}',
        './public/**/*.html',
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
};