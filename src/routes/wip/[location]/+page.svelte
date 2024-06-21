<script>
    /** @type {import('./$types').PageData} */
    import { page } from "$app/stores";

    let url = "";
    let hasUrl = !!url;

    const urlParams = $page.url.pathname;
    let location = "";

    if (urlParams === "/wip/sb") {
        url = "https://sbdev.sigfrontline.com";
        hasUrl = true;
        location = "Schedule Builder";
    } else if (urlParams === "/wip/ra") {
        url = "https://radev.sigfrontline.com";
        hasUrl = true;
        location = "Room Availability";
    }
</script>

<div class="text-center">
    <h1 class="text-2xl">Under Construction!</h1>
    <p>
        Stay tuned
        {#if hasUrl}for {location} app{/if}!
    </p>

    <br />
    {#if hasUrl}
        <a href={url}>See whats going on!</a>
    {/if}
</div>
