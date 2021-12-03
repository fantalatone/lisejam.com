<template>
    <nav class="nav-container">
        <div class="nav-links">
            <ExtLink to="/">Ana Sayfa</ExtLink>
            <ExtLink to="/debug">Debug</ExtLink>
        </div>
    </nav>
</template>

<script>
import ExtLink from "./ExtLink.vue";

export default {
    name: "Nav",
    components: {
        ExtLink
    }
}
</script>

<style scoped>

.nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #008080;
    color: white;
    padding: 0 15%;
    height: 56px;
    font-size: 1.3em;
}

</style>