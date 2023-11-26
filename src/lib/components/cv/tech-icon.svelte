<script lang="ts">
	export let name: keyof typeof technologies;
	export let cls = '';

	const technologies = {
		ts: { color: 'text-sky-600', icon: 'ts.png' },
		svelte: { color: 'text-orange-500', icon: 'svelte.png' },
		python: { color: 'text-sky-600', icon: 'python.png' },
		linkedin: { color: 'text-sky-600', icon: 'linkedin.png' }
	};

	const tech = technologies[name];
</script>

<span class=" items-center gap-1">
	{#if tech.icon}
		<img
			class="ml-1 mb-1 h-[1.5em] aspect-square inline"
			src="/pics/logos/{tech.icon}"
			alt="{name} logo"
		/>
	{/if}

	<span class="{cls} {tech.color}"><slot /></span>
</span>
