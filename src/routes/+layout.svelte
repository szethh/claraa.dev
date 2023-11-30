<script>
	import '../app.postcss';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="grid grid-rows-[auto_1fr_auto] p-6 mx-4 gap-6">
	<Header />

	<main class="">
		<slot />
	</main>

	<Footer />
</div>
