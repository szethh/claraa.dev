export { default as TechIcon } from './tech-icon.svelte';
export { default as TechEntry } from './tech-entry.svelte';

export type Tech = {
	color: string;
	icon: string;
	link: string;
	name: string;
};

export type TechName = keyof typeof technologies;

export const technologies = {
	ts: {
		color: 'text-[#2d79c7]',
		icon: 'ts.png',
		link: 'https://typescriptlang.org/',
		name: 'TypeScript'
	},
	svelte: {
		color: 'text-orange-500',
		icon: 'svelte.png',
		link: 'https://kit.svelte.dev/',
		name: 'SvelteKit'
	},
	python: {
		color: 'text-sky-300',
		icon: 'python.png',
		link: 'https://python.org/',
		name: 'Python'
	},
	linkedin: {
		color: 'text-sky-600',
		icon: 'linkedin.png',
		link: 'https://linkedin.com/in/clara-periago/',
		name: 'LinkedIn'
	},
	effect: {
		color: 'text-white-600',
		icon: 'effect.svg',
		link: 'https://effect.website/',
		name: 'Effect'
	},
	docker: {
		color: 'text-[#1D63ED]',
		icon: 'docker.svg',
		link: 'https://docker.com/',
		name: 'Docker'
	},
	ansible: {
		color: 'text-white-600',
		icon: 'ansible.svg',
		link: 'https://ansible.com/',
		name: 'Ansible'
	},
	nix: { color: 'text-[#7EBAE4]', icon: 'nix.svg', link: 'https://nixos.org/', name: 'Nix' },
	azure: {
		color: 'text-[#37bcee]',
		icon: 'azure.svg',
		link: 'https://azure.microsoft.com/',
		name: 'Azure'
	}
} as const satisfies Record<string, Tech>;
