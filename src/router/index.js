import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/pages/Login"),
    },

    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
    },

    {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/pages/Profile"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/home",
        name: "Home !",
        component: () => import("@/views/Home"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/users",
        name: "User List",
        component: () => import("@/views/Users"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/posts",
        name: "Post List",
        component: () => import("@/views/Posts"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/post/:postId/view",
        name: "Post Details",
        component: () => import("@/views/PostDetails"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/image-crop",
        name: "Crop Image",
        component: () => import("@/views/ImageCrop"),
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/logout",
        name: "Logout",
        component: () => import("@/views/pages/Logout"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/select-checkbox",
        name: "Select Checkbox",
        component: () => import("@/views/pages/SelectCheckbox"),
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
