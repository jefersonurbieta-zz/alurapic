<template>
    <div class="painel" @dblclick="visivel = !visivel">
        <div class="card">
            <div class="card-header painel-header">
                <h4 class="card-title painel-titulo">{{ titulo }}</h4>
            </div>
            <div class="card-body painel-body">
                <transition name="painel-fade">
                    <div class="painel-conteudo" v-show="visivel">
                        <slot></slot>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['titulo'],

        data() {
            return {
                visivel: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .painel {
        margin-bottom: 10px;
    }

    .painel .card {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    }

    .painel .painel-header {
        background: lightblue;
    }

    .painel .painel-body img {
        width: 100%;
    }

    .painel .painel-titulo {
        text-align: center;
        text-transform: uppercase;
    }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .5s;
    }
</style>
