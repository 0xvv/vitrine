<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
</script>

<TopAppBar variant="static" style="padding: 0">
	<Row style="padding-left: 2em; padding-right: 2em">
		<Section>
			<a href="/" class="link"><Title>Matt "double v"</Title></a>
		</Section>
		<Section align="end">
			<a href="https://www.youtube.com/watch?v=FoUWHfh733Y" class="secret link"
				><h4>Crypto and cyber security</h4></a
			>
		</Section>
	</Row>
</TopAppBar>
<slot />

<style lang="scss">
	.link {
		color: inherit;
		text-decoration: inherit;
	}

	.secret {
		cursor: inherit;
	}
</style>
