import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types.js';
import { getAllPosts } from '$lib/utils/blog.js';
import { Effect, Record } from 'effect';

export const prerender = true;
// export const csr = false;

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts().pipe(
		Effect.map(Record.collect((k, _) => ({ slug: k }))),
		Effect.runPromise
	);
	console.log(posts);
	return posts;
};

export const load = async ({ params, data }) => {
	const { slug } = params;

	const { default: page } = await import(`$lib/content/blog/${slug}/index.svx`);

	if (!page) {
		error(404, `Blog post not found: ${slug}`);
	}

	return {
		...data,
		page
	};
};
