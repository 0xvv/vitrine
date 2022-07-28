<script>
	import Tableau from './Table.svelte';
	import * as t from './helper.ts';
	import Slider from '@smui/slider';

	export let cogMin = t.defaultCogMin;
	export let cogMax = t.defaultCogMax;
	export let chainMin = t.defaultChainMin;
	export let chainMax = t.defaultChainMax;
	export let wheelSize = t.defaultWheelSize;
	export let tireSize = t.defaultTireSize;
	let cadences = t.cadences;
	let chain = chainMax;

	$: {
		cogMax;
		cogMin;
		if (chain > chainMax) {
			chain = chainMax;
		}
		if (chain < chainMin) {
			chain = chainMin;
		}
		wheelSize;
		tireSize;
		remakeTab();
	}

	let firstRow = cadences;
	let firstCol = t.make_list(cogMin, cogMax);
	let tableau = t.make_table_cadence(
		cogMin,
		cogMax,
		chain,
		firstCol,
		wheelSize,
		tireSize,
		cadences
	);

	function remakeTab() {
		firstRow = cadences;
		firstCol = t.make_list(cogMin, cogMax);
		tableau = t.make_table_cadence(cogMin, cogMax, chain, firstCol, wheelSize, tireSize, cadences);
	}
</script>

<h2>Speed at cadence calculator (km/h)</h2>
{#if chainMax > chainMin}
	<Slider
		bind:value={chain}
		min={chainMin}
		max={chainMax}
		step={1}
		discrete
		tickMarks
		input$aria-label="Tick mark slider"
		style="margin-top: 1em"
	/>
{/if}
<h3>Chainring : {chain} teeth</h3>

<Tableau
	{firstRow}
	{tableau}
	firstThres={15}
	secondThres={20}
	thirdThres={25}
	columnsLabel="Cadences (rpm) >"
/>
