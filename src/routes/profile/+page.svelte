<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { page } from '$app/stores';
	import { SignOut } from '@auth/sveltekit/components';
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;
	const userData = $page.data.session?.user;
	console.log(data);
</script>

<div class=" flex flex-col items-center pb-5">
	<h1 class="border-b border-slate-200 px-5 text-3xl">
		Hello {userData?.name}
	</h1>

	Welcome to your profile!

	<!-- Sign out with a redirect after -->
	<SignOut
		options={{
			redirectTo: $page.data.redirectTo
				? `/${decodeURIComponent($page.data.redirectTo).slice(1)}`
				: `/`
		}}
	>
		<div slot="submitButton" class="rounded-lg bg-red-700 px-5 py-1 hover:bg-red-800">Sign Out</div>
	</SignOut>
</div>
