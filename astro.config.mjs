import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from "@astrojs/partytown";

import fs from 'fs';

function addNoJekyll() {
  return {
    name: 'add-nojekyll',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const nojekyllPath = new URL('.nojekyll', dir);
        fs.writeFileSync(nojekyllPath, '');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://0-BR-0.github.io/TestP8',
  base: '/TestP8',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
}); 