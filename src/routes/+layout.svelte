<script>
	/** @type {import('./$types').LayoutData} */
	import './app.css';
	import './styles.css';
	import logo from '$lib/images/frontline.png';
	import { SignIn } from '@auth/sveltekit/components';
	import { page } from '$app/stores';
</script>

<!-- Entire doc -->
<div class="mx-auto flex h-max w-[100vw-10px] flex-col overflow-x-hidden py-5">
	<!-- Nav Bar -->
	<div class="inline-flex min-h-16 w-full items-center text-nowrap px-8 lg:gap-12 lg:px-12">
		<!-- Home -->
		<div class="justify-start lg:w-1/2">
			<a
				class="flex h-12 w-fit cursor-pointer flex-row items-center justify-start gap-2 rounded-lg px-4 text-center font-semibold text-inherit transition-colors hover:bg-neutral-600"
				href="/"
			>
				<img src={logo} alt="Logo" class="aspect-square h-8" />
				SIG Frontline
			</a>
		</div>
		<!-- Navigations -->
		<div class="hidden gap-8 lg:flex">
			<a class="text-white transition-colors hover:text-sky-500" href="/wip/sb">
				Schedule Builder
			</a>
			<a class="text-white transition-colors hover:text-sky-500" href="/wip/ra">
				Room Availability
			</a>
		</div>
		<!-- Profile -->
		<div class="flex grow justify-end lg:w-1/2">
			{#if $page.data.session}
				<a href="/profile">
					{#if !$page.data.session.user?.image}
						<img
							src={$page.data.session.user?.image}
							class="avatar h-10 w-10 rounded-full"
							alt="User Avatar"
						/>
					{:else}
						<span
							class="material-symbols-outlined rounded-full bg-neutral-500 p-2 text-white hover:bg-neutral-600"
							>person</span
						>
					{/if}
				</a>
			{:else}
				<SignIn>
					<div
						slot="submitButton"
						class="h-12 rounded-lg bg-blue-500 px-6 transition-colors hover:bg-blue-800"
					>
						<div class="flex h-full items-center font-semibold">Sign in</div>
					</div>
				</SignIn>
			{/if}
		</div>
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
