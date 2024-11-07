<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown, Info, TriangleAlert, CircleX } from 'lucide-svelte';
	import type { ComponentType, Snippet } from 'svelte';

	interface Props {
		iconSlot?: Snippet;
		title?: Snippet;
		content?: Snippet;
		collapsible?: boolean;
		open?: boolean;
		icon?: IconLabel;
		style?: Style;
	}

	const iconMap = {
		info: { icon: Info, color: 'bg-blue-600' },
		warning: { icon: TriangleAlert, color: 'bg-yellow-600' },
		error: { icon: CircleX, color: 'bg-red-600' }
	} satisfies Record<IconLabel, Style>;

	let {
		iconSlot,
		title,
		content,
		collapsible = false,
		open = !collapsible,
		icon = 'info',
		style = iconMap[icon]
	}: Props = $props();

	type IconLabel = 'info' | 'warning' | 'error';
	type Style = { icon: ComponentType; color: `bg-${string}` };

	const handleClick = () => {
		if (collapsible) open = !open;
	};

	const borderColor = $derived(style.color.replace('bg-', 'border-'));
	const IconComponent = $derived(style.icon);
</script>

<div class="rounded-md border-2 {borderColor}">
	<button
		onclick={handleClick}
		class="w-full grid grid-cols-[auto_1fr_auto] gap-2 items-center bg-clip-padding p-4 {style.color}"
		class:cursor-default={!collapsible}
	>
		{#if iconSlot}
			{@render iconSlot()}
		{:else if style.icon}
			<IconComponent class="h-6 w-6 text-white" />
		{:else}
			Icon not found
		{/if}

		<!-- <hr class="not-prose" /> -->

		<div class="text-start text-white">
			{#if title}
				{@render title()}
			{:else}
				Title
			{/if}
		</div>

		<div class="transition-transform text-white" class:rotate-90={!open}>
			{#if collapsible}
				<ChevronDown class="h-6 w-6" />
			{/if}
		</div>
	</button>

	{#if open}
		<div transition:slide class="py-4 px-4">
			{#if content}
				{@render content()}
			{:else}
				Content
			{/if}
		</div>
	{/if}
</div>
