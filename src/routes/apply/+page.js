import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    applyURL = "https://forms.gle/1Fdb7Y8SuUEv4hb29";

    redirect(302, applyURL);
};