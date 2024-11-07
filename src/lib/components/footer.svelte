<script lang="ts">
	import { DOMAIN } from '$lib/config';
	import Socials from './helpers/socials.svelte';
</script>

<footer class="grid grid-cols-3 items-center py-4 px-12 bg-stone-800">
	<div class="flex flex-col items-center gap-2 col-start-2">
		<a
			href="https://github.com/szethh/{DOMAIN}"
			target="_blank"
			class="brightness-75 max-md:text-center"
		>
			<span class="text-nowrap">Clara Periago</span> @ {new Date().getFullYear()}
		</a>
	</div>

	<Socials cls="md:col-start-3 col-start-2 max-md:mt-4 justify-self-center md:justify-self-end" />
</footer>
