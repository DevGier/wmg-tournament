<script>
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
		// @ts-ignore
	} from 'chart.js';

	ChartJS.defaults.backgroundColor = '#000';
	ChartJS.defaults.borderColor = '#0005';
	ChartJS.defaults.color = '#000';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	async function getRounds() {
		// @ts-ignore
		const response = await fetch(VITE_API_URL + '/api/rounds?key=' + VITE_API_KEY);
		const rounds = await response.json();
		return rounds;
	}

	async function getUsers() {
		// @ts-ignore
		const response = await fetch(VITE_API_URL + '/api/users?key=' + VITE_API_KEY);
		const users = await response.json();
		return users;
	}

	// @ts-ignore
	async function getPointsByUserID(id) {
		const response = await fetch(
			// @ts-ignore
			VITE_API_URL + '/api/points?key=' + VITE_API_KEY + '&userid=' + id
		);
		const points = await response.json();
		return points;
	}

	// @ts-ignore
	async function getPoints(users) {
		// @ts-ignore
		let points = [];

		// @ts-ignore
		users.forEach(async (user) => {
			points.push(
				await getPointsByUserID(user.id).then((points) => {
					return points;
				})
			);
		});

		// @ts-ignore
		return points;
	}

	// @ts-ignore
	const chartData = async () => {
		const rounds = await getRounds().then((rounds) => {
			// @ts-ignore
			const _rounds = [];
			// @ts-ignore
			rounds.forEach((round) => {
				_rounds.push(round.name);
			});
			// @ts-ignore
			return _rounds;
		});

		let data = {
			labels: rounds,
			datasets: []
		};

		const users = await getUsers().then((users) => {
			return users;
		});

		const keyColors = ['#29B6F6', '#EF5350', '#FFEB3B', '#E040FB'];

		// @ts-ignore
		users.forEach((user, key) => {
			// @ts-ignore
			data.datasets.push({
				label: user.username,
				fill: true,
				lineTension: 0,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: keyColors[key],
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#000',
				pointBackgroundColor: '#000',
				pointBorderWidth: 5,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#000',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 5,
				data: user.allPoints
			});
		});
		return data;
	};
</script>

<div class="rounded-xl p-6 bg-white shadow-lg">
	<h3 class=" border-b-[1px] border-b-slate-100 pb-4 mb-4 text-xl font-bold">Chart</h3>

	<div>
		{#await chartData() then data}
			<Line {data} options={{ responsive: true }} />
		{/await}
	</div>
</div>
