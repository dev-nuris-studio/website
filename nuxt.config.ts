import { fetchPages } from "@content-app/core/dist/index.js";
import * as contentful from 'contentful';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#EDEAFA' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#EDEAFA' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  site: {
    url: 'https://nuris.studio',
    name: 'nuris.studio',
    description: 'Wir konzipieren und entwickeln intelligente digitale Produkte.',
    defaultLocale: 'de', // not needed if you have @nuxtjs/i18n installed
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (!nitroConfig) {
        return;
      }

      const client = contentful.createClient({
        space: process.env.SPACE_ID || '',
        accessToken: process.env.DELIVERY_ACCESS_TOKEN || '',
      });

      const pages = await fetchPages({ client });

      nitroConfig.prerender?.routes?.push(...pages);
    }
  },
  css: ['assets/styles/styles.scss'],
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/seo'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/styles/_vars.scss"; @import "@/node_modules/sass-mediaqueries/_media-queries.scss";',
        },
      },
    },
  },
  googleFonts: {
    download: true,
    inject: true,
    useStylesheet: false,
    families: {
      Manrope: [400],
      Urbanist: [400, 600, 700],
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
      siteName: 'nuris.studio',
      siteDescription: 'Wir konzipieren und entwickeln intelligente digitale Produkte.',
      language: 'de',
    }
  },
})