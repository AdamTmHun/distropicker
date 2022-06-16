<script lang="ts">
	export let id: number;

	import quiz from '../routes/quiz/quiz.json';
</script>

<div class="lg:flex lg:justify-center inline-block">
	<div class=" m-[1rem] w-[max] h-[min] bg-base-300 rounded-lg flex flex-col lg:w-[60%] mt-[4rem]">
		<div class="text-center font-bold mt-[1rem] text-lg md:text-2xl lg:text-3xl mx-[10px]">
			<h3>{quiz.main[id - 1].question}</h3>
		</div>
		{#if quiz.main[id - 1].type === 'multiple'}
			<span class="italic text-center text-2xs md:text-sm lg:text-lg mt-[4px]"
				>You can select multiple answers</span
			>
			{#each quiz.main[id - 1].answers as answer}
				<div class="label justify-start my-[-0.5rem]">
					<div class="form-control mx-[1rem]">
						<label class="label cursor-pointer justify-start">
							<input type="checkbox" class="checkbox checkbox-primary" />
							<span class="label-text text-left ml-[1rem] lg:text-lg">{answer.answer}</span>
						</label>
					</div>
					{#if answer.tooltip}
						<div class="tooltip tooltip-left lg:!tooltip" data-tip={answer.tooltip}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="stroke-primary flex-shrink-0 w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
						</div>
					{/if}
				</div>
			{/each}
		{:else if quiz.main[id - 1].type === 'single'}
			<span class="italic text-center text-2xs md:text-sm lg:text-lg mt-[4px]"
				>Please select only one answer</span
			>
			{#each quiz.main[id - 1].answers as answer}
				<div class="label relative justify-start my-[-0.5rem]">
					<div class="form-control mx-[1rem]">
						<label class="label cursor-pointer justify-start">
							<input type="radio" name="radio-6" class="radio radio-primary" />
							<span class="label-text text-left ml-[1rem] lg:text-lg">{answer.answer}</span>
						</label>
					</div>
					{#if answer.tooltip}
						<div class="tooltip tooltip-left lg:tooltip" data-tip={answer.tooltip}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="stroke-primary flex-shrink-0 w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
						</div>
					{/if}
				</div>
			{/each}
		{:else if quiz.main[id - 1].type === 'rangeSteps'}
			<span class="italic text-center text-2xs md:text-sm lg:text-lg mt-[4px]"
				>Please choose a value on the range.</span
			>
			<div class="m-[2rem] text-center">
				
				<input type="range" min="0" max="75" value="25" class="range" step="25" />
				<div class="w-full flex justify-between text-xs px-2 ">
					{#each quiz.main[id - 1].answers as answer}
						<span>{answer.answer}</span>
					{/each}
					
				</div>
				<div class="w-full flex justify-between text-xs px-2 ">
					{#each quiz.main[id - 1].answers as answer}
						<span></span>
					{/each}
					
				</div>
				
			</div>
		{/if}
		<div class="mb-[0.5rem]" />
	</div>
</div>
