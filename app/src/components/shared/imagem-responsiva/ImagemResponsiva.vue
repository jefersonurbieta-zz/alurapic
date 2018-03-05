<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<script>
    export default {
        props: ['url', 'titulo']
    }
</script>

<style scoped lang="scss">

</style>
