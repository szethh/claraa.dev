<script lang="ts">
	import Shader from '$lib/components/projects/shader.svelte';

	const shaders = ['XcdyDn', 'Mc3cR7'];
</script>

{#each shaders as shader}
	<Shader shaderId={shader} />
{/each}
