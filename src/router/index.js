import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/UserLogin.vue"),
    },

    {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
    },

    {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/UserProfile.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/image-crop",
        name: "Crop Image",
        component: () => import("@/views/ImageCrop.vue"),
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/select-checkbox",
        name: "Select Checkbox",
        component: () => import("@/views/SelectCheckbox.vue"),
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/:pathMatch(.*)*",
        name: "Not found",
        component: () => import("@/views/errors/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
