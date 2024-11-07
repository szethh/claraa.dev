<script lang="ts">
	import BlogPost from '$lib/components/blog/blog-post.svelte';

	let { data } = $props();
</script>

<main class="md:mx-[25%]">
	<BlogPost page={data.page} post={data.post} />
</main>
