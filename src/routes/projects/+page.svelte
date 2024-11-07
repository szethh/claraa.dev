<script lang="ts">
	import { page } from '$app/stores';
	import Shader from '$lib/components/projects/shader.svelte';
	import Tabs, { type Tab } from '$lib/components/projects/tabs.svelte';
	import type { Page } from '@sveltejs/kit';
	import { Array, Option, pipe } from 'effect';

	const shaders = ['XcdyDn', 'Mc3cR7'];

	const tabs = [
		{ label: 'Shaders', hash: '#shaders', content: shaderSn },
		{ label: 'Homelab', hash: '#homelab', content: homelab }
	] satisfies Tab[];

	const getHashFromUrl = (page: Page) =>
		pipe(
			page.url.hash,
			(h) => Array.findFirstIndex(tabs, ({ hash }) => hash === h),
			Option.getOrElse(() => 0)
		);

	let tab: number = $state(getHashFromUrl($page));

	$effect(() => {
		const t = tabs[tab];
		if (!t) return;
		window.location.hash = t.hash;
	});
</script>

{#snippet homelab()}
	<div class="flex flex-col gap-4 items-center">
		<img
			src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVjMWpzdXVzZTF0eDE1NGg1aTd5bGM2cHpieHdhNjk0ZzE4a2JqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/maNB0qAiRVAty/giphy.gif"
			alt="gif: cat programming on a laptop"
		/>
		<p class="text-xl font-bold">WIP!</p>
		<p>Come back later!</p>
	</div>
{/snippet}

{#snippet shaderSn()}
	<p class="mb-4">
		Here are some of my shaders, mostly for fun and to learn more about GLSL and computer graphics.
		In no particular order.
	</p>

	<div class="grid lg:grid-cols-2 gap-2 w-full">
		{#each shaders as shader}
			<Shader shaderId={shader} />
		{/each}
	</div>
{/snippet}

<Tabs cls="h-full" {tabs} bind:selected={tab}></Tabs>
