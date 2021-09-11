import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios default configuration
import { xHttpRequest } from "./plugins/axios-http";
Vue.prototype.$xHttpRequest = xHttpRequest;

// sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

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
