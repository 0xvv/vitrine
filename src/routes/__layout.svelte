<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
</script>

<TopAppBar variant="static" style="padding: 0">
	<Row>
		<Section>
			<Title>Matt "double v"</Title>
		</Section>
		<Section align="end" toolbar>
			<Button href="https://github.com/0xvv">
				<Label>Github</Label>
			</Button>
			<Button href="https://twitter.com/0xvv_sec">
				<Label>Twitter</Label>
			</Button>
			<Button href="mailto:public_double_v@protonmail.com">
				<Label>Email</Label>
			</Button>
		</Section>
	</Row>
</TopAppBar>
<slot />
