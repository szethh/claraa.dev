<script lang="ts">
	export let name: keyof typeof technologies;
	export let cls = '';

	type Tech = {
		color: string;
		icon: string;
		link: string;
	};
	const technologies = {
		ts: { color: 'text-[#2d79c7]', icon: 'ts.png', link: 'https://typescriptlang.org/' },
		svelte: { color: 'text-orange-500', icon: 'svelte.png', link: 'https://kit.svelte.dev/' },
		python: { color: 'text-sky-300', icon: 'python.png', link: 'https://python.org/' },
		linkedin: {
			color: 'text-sky-600',
			icon: 'linkedin.png',
			link: 'https://linkedin.com/in/clara-periago/'
		},
		effect: { color: 'text-white-600', icon: 'effect.svg', link: 'https://effect.website/' },
		docker: { color: 'text-[#1D63ED]', icon: 'docker.svg', link: 'https://docker.com/' },
		ansible: { color: 'text-white-600', icon: 'ansible.svg', link: 'https://ansible.com/' },
		nix: { color: 'text-[#7EBAE4]', icon: 'nix.svg', link: 'https://nixos.org/' },
		azure: { color: 'text-[#37bcee]', icon: 'azure.svg', link: 'https://azure.microsoft.com/' }
	} as const satisfies Record<string, Tech>;

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

	<span class="{cls} {tech.color} hover:underline whitespace-nowrap"><slot /></span>
</a>
