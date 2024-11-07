<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		texts: { text: string; color?: string; duration?: number }[];
		duration?: number;
		pause?: number;
	}

	let { texts, duration = 100, pause = 3000 }: Props = $props();

	let charIdx = $state(0);
	let textIdx = $state(0);
	let currentText = $derived(texts[textIdx]);

	const next = () => {
		textIdx = (textIdx + 1) % texts.length;
		charIdx = 0;

		nextTimeout = undefined;
		typeInterval = setInterval(type, duration);
	};

	const type = () => {
		const lgt = currentText.text.length;

		if (charIdx < lgt) {
			charIdx++;
		} else {
			clearInterval(typeInterval);

			if (!nextTimeout) {
				nextTimeout = setTimeout(() => {
					typeInterval = setInterval(backspace, duration);
					nextTimeout = undefined;
				}, currentText.duration ?? pause);
			}
		}
	};

	const backspace = () => {
		if (charIdx >= 0) {
			charIdx--;
		} else {
			clearInterval(typeInterval);

			if (!nextTimeout) {
				nextTimeout = setTimeout(() => {
					next();
				}, 1000);
			}
		}
	};

	let nextTimeout = $state<NodeJS.Timeout>();
	let typeInterval = $state<NodeJS.Timeout>();

	onMount(() => {
		typeInterval = setInterval(type, duration);
	});
</script>

<div class="flex gap-1 justify-center">
	<div class={currentText.color}>
		{currentText.text.slice(0, charIdx + 1)}<span class="caret">|</span>
	</div>
</div>

<style>
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	.caret {
		color: white;
		animation: blink 1s infinite;
	}
</style>
