<script lang="ts">
	import { fmtDate } from '$lib/utils/blog.js';

	let { data } = $props();

	const posts = Object.entries(data.posts).sort(
		(a, b) => new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
	);
</script>

<svelte:head>
	<title>Blog - Clara Periago</title>
</svelte:head>

<div class="flex flex-col gap-4">
	{#each posts as [slug, post]}
		<a href="/blog/{slug}">
			<div class="card card-hover p-8 grid grid-cols-[auto_1fr] gap-4">
				{#if post.image}
					<img src={post.image} alt="post thumbnail" class="w-full rounded-lg" />
				{/if}

				<div>
					<h1>{post.title}</h1>

					<div class="text-zinc-400 text-sm">{fmtDate(post.date)}</div>

					<div class="mt-4 text-zinc-300">{post.description}</div>
				</div>
			</div>
		</a>
	{/each}
</div>

{#if Object.keys(data.posts).length === 0}
	<div class="flex justify-center items-center h-full">There's nothing here yet! :)</div>
{/if}
