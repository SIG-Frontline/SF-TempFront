<script>
    /** @type {import('./$types').PageData} */
    let discordURL = "https://discord.gg/zPnuVJUMvQ";
    import { onMount } from "svelte";
    onMount(() => {
        document.location.href = discordURL;
    });
</script>

<head>
    <meta http-equiv="refresh" content="5; url={discordURL}" />
</head>
