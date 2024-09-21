<script lang="ts">
	import BlogPost from '$lib/components/blog/blog-post.svelte';

	export let data;
</script>

<main class="md:mx-[25%]">
	<BlogPost page={data.page} post={data.post} />
</main>
