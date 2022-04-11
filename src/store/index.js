import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//** init http */
import { xHttpRequest } from "@/plugins/axios-http";

// ? import store module
import siteContent from "./modules/siteContent";

// ? init vuex store
export default new Vuex.Store({
	modules:{
		siteContent,
	},
    state: {
        token: localStorage.getItem("token") || null,
        user: localStorage.getItem("user") || null,
        tags: [],
        users: []
    },

    getters: {
        loggedIn(state) {
            return state.token !== null;
        },

        user(state) {
            return state.user;
        },
        getTags(state) {
            return state.tags;
        },
        getUsers(state) {
            return state.users;
        }
    },

    actions: {
        user(context) {
            if (context.getters.loggedIn) {
                xHttpRequest
                    .get("auth/current-user")
                    .then(response => {
                        localStorage.setItem("user", response.data.user);
                        context.commit("user", response.data.user);
                        //console.log(response)
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        async serverInit(context) {
            try {
                const response = await xHttpRequest.get("init");
                context.commit("setTags", response.data.tags);
                context.commit("setUsers", response.data.users);
                console.log("Server Init", response.data);
            } catch (err) {
                console.log(err.response);
            }
        },

        logout(context) {
            if (context.getters.loggedIn) {
                xHttpRequest
                    .post("auth/logout")
                    .then(() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        console.log(context);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    },

    mutations: {
        token(state, data) {
            return (state.token = data);
        },
        user(state, data) {
            return (state.user = data);
        },
        setTags(state, data) {
            state.tags = data;
        },

        setUsers(state, data) {
            state.users = data;
        }
    },
});
