<script lang="ts">
	import { blur } from 'svelte/transition';
	export let firstRow;
	export let tableau;
	export let firstThres;
	export let secondThres;
	export let thirdThres;
	export let columnsLabel = 'Chainring >';
</script>

<div in:blur={{ amount: 10, duration: 300 }} class="tablearea">
	<table>
		<thead in:blur={{ amount: 10, duration: 300 }}>
			<tr in:blur={{ amount: 10, duration: 300 }}>
				{#each firstRow as item, i}
					{#if i === 0}
						<th in:blur={{ amount: 10, duration: 300 }}> {columnsLabel}<br /> Cog v</th>
					{:else}
						<th in:blur={{ amount: 10, duration: 300 }}>{item}</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody in:blur={{ amount: 10, duration: 300 }}>
			{#each tableau as row}
				<tr in:blur={{ amount: 10, duration: 300 }}>
					{#each row as item, i}
						{#if i === 0}
							<th>{item}</th>
						{:else if item > thirdThres}
							<td class="table-success">{item}</td>
						{:else if item > secondThres}
							<td class="table-warning">{item}</td>
						{:else if item > firstThres}
							<td class="table-danger">{item}</td>
						{:else}
							<td>{item}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	@use 'src/theme/colors' as c;

	td,
	th {
		padding: 7px;
		text-align: center;
		border: none;
	}

	.tablearea {
		margin-top: 1em;
	}

	.table-success {
		background: c.$green;
		color: c.$bg;
	}

	.table-warning {
		background: c.$orange;
	}

	.table-danger {
		background: c.$red;
	}
</style>
