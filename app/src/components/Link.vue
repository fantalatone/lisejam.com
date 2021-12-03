<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "Link"
}
</script>

<style scoped>
span {
    text-decoration: none;
    color: white;
    padding: calc(1rem - 1px) 35px;
    margin: 0 5px;
    cursor: pointer;
}
</style>