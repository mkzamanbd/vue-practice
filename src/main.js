import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios default configuration
import { xHttpRequest } from "./plugins/axios-http";
Vue.prototype.$xHttpRequest = xHttpRequest;

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
