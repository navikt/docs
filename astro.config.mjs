import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: '/',
	integrations: [mdx(), sitemap()],
	output: 'server',
});
