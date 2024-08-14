<script lang="ts">
	import { fmtDate } from '$lib/utils/blog.js';

	export let data;

	const posts = Object.entries(data.posts).sort(
		(a, b) => new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
	);
</script>

<div class="flex flex-col gap-4">
	{#each posts as [slug, post]}
		<a href="/blog/{slug}">
			<div class="card card-hover p-8 grid grid-cols-[auto_1fr] gap-4">
				<img src={post.image} alt="no image" class="w-full rounded-lg" />

				<div>
					<h1>{post.title}</h1>

					<p class="text-zinc-400 text-sm">{fmtDate(post.date)}</p>

					<p class="mt-4 text-zinc-300">{post.description}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

{#if Object.keys(data.posts).length === 0}
	<div class="flex justify-center items-center h-full">There's nothing here yet! :)</div>
{/if}
