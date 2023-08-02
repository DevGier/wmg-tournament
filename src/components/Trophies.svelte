<script lang="ts">
	export let users: any;
</script>

<div class="rounded-xl p-6 bg-white shadow-lg">
	<h3 class=" border-b-[1px] border-b-slate-100 pb-4 mb-4 text-xl font-bold">Trophies</h3>

	<div>
		<table class="border-spacing-[8px] border-separate">
			{#each users as user}
				<tr>
					<td class="capitalize">{user.username}</td>

					{#each user.trophies as trophy}
						<td
							><div class="flex h-[85px]">
								<img class="mt-auto" src={trophy} alt="Trophy" />
							</div></td
						>
					{/each}
				</tr>
			{/each}
		</table>
	</div>
</div>
