<script lang="ts">
	import TechIcon from './tech-icon.svelte';
	import Stars from './stars.svelte';
	import { technologies, type TechName } from '.';

	export let name: TechName;
	export let stars: number;

	const tech = technologies[name];
</script>

<div class="">
	<div class="grid gap-y-3 md:grid-cols-2">
		<TechIcon {name} cls="text-xl" />
		<div class="md:justify-self-end">
			<Stars {stars} />
		</div>
	</div>
	<hr class="mt-2 border-slate-600" />

	<slot />
</div>
