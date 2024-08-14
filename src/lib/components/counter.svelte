<script lang="ts">
	export let value: number = 0;
</script>

<button on:click={() => (value += 1)}>
	count is {value}
</button>
