/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';

export async function load() {
	const discordURL = 'https://discord.gg/zPnuVJUMvQ';

	throw redirect(302, discordURL);
}
