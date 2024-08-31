<script lang="ts">
	import BlogPost from '$lib/components/blog/blog-post.svelte';

	export let data;
</script>

<main class="">
	<BlogPost page={data.page} post={data.post} />
</main>

<style>
	main {
		margin: auto 25%;
	}
</style>
