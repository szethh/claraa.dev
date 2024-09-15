<script lang="ts">
	import { page } from '$app/stores';
	import { Array, Order, Option, pipe } from 'effect';
	import { derived } from 'svelte/store';

	const blogPost = derived(page, ($page) => ({
		title: $page.data.post?.metadata?.title,
		slug: $page.data.post?.slug
	}));

	const locs = [
		{
			route: '/',
			label: 'home'
		},
		{
			route: '/blog',
			label: 'blog'
		}
	] as const;

	// we sort them so that the longest route is first
	// we don't want to match / every time
	const sortedLocs = Array.sortWith(locs, (loc) => loc.route.length, Order.reverse(Order.number));

	const where = derived(page, ($page) =>
		pipe(
			Array.findFirst(sortedLocs, (loc) => $page.url.pathname.startsWith(loc.route)),
			Option.map((r) => r.label),
			Option.getOrNull
		)
	);
</script>

<nav class="flex gap-10 py-8 px-12 bg-stone-800">
	<a href="/" class="flex gap-2 items-center">
		<!-- <Home /> -->
		<b class:underline={$where === 'home'}>Me</b>
	</a>

	<div class="flex gap-4">
		<a href="/blog" class="flex gap-2 items-center">
			<!-- <Notebook /> -->
			<span class:underline={$where === 'blog'}>Blog</span>
		</a>
		{#if $blogPost.title && $blogPost.slug}
			<span class="text-zinc-400">/</span>
			<a href="/blog/{$blogPost.slug}" class="text-zinc-400">{$blogPost.title}</a>
		{/if}
	</div>
</nav>

<style>
	a {
		/* color: inherit; */
		text-decoration: none;
	}
</style>
