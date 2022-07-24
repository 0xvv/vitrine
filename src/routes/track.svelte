<script lang="ts">
	import Tab, {Icon, Label} from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Gearmeters from "../components/Gearmeters.svelte";

	let tabs = [
		{
			k: 1,
			icon: 'straighten',
			label: 'Gear Meters',
		},
		{
			k: 2,
			icon: 'settings',
			label: 'Gear Ratio',
		},
		{
			k: 3,
			icon: 'change_circle',
			label: 'Cadence',
		},
		{
			k: 4,
			icon: 'tire_repair',
			label: 'Skid patches',
		},
	];
	let active = tabs[0];
</script>

<div class="center">
	<div class="container wide">
		<h1>"Secret" track bike calculator</h1>
		<div>
			<TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>
				<Tab
					{tab}
					stacked={true}
					indicatorSpanOnlyContent={true}
					tabIndicator$transition="fade"
				>
					<Icon class="material-icons">{tab.icon}</Icon>
					<Label>{tab.label}</Label>
				</Tab>
			</TabBar>
		</div>

		<div class="center">
			<div class="container">
				{#if active.k === 1}
					<Gearmeters/>
				{:else if active.k === 2}
					<h1>what's up dawg</h1>
				{:else if active.k === 3}
					<h1>wazzaaaaa</h1>
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

	.wide {
		width: 90%;
	}

	.center {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
</style>
