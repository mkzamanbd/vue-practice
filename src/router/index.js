import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/pages/Login"),
    },

    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "base-home" */ "@/views/Home"),
    },

    {
        path: "/profile",
        name: "Profile",
        component: () => import(/* webpackChunkName: "profile" */ "@/views/pages/Profile"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/home",
        name: "Home !",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/image-crop",
        name: "Crop Image",
        component: () => import(/* webpackChunkName: "image-crop" */ "@/views/ImageCrop"),
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/logout",
        name: "Logout",
        component: () => import(/* webpackChunkName: "logout" */ "@/views/pages/Logout"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/select-checkbox",
        name: "Select Checkbox",
        component: () => import(/* webpackChunkName: "select-checkbox" */ "@/views/pages/SelectCheckbox"),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },

    {
        path: "*",
        name: "Not found",
        component: () => import("@/views/errors/404"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const currentUser = store.getters.loggedIn;
    document.title = to.name + " | Simple Vue CLI Experimental Project";
    if (requiresAuth && !currentUser) {
        next("/login");
    } else if (to.path == "/login" && currentUser) {
        next("/");
    } else {
        next();
    }
});

export default router;
