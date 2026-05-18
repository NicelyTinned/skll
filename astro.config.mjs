// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import skllGrammar from './syntax/skll.tmLanguage.json';

// https://astro.build/config
export default defineConfig({
	site: "https://nicelytinned.github.io",
	base: "/skll",
	integrations: [
		starlight({
			title: 'SKLL Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/NicelyTinned/skll-lang' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/start' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			expressiveCode: {
				shiki: {
					theme: 'one-dark-pro',
					langs: [skllGrammar]
				},
			},
		}),
	],
});
