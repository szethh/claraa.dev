<!--
	Svelte 5 implementation of Saos
	(https://github.com/shiryel/saos)
-->
<script lang="ts">
	import { createEventDispatcher, onMount, type EventDispatcher, type Snippet } from 'svelte';

	interface Props {
		animation?: string;
		animation_out?: string;
		once?: boolean;
		top?: number;
		bottom?: number;
		css_observer?: string;
		css_animation?: string;
		children: Snippet;
		update?: ({ observing }: { observing: boolean }) => void;
	}

	let {
		animation = 'none',
		animation_out = 'none; opacity: 0',
		once = false,
		top = 0,
		bottom = 0,
		css_observer = '',
		css_animation = '',
		children,
		update = () => {}
	}: Props = $props();

	// cute litle reactive dispatch to get if is observing :3
	$effect(() => {
		update({ observing });
	});

	// be aware... he's looking...
	let observing = $state(true);

	// for some reason the 'bind:this={box}' on div stops working after npm run build... so... workaround time >:|
	const countainer = `__saos-${Math.random()}__`;
	let elem = $state<HTMLElement>();

	/// current in experimental support, no support for IE (only Edge)
	/// see more in: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
	function intersection_verify(box: HTMLElement) {
		// bottom left top right
		const rootMargin = `${-bottom}px 0px ${-top}px 0px`;

		const observer = new IntersectionObserver(
			(entries) => {
				observing = entries[0].isIntersecting;
				if (observing && once) {
					observer.unobserve(box);
				}
			},
			{
				rootMargin
			}
		);

		observer.observe(box);
		return () => observer.unobserve(box);
	}

	/// Fallback in case the browser not have the IntersectionObserver
	function bounding_verify(box: HTMLElement) {
		const c = box.getBoundingClientRect();
		observing = c.top + top < window.innerHeight && c.bottom - bottom > 0;

		if (observing && once) {
			window.removeEventListener('scroll', () => bounding_verify(box));
		}

		window.addEventListener('scroll', () => bounding_verify(box));
		return () => window.removeEventListener('scroll', () => bounding_verify(box));
	}

	onMount(() => {
		// for some reason the 'bind:this={box}' on div stops working after npm run build... so... workaround time >:|
		const box = document.getElementById(countainer);
		if (!box) return;
		if (!elem) {
			console.warn('waaaa');
			return;
		}

		if (IntersectionObserver) {
			return intersection_verify(elem);
		} else {
			return bounding_verify(elem);
		}
	});
</script>

<div id={countainer} bind:this={elem} style={css_observer}>
	{#if observing}
		<div style="animation: {animation}; {css_animation}">
			{@render children()}
		</div>
	{:else}
		<div style="animation: {animation_out}; {css_animation}">
			{@render children()}
		</div>
	{/if}
</div>
