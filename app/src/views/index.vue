<template>
    <Nav />
    <Header />

    <main>
        <h1>Lisejam.com</h1>
    </main>

</template>

<script>
import Header from "../components/Header.vue"
import Nav from "../components/Nav.vue"

export default {
    name: "Index",
    components: {
        Header,
        Nav
    }
}
</script>

<style scoped>

</style>