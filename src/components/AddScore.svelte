<script lang="ts">
	import { onMount } from 'svelte';

	async function getUsers() {
		// @ts-ignore
		const response = await fetch(VITE_API_URL + '/api/users?key=' + VITE_API_KEY);
		const users = await response.json();
		return users;
	}

	async function getRounds() {
		// @ts-ignore
		const response = await fetch(VITE_API_URL + '/api/rounds?key=' + VITE_API_KEY);
		const rounds = await response.json();
		return rounds;
	}

	onMount(() => {
		const addScoreElement = document.querySelector('.add-score');
		const closeButton = document.querySelector('.add-score__close');

		// @ts-ignore
		closeButton.addEventListener('click', (e) => {
			e.preventDefault();
			// @ts-ignore
			addScoreElement.classList.toggle('active');
		});
	});

	// @ts-ignore
	function submitForm(e) {
		const data = new URLSearchParams();
		for (const pair of new FormData(e.target)) {
			// @ts-ignore
			data.append(pair[0], pair[1]);
		}

		// @ts-ignore
		data.append('key', VITE_API_KEY);

		const addScoreElement = document.querySelector('.add-score');
		// @ts-ignore
		addScoreElement.classList.toggle('disabled');

		// @ts-ignore
		fetch(VITE_API_URL + '/api/points', {
			method: 'post',
			body: data
			// @ts-ignore
		}).then((response) => {
			window.location.reload();
		});
	}

	function toggleScoreModal() {
		const addScoreElement = document.querySelector('.add-score');

		addScoreElement.classList.add('active');
	}
</script>

<div class="add-score">
	<div class="add-score__wrapper">
		<div class="add-score__close">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><path
					d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
				/></svg
			>
		</div>

		<form method="post" on:submit|preventDefault={submitForm}>
			<h3 class="add-score__title border-b-[1px]">Add scores</h3>
			{#await getRounds()}
				<div>Loading...</div>
			{:then rounds}
				<select name="round" class="form-row">
					{#each rounds as round}
						<option value={round.id}>{round.name}</option>
					{/each}
				</select>
			{/await}

			{#await getUsers()}
				<div>Loading...</div>
			{:then users}
				{#each users as user}
					<div class="score form-row">
						<div class="username">{user.username}</div>
						<input type="number" name="points[{user.id}]" value="0" />
					</div>
				{/each}
			{/await}

			<button
				type="submit"
				class="hover:bg-green-700 w-fit block px-4 py-3 mt-4 font-semibold text-center text-white uppercase transition-all bg-green-500 rounded-md"
				>Submit</button
			>
		</form>
	</div>
</div>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
	href="#"
	on:click={toggleScoreModal}
	class="hover:bg-green-700 block px-4 py-3 font-semibold text-center text-white uppercase transition-all bg-green-500 rounded-md"
	>Add score</a
>
