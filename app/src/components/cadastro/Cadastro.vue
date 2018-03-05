<template>
    <div>
        <h1>{{ msg }}</h1>
        <div class="form-group">
            <input type="search" placeholder="Pesquisa" @input="filtro = $event.target.value" class="filtro form-control"/>
        </div>
        <div class="row">
            <meu-painel v-for="foto in fotosComFiltro" :titulo="foto.titulo" class="col-md-3">
                <imagem-responsiva class="card-img-top" :url="foto.url" :titulo="foto.titulo"/>
            </meu-painel>
        </div>
    </div>
</template>

<script>
    import Painel from '../../components/shared/painel/Painel.vue';
    import ImagemResponsiva from '../../components/shared/imagem-responsiva/ImagemResponsiva.vue';

    export default {
        components: {
            'meu-painel': Painel,
            'imagem-responsiva': ImagemResponsiva
        },

        data() {
            return {
                msg: 'Cadastro',
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
        }
    }
</script>

<style lang="scss">

</style>
