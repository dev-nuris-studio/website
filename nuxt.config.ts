import { fetchPages } from "@content-app/core/dist/index.js";
import * as contentful from 'contentful';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  extends: [
    'nuxt-seo-kit'
  ],
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
  modules: [
    '@nuxtjs/google-fonts'
  ],
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
      siteName: '',
      siteDescription: '',
      language: 'de',
    }
  },
})
