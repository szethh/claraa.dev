<script lang="ts">
	import SiIcon from './si-icon.svelte';

	export let cls = '';
</script>

<div class="flex gap-4 {cls}">
	<a href="https://social.bnuuy.net/@clara" target="_blank" class="text-zinc-400">
		<SiIcon name="Mastodon" />
	</a>

	<a href="https://github.com/szethh" target="_blank" class="text-zinc-400">
		<SiIcon name="Github" />
	</a>

	<a href="https://linkedin.com/in/clara-periago" target="_blank" class="text-zinc-400">
		<SiIcon name="LinkedIn" />
	</a>
</div>
