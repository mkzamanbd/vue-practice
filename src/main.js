import Vue from "vue";
import App from "@/App.vue";
//vuex
import Vuex from "vuex";
Vue.use(Vuex);
import data from "@/store/index";
const store = new Vuex.Store(data);

// axios
// import axios from 'axios'
// Vue.use(axios)
// window.axion = axios
// Vue.prototype.$axios = axios

//sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

//import bootstrap vue
import { BootstrapVue } from "bootstrap-vue";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

//Vuetify js
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

//custom modal
import './assets/css/modal.css'
//confirm modal option
const confirmOptions = {
    headerClass:'border-bottom-0',
    footerClass:'border-top-0 btn-group pt-0',
    okVariant:'primary btn-continue',
    cancelVariant:'primary btn-discard',
    okTitle:'Continue',
    cancelTitle:'Discard',
    modalClass:'jerp-alert-modal confirm',
    //centered: true
}
//success modal option
const successOptions = {
    headerClass:'border-bottom-0',
    footerClass:'border-top-0 btn-group pt-0 d-flex justify-content-center',
    okVariant:'primary btn-continue',
    okTitle:'Done',
    modalClass:'jerp-alert-modal success',
}
//error modal option
const errorOptions = {
    headerClass:'border-bottom-0',
    footerClass:'border-top-0 btn-group pt-0 d-flex justify-content-center',
    okVariant:'primary btn-continue',
    okTitle:'Try Again',
    modalClass:'jerp-alert-modal error',
}

//alert modal body

const alertModalBody = (title, message, icon ) => {
    let vueInstant = new Vue();
    const h = vueInstant.$createElement
    const element = h('div', { class: ['popup-content'] }, [
        h('div', { class: ['icon'] }, [
            h('span', { class:['material-icons']}, [icon]),
        ]),

        h('div', { class: ['context'] }, [
            h('h5', title),
            h('p', message),
        ]),
    ])
    return element;
}
  
Vue.prototype.$confirmAlertOption = confirmOptions
Vue.prototype.$successAlertOption = successOptions
Vue.prototype.$errorAlertOption = errorOptions
Vue.prototype.$alertModalBody = alertModalBody

Vue.config.productionTip = false;
//vue routers
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "@/routes";
const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.getters.loggedIn;
    document.title = to.name + ' | Simple Vue CLI Experimental Project';
    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (to.path == "/login" && currentUser) {
        next('/');
    } else {
        next();
    }
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app");
