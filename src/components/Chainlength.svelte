<script lang="ts">
	import * as t from './helper.ts';
	import CustomSelect from './CustomSelect.svelte';
	import Textfield from '@smui/textfield';
	import Paper, { Title } from '@smui/paper';

	let pitch = 12.7;
	let chainringTeethCount = 48;
	let sprocketTeethCount = 16;
	let distance = 400;

	$: chainLength =
		Math.round(
			t.calculate_chain_length(pitch, chainringTeethCount, sprocketTeethCount, distance) * 100
		) / 100;
	$: chainLinkCount = Math.round((chainLength * 100) / pitch) / 100;
	$: gearRatio = Math.round((chainringTeethCount * 100) / sprocketTeethCount) / 100;
</script>

<div class="container column">
	<div class="container">
		<Textfield variant="outlined" bind:value={pitch} label="Pitch (mm)" />
		<Textfield variant="outlined" bind:value={distance} label="Distance (mm)" />
		<CustomSelect
			bind:value={sprocketTeethCount}
			options={t.optionsCog}
			helper={'Cog tooth count'}
		/>
		<CustomSelect
			bind:value={chainringTeethCount}
			options={t.optionsChain}
			helper={'Chainring tooth count'}
		/>
	</div>
	<div class="container">
		<Paper variant="outlined">
			<Title>Chain length</Title>
			<Title>{chainLength} mm</Title>
		</Paper>
		<Paper variant="outlined">
			<Title>Chain links count</Title>
			<Title>{chainLinkCount}</Title>
		</Paper>
		<Paper variant="outlined">
			<Title>GearRatio</Title>
			<Title>{gearRatio}</Title>
		</Paper>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding-top: 2em;
		width: 1100px; //lol
	}

	.column {
		flex-direction: column;
	}
</style>
