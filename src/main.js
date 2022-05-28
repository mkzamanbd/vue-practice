import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios default configuration
import useAxios from "./plugins/useAxios";
Vue.prototype.$axios = useAxios;

// import bootstrap vue
import { BootstrapVue } from "bootstrap-vue";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

//Vuetify js
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
