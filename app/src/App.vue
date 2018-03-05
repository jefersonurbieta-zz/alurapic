<template>
    <div id="app" class="container">
        <h1>{{ msg }}</h1>
        <div class="row">
            <div v-for="foto in fotos" class="col-md-3">
                <div class="card painel">
                    <img class="card-img-top" :src="foto.url" :alt="foto.titulo">
                    <div class="card-body painel-body">
                        <h4 class="card-title painel-titulo">{{ foto.titulo }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                fotos: []
            }
        },
        created(){
            this.$http.get('http://localhost:3000/v1/fotos')
                .then(res => res.json())
                .then(fotos => this.fotos = fotos, err => console.log(err));
        }
    }
</script>

<style lang="scss">
    .painel {
        display: inline-block;
        margin: 2px;
        box-shadow: 5px 5px 10px grey;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel-body {
        background: lightblue;
    }

    .painel .painel-titulo {
        text-align: center;
        text-transform: uppercase;
    }
</style>
