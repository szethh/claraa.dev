<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const blogPost = derived(page, ($page) => ({
		title: $page.data.post?.metadata?.title,
		slug: $page.data.post?.slug
	}));
</script>

<nav class="flex gap-12 py-8 px-12 bg-stone-800">
	<a href="/"><b>Home</b></a>

	<div class="flex gap-4">
		<a href="/blog">Blog</a>
		{#if $blogPost.title}
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
