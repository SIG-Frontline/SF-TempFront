<script>
    /** @type {import('./$types').PageData} */
    import { page } from "$app/stores";

    const userData = $page.data.session.user;
    console.log(userData);
</script>

<div class="pb-5">
    <h1 class="text-3xl border-b px-5 border-slate-200">
        Hello {userData.name}
    </h1>
</div>
