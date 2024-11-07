import { RawPostSchema, type Post } from '$lib/utils/schemas';
import { Schema } from '@effect/schema';
import { error } from '@sveltejs/kit';
import { readingTime } from 'reading-time-estimator';
import { render } from 'svelte/server';

export const load = async ({ params }) => {
	const { slug } = params;

	const pageData = await import(`$lib/content/blog/${slug}/index.svx`);

	const { default: page, metadata } = Schema.decodeUnknownSync(RawPostSchema)(pageData);

	if (!page) {
		error(404, `Blog post not found: ${slug}`);
	}

	const { body } = render(page);

	const rt = readingTime(body);
	// console.log(rt);

	const post: Post = {
		slug,
		metadata,
		readingTime: rt.minutes,
		readingTimeText: rt.text
	};

	return {
		post
	};
};
