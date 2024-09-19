import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: 'https://docs.ansatt.nav.no',
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});
