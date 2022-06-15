<script lang="ts">
	export let message: string;
	export let status: number;
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="">
			<h1 class="text-5xl md:text-7xl font-bold">Something went terribly wrong</h1>
			<p class="py-6">
				We are working to resolve this issue. If you are a nerd 🤓, you can view the error message
				below.
			</p>
			<div
				tabindex="0"
				class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
			>
				<div class="collapse-title text-xl font-medium">Error Stack</div>
				<div class="collapse-content">
					<p>{status}: {message}</p>
				</div>
			</div>
			<a href="/"><button class="btn btn-primary">Back to Home</button></a>
		</div>
	</div>
</div>
