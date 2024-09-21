<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown, Info, TriangleAlert, CircleX } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	export let collapsible = false;
	export let open = !collapsible;

	type IconLabel = 'info' | 'warning' | 'error';
	type Style = { icon: ComponentType; color: `bg-${string}` };
	export let icon: IconLabel = 'info';

	const iconMap = {
		info: { icon: Info, color: 'bg-blue-600' },
		warning: { icon: TriangleAlert, color: 'bg-yellow-600' },
		error: { icon: CircleX, color: 'bg-red-600' }
	} satisfies Record<IconLabel, Style>;

	export let style: Style = iconMap[icon];

	const handleClick = () => {
		if (collapsible) open = !open;
	};

	$: borderColor = style.color.replace('bg-', 'border-');
</script>

<div class="rounded-md border-2 {borderColor}">
	<button
		on:click={handleClick}
		class="w-full grid grid-cols-[auto_1fr_auto] gap-2 items-center bg-clip-padding p-4 {style.color}"
		class:cursor-default={!collapsible}
	>
		<slot name="icon">
			{#if style.icon}
				<svelte:component this={style.icon} class="h-6 w-6 text-white" />
			{:else}
				Icon not found
			{/if}
		</slot>

		<!-- <hr class="not-prose" /> -->

		<div class="text-start text-white">
			<slot name="title">Title</slot>
		</div>

		<div class="transition-transform text-white" class:rotate-90={!open}>
			{#if collapsible}
				<ChevronDown class="h-6 w-6" />
			{/if}
		</div>
	</button>

	{#if open}
		<div transition:slide class="py-4 px-4">
			<slot name="content">Content</slot>
		</div>
	{/if}
</div>
