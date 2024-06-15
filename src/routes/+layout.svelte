<script>
    /** @type {import('./$types').LayoutData} */
    import "./styles.css";
    import logo from "$lib/images/logo.webp";
    import { goto } from "$app/navigation";

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
