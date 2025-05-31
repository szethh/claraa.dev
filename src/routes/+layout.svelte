<script lang="ts">
	import '../app.postcss';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	import { DOMAIN } from '$lib/config';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<!-- 
	to avoid adblockers blocking the analytics, we use Cloudflare workers to proxy the requests
	https://plausible.io/docs/proxy/guides/cloudflare
-->
<svelte:head>
	<script
		defer
		data-domain={DOMAIN}
		data-api="https://ps.szeth.workers.dev/ps/api/event"
		src="https://ps.szeth.workers.dev/ps/js/index.js"
	></script>
	<link rel="me" href="https://mastodon.social/@clara_bnuuy" />
</svelte:head>

<!-- grid grid-rows-[auto_1fr_auto] -->
<div class="gap-6 flex flex-col min-h-svh">
	<Header />

	<main class="flex-grow mx-4 p-6">
		{@render children()}
	</main>

	<Footer />
</div>
