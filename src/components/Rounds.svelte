<script lang="ts">
	export let users: any;
	export let rounds: any;
</script>

<div class="rounded-xl max-w-full p-6 bg-white shadow-lg">
	<h3 class=" border-b-[1px] border-b-slate-100 pb-4 mb-4 text-xl font-bold">Rounds</h3>

	<div class="overflow-auto">
		<table class="border-separate border-spacing-[8px] max-w-none">
			<tbody
				><tr>
					<th />
					{#each rounds as round}
						<th
							><img
								class="max-w-none w-[64px] h-[64px] aspect-square block"
								title={round.name}
								src={round.image}
								alt={round.name}
							/></th
						>
					{/each}
				</tr>

				{#each users as user}
					<tr>
						<td class="capitalize">{user.username}</td>

						{#each user.allPointsLoose as point}
							<td class="text-slate-500 text-center">{point}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
