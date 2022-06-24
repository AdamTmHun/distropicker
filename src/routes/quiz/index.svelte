<script context="module">
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Steps from '../../components/Steps.svelte';
	import { fly } from 'svelte/transition';
	import { expoInOut } from "svelte/easing"

	import quiz from './quiz.json';
	import Question from '../../components/Question.svelte';

	const updateId = () => {
		if (parseInt($page.url.searchParams.get('id') as string) >= quiz.main.length) {
			return goto(`/`);
		}
		let query = new URLSearchParams($page.url.searchParams.toString());

		query.set('id', (parseInt($page.url.searchParams.get('id')) + 1).toString());

		goto(`?${query.toString()}`, {
			noscroll: true
		});
	};
	let shouldBeVisible = true;
	const handleChange = () => {
		shouldBeVisible = false;
		updateId()
	}
	
</script>

<div class="hero block min-h-screen bg-base-200 ">
	<div class="!overflow-x-hidden flex flex-col justify-center">
		<div class="text-center font-bold mt-[1rem] text-lg md:text-3xl mb-[-3rem] lg:mb-[0]">
			<h2>Question {$page.url.searchParams.get('id')}</h2>
			<span class="font-medium text-sm lg:hidden">out of 15</span>
		</div>
		<Steps step={parseInt($page.url.searchParams.get('id'))} />
		{#if shouldBeVisible}
			<div class="!overflow-x-hidden" in:fly="{{ x: 200, duration: 1000, easing: expoInOut }}" out:fly|local="{{ x: -200, duration: 1000, easing: expoInOut }}" on:outroend="{() => shouldBeVisible = true}">
				<Question id={parseInt($page.url.searchParams.get('id'))} />
			</div>
		{/if}
		<div
			class="fixed bg-base-300 w-[99%] bottom-[0%] h-[4rem] rounded-2xl mb-[0.5rem] ml-[0.5%] flex justify-center shadow-2xl"
		>
			<div class="text-center relative ">
				<button
					on:click={() => {
						handleChange();
					}}
					class="btn btn-primary mt-2">Next</button
				>
				<button
					on:click={() => {
						updateId();
					}}
					class="btn bg-transparent hover:bg-primary border-primary hover:border-primary mt-2"
					>skip</button
				>
			</div>
		</div>
		<div
			class=" bg-transparent w-[99%] bottom-[0%] h-[4rem] rounded-2xl mb-[0.5rem] ml-[0.5%] flex justify-center"
		/>
	</div>
</div>
