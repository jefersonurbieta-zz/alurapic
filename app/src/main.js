import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource  from 'vue-resource'
import VueRouter  from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { routes }  from './routes';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter(
    {
        routes,
        mode: 'history'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
