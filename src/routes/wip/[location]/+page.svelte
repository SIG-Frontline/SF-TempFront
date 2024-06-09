<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let url = "";
    let hasUrl = !!url;

    const urlParams = data.urlParam;

    if (urlParams === "sb") {
        url = "https://sbdev.sigfrontline.com";
        hasUrl = true;
    } else if (urlParams === "ra") {
        url = "https://radev.sigfrontline.com";
        hasUrl = true;
    }
</script>

<h1>Under Construction!</h1>
<p>Stay tuned!</p>

{#if hasUrl}
    <a href={url}>See whats going on!</a>
{/if}
