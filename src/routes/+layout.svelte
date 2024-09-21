<script>
	import '../app.postcss';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<!-- 
	to avoid adblockers blocking the analytics, we use Cloudflare workers to proxy the requests
	https://plausible.io/docs/proxy/guides/cloudflare
-->
<svelte:head>
	<script
		defer
		data-domain="claraa.io"
		data-api="https://ps.szeth.workers.dev/ps/api/event"
		src="https://ps.szeth.workers.dev/ps/js/index.js"
	></script>
	<a rel="me" href="https://social.bnuuy.net/@clara">Mastodon</a>
</svelte:head>

<!-- grid grid-rows-[auto_1fr_auto] -->
<div class="gap-6 flex flex-col min-h-svh">
	<Header />

	<main class="flex-grow mx-4 p-6">
		<slot />
	</main>

	<Footer />
</div>
