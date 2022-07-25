<script>
	import Tableau from './Table.svelte';
	import * as t from './helper.ts';

	export let cogMin = t.defaultCogMin;
	export let cogMax = t.defaultCogMax;
	export let chainMin = t.defaultChainMin;
	export let chainMax = t.defaultChainMax;

	$: {
		cogMax;
		cogMin;
		chainMin;
		chainMax;
		remakeTab();
	}

	let firstRow = t.make_list(chainMin, chainMax);
	let firstCol = t.make_list(cogMin, cogMax);
	let tableau = t.make_table_ratio(cogMin, cogMax, chainMin, chainMax, firstCol);

	function remakeTab() {
		firstRow = t.make_list(chainMin, chainMax);
		firstCol = t.make_list(cogMin, cogMax);
		tableau = t.make_table_ratio(cogMin, cogMax, chainMin, chainMax, firstCol);
	}
</script>

<svelte:head>
	<title>Gear Ratio calculator</title>
</svelte:head>

<h2>Gear Ratio calculator</h2>

<Tableau {firstRow} {tableau} firstThres={2} secondThres={2.5} thirdThres={3} />
