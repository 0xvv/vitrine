<script lang="ts">
	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import * as t from './helper';
	import Table from './Table.svelte';

	export let cogMin = t.defaultCogMin;
	export let cogMax = t.defaultCogMax;
	export let chainMin = t.defaultChainMin;
	export let chainMax = t.defaultChainMax;

	let ambidextrous = t.ambidextrous;

	$: {
		cogMax;
		cogMin;
		chainMin;
		chainMax;
		ambidextrous;
		remakeTab();
	}

	let firstRow = t.make_list(chainMin, chainMax);
	let firstCol = t.make_list(cogMin, cogMax);
	let tableau = t.make_table_skid(cogMin, cogMax, chainMin, chainMax, firstCol, ambidextrous);

	function remakeTab() {
		firstRow = t.make_list(chainMin, chainMax);
		firstCol = t.make_list(cogMin, cogMax);
		tableau = t.make_table_skid(cogMin, cogMax, chainMin, chainMax, firstCol, ambidextrous);
	}
</script>

<h2>Skidpatches calculator</h2>
<div>
	<FormField>
		<Switch bind:checked={ambidextrous} />
		<span slot="label">Ambidextrous skitch</span>
	</FormField>
</div>
<Table {firstRow} {tableau} firstThres={0} secondThres={5} thirdThres={10} />
