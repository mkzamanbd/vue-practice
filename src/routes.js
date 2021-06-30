export default [

    {   path: '/login',
        name:'login',
        component: () => import('./views/pages/Login'),
    },

    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/profile',
        name: 'profile',
        component: () => import('./views/pages/Profile'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/home',
        component: () => import('./views/Home'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/users',
        component: () => import('./views/Users'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/posts',
        component: () => import('./views/Posts'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/post/:postId/view',
        component: ()=> import('./views/PostDetails'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/logout',
        name: 'logout',
        component: () => import('./views/pages/Logout'),
        meta:{
            requiresAuth: true
        }
    }
    
]