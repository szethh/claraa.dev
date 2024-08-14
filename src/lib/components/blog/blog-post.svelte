<script lang="ts">
	import type { Post } from '$lib/utils/schemas';
	import { fmtDate } from '$lib/utils/blog';
	import type { SvelteComponent } from 'svelte';

	export let page: SvelteComponent;
	export let post: Post;
</script>

<h1>{post.metadata.title}</h1>

<div class="flex gap-2 text-gray-400 mt-1 mb-8">
	<p>{post.readingTimeText} read</p>
	<span>·</span>
	<p>{fmtDate(post.metadata.date)}</p>
</div>

<article>
	<svelte:component this={page}>
		<style>
			table {
				border: 5px solid white;
				border-collapse: collapse;
			}
		</style>
	</svelte:component>
</article>

<style lang="postcss">
	h1 {
		@apply text-4xl;
	}

	table {
		border: 5px solid white;
		border-collapse: collapse;
	}
</style>
