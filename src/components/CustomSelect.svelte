<script lang="ts">
	import Select, { Option } from '@smui/select';

	export let value;
	export let options;
	export let helper;
</script>

<div>
	<Select variant="outlined" bind:value style="width: 75%">
		{#each options as option}
			<Option value={option}>{option}</Option>
		{/each}
		<svelte:fragment slot="helperText">{helper}</svelte:fragment>
	</Select>
</div>
