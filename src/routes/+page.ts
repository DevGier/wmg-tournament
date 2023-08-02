
async function getUsers() {
    const response = await fetch(
        import.meta.env.VITE_API_URL + '/api/users?key=' + import.meta.env.VITE_API_KEY
    )
    const users = await response.json()
    return users
}

async function getRounds() {
    const response = await fetch(
        import.meta.env.VITE_API_URL + '/api/rounds?key=' + import.meta.env.VITE_API_KEY
    )
    const rounds = await response.json()
    return rounds
}

async function getNextRound() {
    const response = await fetch(
        import.meta.env.VITE_API_URL + '/api/next-round?key=' + import.meta.env.VITE_API_KEY
    )
    const round = await response.json()
    return round
}

export async function load() {
    const users = await getUsers();
    const rounds = await getRounds();
    const nextRound = await getNextRound();

    return {
        users,
        rounds,
        nextRound
    };
}