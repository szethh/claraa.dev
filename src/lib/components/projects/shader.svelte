<script lang="ts">
	interface Props {
		shaderId: string;
		width?: number;
		height?: number;
	}

	let { shaderId }: Props = $props();
</script>

<iframe
	title="shadertoy"
	class="w-full aspect-video"
	frameborder="0"
	src="https://www.shadertoy.com/embed/{shaderId}?gui=true&t=10&paused=false&muted=false"
	allowfullscreen
></iframe>
