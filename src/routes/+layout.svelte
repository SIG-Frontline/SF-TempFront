<script>
	/** @type {import('./$types').LayoutData} */
	import './app.css';
	import './styles.css';
	import logo from '$lib/images/logo.webp';
	import { SignIn } from '@auth/sveltekit/components';
	import { page } from '$app/stores';
</script>

<!-- Entire doc -->
<div class="mx-auto flex h-max w-[100vw-10px] flex-col overflow-x-hidden py-5">
	<!-- Nav Bar -->
	<div class="flex h-max w-auto flex-row items-center gap-x-5">
		<!-- filler -->
		<div class="flex-1 grow" />
		<!-- logo -->
		<img src={logo} alt="Logo" class="h-12" />
		<!-- Navigations -->
		<div class="flex flex-row items-center gap-x-5">
			<a
				class="flex h-max items-center rounded-md bg-neutral-600 px-4 py-2 text-white hover:bg-neutral-500"
				href="/"><p>Home</p></a
			>
			<a
				class="flex h-max items-center rounded-md bg-neutral-600 px-4 py-2 text-white hover:bg-neutral-500"
				href="/wip/sb"><p>Schedule Builder</p></a
			>
			<a
				class="flex h-max items-center rounded-md bg-neutral-600 px-4 py-2 text-white hover:bg-neutral-500"
				href="/wip/ra"><p>Room Availability</p></a
			>
		</div>
		<!-- filler -->
		<div class="flex-1 grow" />
		<!-- profile -->
		<div class="flex w-max flex-1 flex-row items-end justify-end">
			{#if $page.data.session}
				<a href="/profile">
					{#if !$page.data.session.user?.image}
						<img
							src={$page.data.session.user?.image}
							class="avatar h-10 w-10 rounded-full"
							alt="User Avatar"
						/>
					{:else}
						<span class="material-symbols-outlined rounded-full bg-neutral-500 p-2">person</span>
					{/if}
				</a>
			{:else}
				<SignIn>
					<div slot="submitButton" class="rounded-lg bg-sky-700 px-5 py-2 hover:bg-sky-600">
						Sign In
					</div>
				</SignIn>
			{/if}
		</div>
		<!-- filler -->
		<div class="flex-1 grow" />
	</div>
	<div class="mx-5 flex w-auto flex-col items-center py-4">
		<div class="mx-10"><slot></slot></div>
		<div
			class="mx-10 flex flex-col items-center justify-center border-t border-neutral-300 p-5 pt-3"
		>
			<p class="text-center text-sm">
				Sig-Frontline is not an official NJIT organization. All projects are built & run by
				students.
			</p>
			<h5 class="text-center text-sm font-bold">Sig-Frontline ©2024</h5>
		</div>
	</div>
</div>
