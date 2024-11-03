<script lang="ts">
	import type { Snippet } from 'svelte';
	import { type Tech, type TechName, technologies } from '.';

	interface Props {
		name: TechName;
		cls?: string;
		children?: Snippet;
	}

	let { name, cls = '', children }: Props = $props();

	const tech: Tech = technologies[name];
</script>

<a href={tech.link} target="_blank" class="whitespace-nowrap gap-1">
	{#if tech.icon}
		<img
			class="ml-1 mb-1 h-[1.5em] aspect-square inline"
			src="/pics/logos/{tech.icon}"
			alt="{name} logo"
		/>
	{/if}

	<span class="{cls} {tech.color} hover:underline whitespace-nowrap"
		>{#if children}{@render children()}{:else}{tech.name}{/if}</span
	>
</a>
