<script lang="ts">
	import Button, { Label } from '@smui/button';
</script>

<div class="center">
	<div class="container">
		<h1>Useful links</h1>
		<Button variant="unelevated" href="https://github.com/0xvv">
			<Label>Github</Label>
		</Button>
		<Button variant="unelevated" href="https://twitter.com/0xvv_sec">
			<Label>Twitter</Label>
		</Button>
		<Button variant="unelevated" href="mailto:public_double_v@protonmail.com">
			<Label>Email</Label>
		</Button>
		<p>
			<a href="https://www.youtube.com/watch?v=FoUWHfh733Y"
				>Drink all the booze, hack all the things</a
			>
		</p>
		<p>
			<a href="/track">Secret track bike calculator</a>
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 500px;
		justify-content: space-evenly;
		height: 450px;
	}

	.center {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
</style>
