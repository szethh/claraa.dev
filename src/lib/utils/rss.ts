import { Feed, type Author } from 'feed';
import { getAllPosts } from './blog';
import { Array, Effect, Order, pipe, Record } from 'effect';

const publicUrl = 'https://claraa.io';

const me = {
	name: 'Clara Periago',
	email: 'info@claraa.io',
	link: publicUrl
} satisfies Author;

const favicon = 'https://fav.farm/🌺';

const categories = ['technology', 'nixos', 'nix', 'devops', 'selfhosting'];

export const genFeed = Effect.gen(function* () {
	// create base feed
	const feed = new Feed({
		title: "Clara's Blog",
		description: 'Selfhosting, NixOs, DevOps, and more',
		id: publicUrl,
		link: publicUrl,
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		image: favicon,
		favicon,
		copyright: 'All rights reserved 2024, Clara Periago',
		updated: new Date(),
		feedLinks: {
			atom: `${publicUrl}/blog/atom.xml`,
			rss: `${publicUrl}/blog/feed.rss`
		},
		author: me
	});

	// add categories
	Array.forEach(categories, feed.addCategory);

	const posts = yield* getAllPosts();
	// format as an array, make sure they are in reverse chronological order
	const postsArr = pipe(
		Record.collect(posts, (slug, post) => ({ slug, post })),
		Array.sortWith(({ post }) => post.date, Order.reverse(Order.Date))
	);

	// add each post
	Array.forEach(postsArr, ({ slug, post }) =>
		feed.addItem({
			title: post.title,
			id: `${publicUrl}/blog/${slug}`,
			link: `${publicUrl}/blog/${slug}`,
			description: post.description,
			// content: '',
			author: [me],
			date: post.date,
			image: post.image ?? ''
		})
	);

	return feed;
});
