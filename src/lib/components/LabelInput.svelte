<script lang="ts">
	export let label: string;
	export let placeholder: string;
	export let name: string;
	export let value: number;
</script>

<label class="flex flex-col gap-1 font-semibold text-base"
	>{label}
	<input
		type="number"
		class="border border-ts-gray-md rounded py-3 px-4"
		{name}
		{placeholder}
		bind:value
	/>
</label>
