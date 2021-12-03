<template>
    <router-link :to="to">
        <Link>
            <slot></slot>
        </Link>
    </router-link>
</template>

<script>
import Link from "./Link.vue"

export default {
name: "ExtLink",
    components: {
        Link
    },
    props: {
        to: String
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
a:focus {
    outline: none;
}
</style>