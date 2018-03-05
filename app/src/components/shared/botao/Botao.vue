<template>
    <button class="btn btn-light" :type="tipo">{{ rotulo }}</button>
</template>

<script>
    export default {
        props: {
            tipo: {
                type: String,
                required: true
            },
            rotulo: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
</style>
