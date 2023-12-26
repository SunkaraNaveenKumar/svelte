import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	
	test: {
		reporter:["verbose"],
		coverage: {
			enabled: true,
			reporter: ['text', 'json', 'html'],
		},
		globals:true,
		environment:"jsdom",
		css:true,
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
