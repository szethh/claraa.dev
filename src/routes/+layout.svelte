<script>
	import '../app.postcss';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
	<script defer data-domain="claraa.io" src="https://analytics.bnuuy.net/js/script.js"></script>
</svelte:head>

<!-- grid grid-rows-[auto_1fr_auto] -->
<div class="gap-6 flex flex-col min-h-svh">
	<Header />

	<main class="flex-grow mx-4 p-6">
		<slot />
	</main>

	<Footer />
</div>
