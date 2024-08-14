import { RawPostSchema, type Post } from '$lib/utils/schemas';
import { readingTime } from 'reading-time-estimator';
import { error } from '@sveltejs/kit';
import { Schema } from '@effect/schema';

// export const prerender = true;
// export const csr = false;

const formatReadTime = (rt: number) => {
	if (rt < 1) return 'less than a minute';
	if (rt > 1) return `${rt} minutes`;
	return `${rt} minute`;
};

export const load = async ({ params }) => {
	const { slug } = params;

	const pageData = await import(`$lib/content/blog/${slug}/index.svx`);

	const { default: page, metadata } = Schema.decodeUnknownSync(RawPostSchema)(pageData);

	if (!page) {
		error(404, `Blog post not found: ${slug}`);
	}

	const raw = '$$render' in page ? page['$$render']() : '';
	const rt = Math.ceil(readingTime(raw).minutes);

	const post: Post = {
		slug,
		metadata,
		readingTime: rt,
		readingTimeText: formatReadTime(rt)
	};

	return {
		page,
		post
	};
};
