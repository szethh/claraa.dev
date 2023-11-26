<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let darkMode = true;

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	// $: {
	// 	if (browser)
	// 		darkMode
	// 			? document.documentElement.classList.add('dark')
	// 			: document.documentElement.classList.remove('dark');
	// }
</script>

<div>
	<button on:click={() => (darkMode = !darkMode)}>
		{#if darkMode}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
</div>
