<script>
	import ThemeSwitch from './theme-switch.svelte';
</script>

<nav class="flex justify-between p-2">
	<a href="/"><b>Home</b></a>

	<ThemeSwitch />
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
