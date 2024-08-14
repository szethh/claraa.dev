<script lang="ts">
	export let stars = 0;

	$: remainder = ((stars - Math.floor(stars)) * 100).toPrecision(2);
</script>

<div class="flex gap-1">
	{#each Array(5) as _, i}
		{@const fill = i <= stars - 1 ? 'white' : 'none'}

		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
			<polygon
				points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
				{fill}
				stroke="currentColor"
				stroke-width="2"
			/>

			{#if i < stars}
				<polygon
					id="half-fill"
					points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
					fill="white"
					clip-path="polygon(0 0, {remainder}% 0, {remainder}% 100%, 0 100%)"
				/>
			{/if}
		</svg>
	{/each}
</div>
