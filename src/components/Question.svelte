<script lang="ts">
	export let id: number;
	import wait from 'wait';
	import quiz from '../routes/quiz/quiz.json';
	import { answers as answerStore } from '../stores/answers';
	let rangeValue = 25;
	let index = 0;
	let val = 0;
	let refresh = false;

	let borders = ['transparent', 'transparent', 'transparent', 'transparent'];

	let a = [
		[false, false, false],
		[false, false, false, false],
		[false, false, false],
		[false, false, false, false, false, false],
		[false, false, false, false],
		[false, false, false],
		[false, false, false],
		[false, false, false, false, false],
		[false, false, false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false]
	];
	$: {
		$answerStore.installation.daily = +a[0][0];
		$answerStore.installation.gaming = +a[0][1];
		$answerStore.installation.anonimity = +a[0][2];
		$answerStore.installation.server = +a[0][3];
		$answerStore.installation.isolating = +a[0][4];
		$answerStore.installation.liveMode = +a[0][5];
	}
	const handleClick = async () => {
		await wait(1);
		console.log('this', val);

		if (a[id - 1][val - 1]) {
			borders.forEach((_, eachIndex) => (borders[eachIndex] = 'transparent'));
			a[id - 1][val - 1] = false;
			return (val = 0);
		} else {
			a[id - 1].forEach((_, eachIndex) => (a[id - 1][eachIndex] = false));
			borders.forEach((_, eachIndex) => (borders[eachIndex] = 'transparent'));
			if (val > 0) {
				borders[val - 1] = 'primary';
				return (a[id - 1][val - 1] = true);
			}
		}
	};
	$: console.log($answerStore);
	$: console.log(a);
	$: console.log(borders);
</script>

<div class="flex justify-center">
	<div
		class=" m-[1rem] w-[100%] h-[min] bg-base-300 rounded-2xl flex flex-col lg:w-[60%] mt-[4rem]"
	>
		<div class="text-center font-bold mt-[1rem] text-lg md:text-2xl lg:text-3xl mx-[10px]">
			<h3>{quiz.main[id - 1].question}</h3>
		</div>
		{#if quiz.main[id - 1].type === 'multiple'}
			<span class="italic text-center text-2xs md:text-sm lg:text-lg mt-[4px]"
				>You can select multiple answers</span
			>
			{#each quiz.main[id - 1].answers as answer, i}
				<div class="label justify-start my-[-0.5rem]">
					<div class="form-control mx-[1rem]">
						<label class="label cursor-pointer justify-start">
							<input
								type="checkbox"
								class="checkbox checkbox-primary"
								bind:checked={a[id - 1][i]}
							/>
							<span class="label-text text-left ml-[1rem] lg:text-lg">{answer.answer}</span>
						</label>
					</div>
					{#if answer.tooltip}
						<div class="tooltip " data-tip={answer.tooltip}>
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
				>Please select only one answer.</span
			>
			{#each quiz.main[id - 1].answers as answer, i}
				<div class="label relative justify-start my-[-0.5rem]">
					<div class="form-control mx-[1rem]">
						<label class="label cursor-pointer justify-start">
							<input
								type="radio"
								name="radio-6"
								class="radio radio-primary"
								bind:group={val}
								value={quiz.main[id - 1].answers[i].val}
								on:click={handleClick}
							/>
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
				<div class=" mx-[4.5rem]">
					<input
						type="range"
						min="0"
						max={Math.round(100 / quiz.main[id - 1].answers.length) *
							(quiz.main[id - 1].answers.length - 1)}
						bind:value={rangeValue}
						class="range"
						step={Math.round(100 / quiz.main[id - 1].answers.length)}
					/>
					<div class="w-full flex justify-between text-xs px-2">
						{#each quiz.main[id - 1].answers as answer}
							<span>|</span>
						{/each}
					</div>
				</div>

				<div class="w-full flex justify-between text-xs">
					{#each quiz.main[id - 1].answers as answer, j}
						{#if j === 0}
							<span class="pl-[1rem] max-w-[10rem]">{answer.answer}</span>
						{:else if j === quiz.main[id - 1].answers.length}
							<span class="pr-[1rem]">{answer.answer}</span>
						{:else}
							<span>{answer.answer}</span>
						{/if}
					{/each}
				</div>
			</div>
		{:else if quiz.main[id - 1].type === 'card'}
			<span class="italic text-center text-2xs md:text-sm lg:text-lg mt-[4px]"
				>Please select only one answer.</span
			>
			<div class="grid grid-cols-2 gap-4 ml-[1.5%] w-[97%] mt-[1rem]">
				{#each quiz.main[id - 1].answers as answer, i}
					<span class="hidden">{(index = i)}</span>
					{#if i === 2 && quiz.main[id - 1].answers.length === 3}
						<label
							class="card col-span-2 w-[stretch] bg-base-100 shadow-xl border-{borders[
								quiz.main[id - 1].answers[i].val - 1
							]} border-2 hover:border-primary duration-500 hover:-translate-y-4 cursor-pointer"
						>
							<figure class="px-10 pt-10 ">
								{#if quiz.main[id - 1].answers[i].img === '/svg/emoji/twemoji-thinking.svg'}
									<img src={quiz.main[id - 1].answers[i].img} alt="Shoes" class="h-[5rem] w-auto" />
								{:else}
									<img
										src={quiz.main[id - 1].answers[i].img}
										alt="Shoes"
										class="scale-50 h-[5rem] w-auto"
									/>
								{/if}
							</figure>
							<div class="card-body items-center text-center">
								<h2 class="card-title">{quiz.main[id - 1].answers[i].answer}</h2>
							</div>
							<input
								type="radio"
								name="radio-6"
								class="hidden"
								bind:group={val}
								value={quiz.main[id - 1].answers[i].val}
								on:click={handleClick}
							/>
						</label>
					{:else}
						<label
							class="card w-[stretch] bg-base-100 shadow-xl border-transparent border-primary border-{borders[
								quiz.main[id - 1].answers[i].val - 1
							]} border-2 hover:border-primary duration-500 hover:-translate-y-4 cursor-pointer"
						>
							<figure class="px-10 pt-10 ">
								{#if quiz.main[id - 1].answers[i].img === '/svg/emoji/twemoji-thinking.svg'}
									<img src={quiz.main[id - 1].answers[i].img} alt="Shoes" class="h-[5rem] w-auto" />
								{:else}
									<img
										src={quiz.main[id - 1].answers[i].img}
										alt="Shoes"
										class="scale-50 h-[5rem] w-auto"
									/>
								{/if}
							</figure>
							<div class="card-body items-center text-center">
								<h2 class="card-title">{quiz.main[id - 1].answers[i].answer}</h2>
							</div>
							<input
								type="radio"
								name="radio-6"
								class="hidden"
								bind:group={val}
								value={quiz.main[id - 1].answers[i].val}
								on:click={handleClick}
							/>
						</label>
					{/if}
				{/each}
			</div>
		{/if}
		<div class="mb-[1rem]" />
	</div>
</div>
