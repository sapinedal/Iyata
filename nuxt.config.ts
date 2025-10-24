import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: 'Iyalta',
      link: [
        { rel: 'icon', type: 'image/png', href: '/suitpress logo.png' }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});