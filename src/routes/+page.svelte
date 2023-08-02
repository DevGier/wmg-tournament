<script lang="ts">
	import Standings from '../components/Standings.svelte';
	import Hero from '../components/Hero.svelte';
	import Rounds from '../components/Rounds.svelte';
	import Upnext from '../components/Upnext.svelte';
	import Trophies from '../components/Trophies.svelte';
	import Chart from '../components/Chart.svelte';

	export let data;
</script>

<main class="flex flex-col gap-8 p-6 max-w-[1920px] mx-auto">
	<Hero />
	<div class="grid grid-cols-1 md:grid-cols-[400px_minmax(0,1fr)] gap-8 h-full">
		<div class="flex flex-col gap-8">
			<Standings users={data.users} />
			<Upnext nextRound={data.nextRound} />
		</div>

		<div class="flex flex-col gap-8">
			<Rounds users={data.users} rounds={data.rounds} />
			<Trophies users={data.users} />
			<Chart />
		</div>
	</div>
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=REM:wght@300;400;500;600;700;800;900&display=swap');
</style>
