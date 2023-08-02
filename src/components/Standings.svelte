<script lang="ts">
	export let users: any;
</script>

<div class="rounded-xl bg-slate-900 p-6 shadow-xl">
	<h3 class="border-b-[1px] border-b-slate-700 pb-4 mb-4 text-white font-bold">Standings</h3>
	<div class="flex flex-col gap-4">
		{#each users as user, key}
			<div class="flex items-center gap-4">
				<span
					class="w-[32px] h-[32px] block standing-number standing-number--n{key +
						1} flex items-center justify-center text-white rounded-md">{key + 1}</span
				>

				<span class="text-white capitalize">{user.username}</span>

				<span class="bg-slate-800 px-3 py-1 ml-auto text-white rounded-md">{user.points}</span>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.standing-number {
		background-color: #555;

		&--n1 {
			background-color: #ffd700;
		}

		&--n2 {
			background-color: #c0c0c0;
		}

		&--n3 {
			background-color: #cd7f32;
		}
	}
</style>
