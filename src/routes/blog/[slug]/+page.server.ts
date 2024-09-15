import { RawPostSchema, type Post } from '$lib/utils/schemas';
import { Schema } from '@effect/schema';
import { error } from '@sveltejs/kit';
import { readingTime } from 'reading-time-estimator';

export const load = async ({ params }) => {
	const { slug } = params;

	const pageData = await import(`$lib/content/blog/${slug}/index.svx`);

	const { default: page, metadata } = Schema.decodeUnknownSync(RawPostSchema)(pageData);

	if (!page) {
		error(404, `Blog post not found: ${slug}`);
	}

	const raw = page['$$render']();

	const rt = readingTime(raw);
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
