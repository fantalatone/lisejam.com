<template>
    <span @click="clickHandle(to)">
        <Link>
            <slot></slot>
        </Link>
    </span>
</template>

<script>
import Link from "./Link.vue"

export default {
    name: "IntLink",
    components: {
        Link
    },
    props: {
        to: String
    },
    methods: {
        clickHandle(to) {
            let element = document.getElementById(to)
            element?.scrollIntoView()
        }
    }
}
</script>