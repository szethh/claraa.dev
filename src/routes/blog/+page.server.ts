import { getAllPosts } from '$lib/utils/blog';
import { Effect } from 'effect';

export const prerender = true;

export const load = async (x) => {
	const posts = await Effect.runPromise(getAllPosts());

	// Record.modify('image', (post) => '')
	// const withImages = Record.map(filtered, Record.modify('image', (post) => ''));

	// console.log(posts);

	return {
		posts
	};
};
