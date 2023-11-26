<script lang="ts">
	import { onMount } from 'svelte';

	export let top = 100;

	let elem: HTMLDivElement;
	let stickyOffset: number;

	onMount(() => {
		stickyOffset = elem.offsetTop;
	});

	function handleScroll() {
		const y = window.scrollY;

		if (y >= stickyOffset - top) {
			const dist = (stickyOffset - y) / stickyOffset;
			elem.style.opacity = `${Math.max(0, Math.min(1, dist))}`;
		} else {
			elem.style.opacity = '1';
		}
	}
</script>

<svelte:window on:scroll={handleScroll} />

<div bind:this={elem}>
	<slot />
</div>

<style>
</style>
