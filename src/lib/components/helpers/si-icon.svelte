<script lang="ts">
	import { siMastodon, siGithub, siLinkedin, siRss, type SimpleIcon } from 'simple-icons';

	const icons = {
		Mastodon: siMastodon,
		Github: siGithub,
		LinkedIn: siLinkedin,
		Rss: siRss
	} as const satisfies Record<string, SimpleIcon>;

	export let name: keyof typeof icons;
	export let cls = '';

	const icon = icons[name];
</script>

<svg
	role="img"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	height="24px"
	width="24px"
	class="h-6 w-6 {cls}"
>
	<title>{name}</title>
	<path d={icon.path} fill="currentColor" />
</svg>
