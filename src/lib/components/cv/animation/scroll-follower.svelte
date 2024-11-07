<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		top?: number;
		children: Snippet;
	}

	let { top = 100, children }: Props = $props();

	let elem = $state<HTMLDivElement>();
	let stickyOffset: number;

	onMount(() => {
		if (elem) {
			stickyOffset = elem.offsetTop;
		}
	});

	function handleScroll() {
		const y = window.scrollY;

		if (!elem) return;

		if (y >= stickyOffset - top) {
			const dist = (stickyOffset - y) / stickyOffset;
			elem.style.opacity = `${Math.max(0, Math.min(1, dist))}`;
		} else {
			elem.style.opacity = '1';
		}
	}
</script>

<svelte:window onscroll={handleScroll} />

<div bind:this={elem}>
	{@render children()}
</div>
