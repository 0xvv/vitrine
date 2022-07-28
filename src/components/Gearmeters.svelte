<script>
	import Tableau from './Table.svelte';
	import * as t from './helper.ts';

	export let cogMin = t.defaultCogMin;
	export let cogMax = t.defaultCogMax;
	export let chainMin = t.defaultChainMin;
	export let chainMax = t.defaultChainMax;
	export let wheelSize = t.defaultWheelSize;
	export let tireSize = t.defaultTireSize;

	$: {
		cogMax;
		cogMin;
		chainMin;
		chainMax;
		wheelSize;
		tireSize;
		remakeTab();
	}

	let firstRow = t.make_list(chainMin, chainMax);
	let firstCol = t.make_list(cogMin, cogMax);
	let tableau = t.make_table_meters(
		cogMin,
		cogMax,
		chainMin,
		chainMax,
		firstCol,
		wheelSize,
		tireSize
	);

	function remakeTab() {
		firstRow = t.make_list(chainMin, chainMax);
		firstCol = t.make_list(cogMin, cogMax);
		tableau = t.make_table_meters(
			cogMin,
			cogMax,
			chainMin,
			chainMax,
			firstCol,
			wheelSize,
			tireSize
		);
	}
</script>

<h2>Gear meters calculator (m/rev)</h2>

<Tableau {firstRow} {tableau} firstThres={4} secondThres={5} thirdThres={6} />
