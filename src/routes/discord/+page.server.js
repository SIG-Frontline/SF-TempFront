/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit'

export async function load() {
    let discordURL = "https://discord.gg/zPnuVJUMvQ";

    throw redirect(302, discordURL);
};