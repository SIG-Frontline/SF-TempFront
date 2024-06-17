<script>
    /** @type {import('./$types').LayoutData} */
    import "./app.css";
    import "./styles.css";
    import logo from "$lib/images/logo.webp";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
</script>

<!-- Entire doc -->
<div class="mx-auto py-5 h-max w-screen flex flex-col">
    <!-- Nav Bar -->
    <div class="flex w-screen flex-row items-center h-max gap-x-5">
        <!-- filler -->
        <div class="flex-1 grow" />
        <!-- logo -->
        <img src={logo} alt="Logo" class="h-12" />
        <!-- Navigations -->
        <div class="flex flex-row items-center gap-x-5">
            <a
                class="h-max py-2 px-4 rounded-md bg-neutral-600 flex items-center hover:bg-neutral-500 text-white"
                href="/"><p>Home</p></a
            >
            <a
                class="h-max py-2 px-4 rounded-md bg-neutral-600 flex items-center hover:bg-neutral-500 text-white"
                href="/wip/sb"><p>Schedule Builder</p></a
            >
            <a
                class="h-max py-2 px-4 rounded-md bg-neutral-600 flex items-center hover:bg-neutral-500 text-white"
                href="/wip/ra"><p>Room Availability</p></a
            >
        </div>
        <!-- filler -->
        <div class="flex-1 grow" />
        <!-- profile -->
        <div class="flex flex-1 flex-row w-max items-end justify-end">
            {#if $page.data.session}
                <a href="/profile">
                    {#if !$page.data.session.user?.image}
                        <img
                            src={$page.data.session.user.image}
                            class="avatar rounded-full h-10 w-10"
                            alt="User Avatar"
                        />
                    {:else}
                        <span
                            class="material-symbols-outlined p-2 bg-neutral-500 rounded-full"
                            >person</span
                        >
                    {/if}
                </a>
                <button on:click={signOut}>Sign out</button>
            {:else}
                <button
                    on:click={signIn}
                    class="bg-sky-700 rounded-lg py-2 px-5 hover:bg-sky-600"
                    >Sign in</button
                >
            {/if}
        </div>
        <!-- filler -->
        <div class="flex-1 grow" />
    </div>
    <div class="py-4 flex flex-col w-screen items-center">
        <div class="mx-10"><slot></slot></div>
        <div
            class="border-t border-neutral-300 flex flex-col pt-3 justify-center items-center p-5 mx-10"
        >
            <p class="text-center text-sm">
                Sig-Frontline is not an official NJIT organization. All projects
                are built & run by students.
            </p>
            <h5 class="font-bold text-sm text-center">Sig-Frontline ©2024</h5>
        </div>
    </div>
</div>
