<script lang="ts">
	import { page } from '$app/stores';
	import { Array, Order, Option, pipe } from 'effect';
	import { derived } from 'svelte/store';
	import Socials from './helpers/socials.svelte';

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
		},
		// this one prevents the blog from being underlined
		// if we are looking at a post, but not the index
		{
			route: '/blog/',
			label: 'blog-post'
		},
		{
			route: '/projects',
			label: 'projects'
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

<div class="flex justify-between items-center py-8 md:px-12 px-8 gap-4 bg-stone-800">
	<nav class="flex gap-10 w-full overflow-hidden">
		<a href="/" class="flex gap-2 items-center">
			<b class:underline={$where === 'home'}>About me</b>
		</a>

		<div class="flex gap-4">
			<a href="/blog" class="flex gap-2 items-center">
				<span class:underline={$where === 'blog'}>Blog</span>
			</a>
			{#if $blogPost.title && $blogPost.slug}
				<span class="text-zinc-400">/</span>
				<a href="/blog/{$blogPost.slug}" class="text-zinc-400 max-w-full truncate">
					{$blogPost.title}
				</a>
			{/if}
		</div>

		<a href="/projects">
			<span class:underline={$where === 'projects'}>Projects</span>
		</a>
	</nav>

	<Socials />
</div>

<style>
	a {
		/* color: inherit; */
		text-decoration: none;
	}
</style>
