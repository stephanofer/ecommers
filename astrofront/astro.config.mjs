// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import icon from 'astro-icon';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon()],

  
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});