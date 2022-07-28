<script lang="ts">
	import Button, { Label } from '@smui/button';
</script>

<div class="center">
	<div class="container">
		<a href="/track" class="track"><h1>Useful links</h1></a>
		<Button variant="unelevated" href="https://github.com/0xvv">
			<Label>Github</Label>
		</Button>
		<Button variant="unelevated" href="https://twitter.com/0xvv_sec">
			<Label>Twitter</Label>
		</Button>
		<Button variant="unelevated" href="mailto:public_double_v@protonmail.com">
			<Label>Email</Label>
		</Button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 500px;
		justify-content: space-evenly;
		height: 300px;
	}

	.center {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	.track {
		color: inherit;
		text-decoration: inherit;
		cursor: inherit;
	}
</style>
