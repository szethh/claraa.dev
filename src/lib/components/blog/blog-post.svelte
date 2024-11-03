<script lang="ts">
	import type { Post } from '$lib/utils/schemas';
	import { fmtDate } from '$lib/utils/blog';
	import type { SvelteComponent } from 'svelte';

	interface Props {
		page: typeof SvelteComponent;
		post: Post;
	}

	let { page, post }: Props = $props();

	const SvelteComponent_1 = $derived(page);
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<h1>{post.metadata.title}</h1>

<div class="flex gap-2 text-gray-400 mt-1 mb-8">
	<div>{post.readingTimeText}</div>
	<span>·</span>
	<div>{fmtDate(post.metadata.date)}</div>
</div>

<article class="blog-post">
	<!-- <SvelteComponent_1>
		<style>
			table {
				border: 5px solid white;
				border-collapse: collapse;
			}
		</style>
	</SvelteComponent_1> -->
</article>

<style lang="postcss">
	h1 {
		@apply text-4xl;
	}

	/* table {
		border: 5px solid white;
		border-collapse: collapse;
	} */
</style>
