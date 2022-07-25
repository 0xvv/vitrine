<script lang="ts">
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Gearmeters from '../components/Gearmeters.svelte';
	import * as t from '../components/helper.ts';
	import CustomSelect from '../components/CustomSelect.svelte';
	import GearRatio from '../components/GearRatio.svelte';
	import Cadence from '../components/Cadence.svelte';

	let tabs = [
		{
			k: 1,
			icon: 'straighten',
			label: 'Gear Meters'
		},
		{
			k: 2,
			icon: 'settings',
			label: 'Gear Ratio'
		},
		{
			k: 3,
			icon: 'change_circle',
			label: 'Cadence'
		},
		{
			k: 4,
			icon: 'tire_repair',
			label: 'Skid patches'
		}
	];
	let active = tabs[0];

	let cogMin = t.defaultCogMin;
	let cogMax = t.defaultCogMax;
	let chainMin = t.defaultChainMin;
	let chainMax = t.defaultChainMax;
	let wheelSize = t.defaultWheelSize;
	let tireSize = t.defaultTireSize;

	let params;
	$: params = {
		cogMin: cogMin,
		cogMax: cogMax,
		chainMin: chainMin,
		chainMax: chainMax,
		wheelSize: wheelSize,
		tireSize: tireSize
	};
</script>

<div class="center">
	<div class="container wide">
		<h1>"Secret" track bike calculator</h1>
		<div class="container row">
			<CustomSelect bind:value={cogMin} options={t.optionsCog} helper={'Min cog tooth count'} />
			<CustomSelect bind:value={cogMax} options={t.optionsCog} helper={'Max cog tooth count'} />
			<CustomSelect
				bind:value={chainMin}
				options={t.optionsChain}
				helper={'Min chain tooth count'}
			/>
			<CustomSelect
				bind:value={chainMax}
				options={t.optionsChain}
				helper={'Max chain tooth count'}
			/>
			<CustomSelect bind:value={wheelSize} options={t.optionsWheel} helper={'Wheel size (mm)'} />
			<CustomSelect bind:value={tireSize} options={t.optionsTire} helper={'Tire size'} />
		</div>
		<div style="padding-top: 1em">
			<TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>
				<Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
					<Icon class="material-icons">{tab.icon}</Icon>
					<Label>{tab.label}</Label>
				</Tab>
			</TabBar>
		</div>

		<div class="center">
			<div class="container">
				{#if active.k === 1}
					<Gearmeters {...params} />
				{:else if active.k === 2}
					<GearRatio {...params} />
				{:else if active.k === 3}
					<Cadence {...params} />
				{:else if active.k === 4}
					<h1>Comment ça va</h1>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.row {
		flex-direction: row;
	}

	.wide {
		width: 90%;
	}

	.center {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
</style>
