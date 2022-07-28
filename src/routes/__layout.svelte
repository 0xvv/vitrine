<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
</script>

<TopAppBar variant="static" style="padding: 0">
	<Row style="padding-left: 2em; padding-right: 2em">
		<Section>
			<Title>Matt "double v"</Title>
		</Section>
		<Section align="end">
			<a href="https://www.youtube.com/watch?v=FoUWHfh733Y" class="chill"
				><h4>Crypto and cyber security</h4></a
			>
		</Section>
	</Row>
</TopAppBar>
<slot />

<style lang="scss">
	.chill {
		color: inherit;
		text-decoration: inherit;
		cursor: inherit;
	}
</style>
