<script context="module">
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
	import Steps from '../../components/Steps.svelte';

	import quiz from './quiz.json';
	import Question from '../../components/Question.svelte';

	const updateId = () => {
		let query = new URLSearchParams($page.url.searchParams.toString());

		query.set('id', (parseInt($page.url.searchParams.get('id')) + 1).toString());

		goto(`?${query.toString()}`, {
			noscroll: true
		});
	};
	$: mountedClass = 'absolute';
	$: isMounted = true;
</script>

<div class="hero block min-h-screen bg-base-200 ">
	<div class="flex flex-col justify-center">
		<div class="text-center font-bold mt-[1rem] text-lg md:text-3xl">
			<h2>Question {$page.url.searchParams.get('id')}</h2>
			<span class="font-medium text-sm lg:hidden">out of 15</span>
		</div>
		<Steps
			step={parseInt(
				// @ts-ignore
				$page.url.searchParams.get('id')
			)}
		/>
		{#key $page.url.searchParams.get('id')}
			<Question id={parseInt($page.url.searchParams.get('id'))} />
		{/key}
		<div class="text-center relative ">
			<button
				on:click={() => {
					updateId();
				}}
				class="btn btn-primary mt-[1rem] sticky align-middle">Next</button
			>
		</div>
	</div>
</div>
