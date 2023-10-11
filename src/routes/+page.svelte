<script lang="ts">
	import logo from '$lib/assets/images/ts-logo.svg';
	import JustDriveIcon from '$lib/assets/icons/just-drive.svelte';

	import { writable } from 'svelte/store';

	const price = writable(1000);
	const term = writable(1);
	const termOptions = [
		{
			year: 1,
			label: '12'
		},
		{
			year: 2,
			label: '24'
		},
		{
			year: 3,
			label: '36'
		},
		{
			year: 4,
			label: '48'
		}
	];
	const fee = 1.219999;
	let weeklyTotal = '';

	$: weeklyTotal = (($price * fee) / ($term * (52.18 - 8))).toFixed(2);
</script>

<div class="w-full h-screen gap-12 flex flex-col justify-center items-center">
	<h2 class="text-xl">Estimated Weekly Payment Calculator</h2>
	<div class="border-2 border-ts-gray-md p-8 rounded-xl shadow-md">
		<a class="block mb-12" href="/">
			<img class="block w-full" src={logo} alt="ts-logo" />
		</a>
		<div class="flex flex-col gap-8">
			<label class="flex flex-col gap-2 font-semibold justify-center text-base"
				>Total Base Amount
				<input
					type="number"
					step="100"
					class="border border-ts-gray-md rounded py-3 px-4"
					bind:value={$price}
				/>
			</label>

			<label class="flex flex-col gap-2 font-semibold justify-center text-base"
				>Term Length
				<select class="border border-ts-gray-md rounded py-3 px-4" bind:value={$term}>
					{#each termOptions as option}
						<option value={option.year}>{option.label} Months</option>
					{/each}
				</select>
			</label>
			<div>
				<span class="font-medium mb-2 flex">Your estimated weekly payment amount is:</span>
				<div class="w-full flex flex-col font-semibold mb-4 text-center">
					<span class="w-full inline-flex text-4xl justify-center">
						${weeklyTotal}*
					</span>
				</div>
				<span
					class="font-medium flex w-[325px] text-ts-blue text-xs italic leading-tight tracking-tight antialiased"
					>* This is an estimate. Final payment amount subject to credit approval and may differ
					from above calculation.</span
				>
			</div>
		</div>
		<div class="w-full mt-8 flex justify-center items-center">
			<div class="w-1/2">
				<JustDriveIcon />
			</div>
		</div>
	</div>
</div>
