<template>
    <div id="app">
        <meu-menu :rotas="routes"></meu-menu>

        <div class="container corpo">
            <transition name="pagina-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import { routes } from './routes';
    import Menu from './components/shared/menu/Menu.vue';

    export default {
        components: {
            'meu-menu': Menu
        },

        data() {
            return {
                routes
            }
        }
    }
</script>

<style lang="scss">
    .corpo {
        margin-top: 70px;
    }

    .pagina-fade-enter, .pagina-fade-leave-active {
        opacity: 0;
    }

    .pagina-fade-enter-active, .pagina-fade-leave-active {
        transition: opacity .5s;
    }
</style>
