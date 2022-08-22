<script lang="ts">
	import Button, { Label } from '@smui/button';
</script>

<div class="col">
	<div class="center">
		<div style="width: 1000px">
			<h2>I'm looking for work</h2>
			<p>
				I have a vast cyber security culture both in web3 and web2 built over years and more
				recently fell down the MEV rabbit hole.
			</p>
			<p>
				I think i would be a good fit in blockchain security, MEV or an adjacent field, thanks to my
				adversarial mindset and natural interest about these topics
			</p>
			<p>My goal is to help build better, more secure software and enhance user experience</p>
			<p>
				Don't hesitate to contact me to chat or if you want my resume, see Twitter or Email below.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="center">
			<div class="container">
				<h2>Notable work</h2>
				<p>Contributions to <a href="https://github.com/foundry-rs">foundry-rs</a></p>
				<p>
					Basic Rust client for <a href="https://docs.snowsight.chainsight.dev/"
						>snowsight mempool streaming service</a
					>
				</p>
				<p>
					Scored 32nd in <a href="https://ctf.paradigm.xyz">Paradigm CTF 2022</a> with the
					<a href="https://skidsdao.xyz">SkidsDAO team</a>
				</p>
			</div>
		</div>
		<div class="center">
			<div class="col container start">
				<a href="/track" class="track"><h2>Useful links</h2></a>
				<div class="row gap">
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
		</div>
	</div>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.start {
		justify-content: flex-start;
	}

	.container {
		width: 500px;
		height: 200px;
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

	.row {
		display: flex;
		justify-content: center;
	}

	.gap {
		padding-top: 2em;
		gap: 1em;
	}
</style>
