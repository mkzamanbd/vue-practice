import { createApp } from "vue";
import "./registerServiceWorker";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router);

// axios default configuration
import useAxios from "./plugins/useAxios";
app.config.globalProperties.$axios = useAxios;

app.mount("#app");
