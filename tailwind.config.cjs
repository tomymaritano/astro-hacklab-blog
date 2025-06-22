// tailwind.config.cjs
module.exports = {
    darkMode: 'class', // usa la clase "dark"
    content: [
        './src/**/*.{astro,html,js,ts,jsx,tsx,svelte,vue}',
        './public/**/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
            },
        }
    },
    plugins: [require('@tailwindcss/typography')],
};