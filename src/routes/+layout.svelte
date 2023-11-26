<script>
	import '../app.postcss';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="grid grid-rows-[auto_1fr_auto] h-full p-6 mx-4 gap-6">
	<Header />

	<main class="mx-8">
		<slot />
	</main>

	<Footer />
</div>
