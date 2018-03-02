<template>
    <div id="app" class="container">
        <h1>{{ msg }}</h1>
        <ul v-for="foto in fotos">
            <li>
                <img :src="foto.url" :alt="foto.titulo">
            </li>
        </ul>
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

</style>
