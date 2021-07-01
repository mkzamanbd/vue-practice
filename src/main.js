import Vue from "vue";
import App from "./App.vue";
//vuex
import Vuex from "vuex";
Vue.use(Vuex);
import data from "./store/index";
const store = new Vuex.Store(data);

//axios
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
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//Vuetify js
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

//vue routers
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.getters.loggedIn;
    if (requiresAuth && !currentUser) {
        next({
            name: "login"
        });
    } else if (to.path == "/login" && currentUser) {
        next({
            name: "home"
        });
    } else {
        next();
    }
});

//spinner
Vue.component("spinner", require("vue-simple-spinner"));

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app");
