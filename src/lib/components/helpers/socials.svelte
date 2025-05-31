<script lang="ts">
	import SiIcon from './si-icon.svelte';

	interface Props {
		cls?: string;
	}

	let { cls = '' }: Props = $props();
</script>

<div class="flex gap-4 {cls}">
	<a href="https://mastodon.social/@clara_bnuuy" target="_blank" class="text-zinc-400">
		<SiIcon name="Mastodon" />
	</a>

	<a href="https://github.com/szethh" target="_blank" class="text-zinc-400">
		<SiIcon name="Github" />
	</a>

	<a href="https://linkedin.com/in/clara-periago" target="_blank" class="text-zinc-400">
		<SiIcon name="LinkedIn" />
	</a>

	<a href="/blog/feed.rss" target="_blank" class="text-zinc-400">
		<SiIcon name="Rss" />
	</a>
</div>
