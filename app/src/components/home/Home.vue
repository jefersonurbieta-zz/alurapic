<template>
    <div>
        <h1>{{ msg }}</h1>
        <div class="form-group">
            <input type="search" placeholder="Pesquisa" @input="filtro = $event.target.value" class="filtro form-control"/>
        </div>
        <div class="row">
            <meu-painel v-for="foto in fotosComFiltro" :titulo="foto.titulo" class="col-md-3">
                <imagem-responsiva class="card-img-bottom" :url="foto.url" :titulo="foto.titulo"/>
                <meu-botao tipo="button" rotulo="REMOVER" @click.native="remove(foto)"/>
            </meu-painel>
        </div>
    </div>
</template>

<script>
    import Painel from '../../components/shared/painel/Painel.vue';
    import ImagemResponsiva from '../../components/shared/imagem-responsiva/ImagemResponsiva.vue';
    import Botao from '../../components/shared/botao/Botao.vue';

    export default {
        components: {
            'meu-painel': Painel,
            'imagem-responsiva': ImagemResponsiva,
            'meu-botao': Botao
        },

        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                fotos: [],
                filtro: ''
            }
        },

        computed: {
            fotosComFiltro() {
                if(this.filtro){
                    const exp = new RegExp(this.filtro.trim(), 'i');
                    return this.fotos.filter(foto => exp.test(foto.titulo));
                } else {
                    return this.fotos;
                }

            }
        },

        created() {
            this.$http.get('http://localhost:3000/v1/fotos')
                .then(res => res.json())
                .then(fotos => this.fotos = fotos, err => console.log(err));
        },

        methods: {
            remove(foto){
                alert(foto.titulo)
            }
        }
    }
</script>

<style lang="scss">

</style>
