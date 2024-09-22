import { genFeed } from '$lib/utils/rss';
import { Effect } from 'effect';

export const GET = async () => {
	const feed = await genFeed.pipe(Effect.runPromise).then((feed) => feed.rss2());

	return new Response(feed);
};
