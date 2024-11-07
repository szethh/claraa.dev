<script module lang="ts">
	export type Tab = {
		label: string;
		hash: `#${string}`;
		content: Snippet;
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tabs: Tab[];
		cls?: string;
		selected?: number;
	}

	let { tabs, cls = '', selected = $bindable(0) }: Props = $props();

	let selectedTab: Tab | undefined = $derived(tabs[selected]);
</script>

<div class={cls}>
	<div class="flex gap-1 border-b-2 border-neutral-700 mb-2">
		{#each tabs as { label }, i}
			<button
				class="rounded-t-md py-2 pl-3 pr-10"
				class:tab-active={i === selected}
				onclick={() => (selected = i)}
			>
				{label}
			</button>
		{/each}
	</div>

	<div class="p-4">
		{#if selectedTab}
			{@render selectedTab.content()}
		{/if}
	</div>
</div>

<style lang="postcss">
	.tab-active {
		@apply bg-neutral-700;
	}
</style>
