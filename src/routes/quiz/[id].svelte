<script lang="typescript">
	import { page } from '$app/stores';
	import Steps from '../../components/Steps.svelte';
</script>

<div class="hero block min-h-screen bg-base-200 ">
	<div class="flex flex-col justify-center">
		<div class="text-center font-bold mt-[1rem] text-lg md:text-3xl">
			<h2>Question {$page.params.id}</h2>
			<span class="font-medium text-sm md:hidden">out of 15</span>
		</div>
		<Steps step={parseInt($page.params.id)} />

		<div class=" m-[1rem] w-[max] h-[20rem] bg-base-300 rounded-lg flex flex-col">
			<div class="text-center font-bold mt-[1rem] text-lg md:text-3xl">
				<h3>What are you going to use <br />your System for?</h3>
                
			</div>
			<div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">Daily Use</span>
				</label>
			</div>
            <div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">Anonimity</span>
				</label>
			</div>
            <div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">Gaming</span>
				</label>
			</div>
            <div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">Isolation</span>
				</label>
			</div>
            <div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">User Experience</span>
				</label>
			</div>
            <div class="form-control mx-[1rem]">
				<label class="label cursor-pointer justify-start">
					<input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text text-left ml-[1rem]">Live Mode</span>
				</label>
			</div>
		</div>
		<a href={`/quiz/${parseInt($page.params.id) + 1}`} class="text-center"
			><button class="btn btn-primary">Next</button></a
		>
	</div>
</div>
