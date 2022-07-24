<script>
	import Tableau from './Table.svelte'
	import * as t from './helper.ts'

	let optionsCog = t.optionsCog;
	let optionsChain = t.optionsChain;
	let optionsWheel = t.optionsWheel;
	let optionsTire = t.optionsTire;
	let defaultCogMin = t.defaultCogMin;
	let defaultCogMax = t.defaultCogMax;
	let defaultChainMin = t.defaultChainMin;
	let defaultChainMax = t.defaultChainMax;
	let defaultWheelSize = t.defaultWheelSize;
	let defaultTireSize = t.defaultTireSize;

	let firstRow = t.make_list(defaultChainMin, defaultChainMax);
	let firstCol = t.make_list(defaultCogMin, defaultCogMax);
	let tableau = t.make_table_meters(defaultCogMin, defaultCogMax, defaultChainMin, defaultChainMax, firstCol, defaultWheelSize, defaultTireSize);

	function remakeTab() {
		firstRow = t.make_list(defaultChainMin, defaultChainMax);
		firstCol = t.make_list(defaultCogMin, defaultCogMax);
		tableau = t.make_table_meters(defaultCogMin, defaultCogMax, defaultChainMin, defaultChainMax, firstCol, defaultWheelSize, defaultTireSize);
	}
</script>

<svelte:head>
	<title>Gear meters calculator</title>
</svelte:head>

<h2>Gear meters calculator</h2>

<Tableau {firstRow} {tableau} firstThres={4} secondThres={5} thirdThres={6}/>

