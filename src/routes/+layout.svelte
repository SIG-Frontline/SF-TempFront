<script>
    /** @type {import('./$types').LayoutData} */
    import "./styles.css";
    import logo from "$lib/images/logo.webp";
    import { goto } from "$app/navigation";
    import { SignIn, SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";

    function routeTo(route, replaceState) {
        goto(`/${route}`, { replaceState });
    }
</script>

<div class="site-body">
    <div class="site-header">
        <img src={logo} alt="Logo" />
        <a href="/"><p>Home</p></a>
        <a href="/wip/sb"><p>Schedule Builder</p></a>
        <a href="/wip/ra"><p>Room Availability</p></a>

        <div>
            {#if $page.data.session}
                {#if $page.data.session.user?.image}
                    <img
                        src={$page.data.session.user.image}
                        class="avatar rounded"
                        alt="User Avatar"
                    />
                {/if}
                <span class="signedInText">
                    <small>Signed in as</small><br />
                    <strong>{$page.data.session.user?.name ?? "User"}</strong>
                </span>
                <SignOut>
                    <div slot="submitButton" class="buttonPrimary">
                        Sign out
                    </div>
                </SignOut>
            {:else}
                <span class="notSignedInText">You are not signed in</span>
                <SignIn>
                    <div slot="submitButton" class="buttonPrimary">Sign in</div>
                </SignIn>
                <SignIn provider="Auth0" />
            {/if}
        </div>
    </div>

    <div class="sidebar-left"></div>
    <div class="site-body"><slot></slot></div>
    <div class="sidebar-right"></div>
    <div class="site-footer">
        <p>
            Sig-Frontline is not an official NJIT organization. All projects are
            built & run by students.
        </p>
        <h5>Sig-Frontline ©2024</h5>
    </div>
</div>
