<script lang="ts">
	import Button, {Label} from '@smui/button';
</script>

<div class="col">

	<div class="center">
		<div class="col container">
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
	<div class="center">

		<div class="container">
			<h2>Notable work</h2>
			<p>Contribution to <a href="https://github.com/foundry-rs">foundry-rs</a></p>
			<p>Example code for <a href="https://github.com/foundry-rs">snowsight</a> use in Rust</p>
		</div>
	</div>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.container {
		width: 500px;
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
