<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Alura<strong>Pic</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li v-for="rota in rotas" class="nav-item active">
                    <router-link class="nav-link" :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            rotas: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss">
</style>
