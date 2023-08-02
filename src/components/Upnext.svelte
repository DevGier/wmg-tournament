<script lang="ts">
	export let nextRound: any;
</script>

<div class="p-6 rounded-xl shadow relative bg-slate-900 overflow-hidden h-[400px]">
	<div class="relative z-20 flex flex-col h-full">
		<h3 class="text-3xl font-bold text-white">Up next:</h3>

		<h4 class="mt-auto text-2xl font-bold text-white">{nextRound.name}</h4>

		<a
			href="steam://launch/1408230"
			class="hover:bg-green-700 block px-4 py-3 mt-4 font-semibold text-center text-white uppercase transition-all bg-green-500 rounded-md"
			>Start game</a
		>
	</div>

	<div class="bg-slate-900 absolute inset-0 z-10 opacity-50" />

	<img
		src={nextRound.banner_image}
		alt={nextRound.name}
		class="absolute inset-0 object-cover w-full h-full"
	/>
</div>
