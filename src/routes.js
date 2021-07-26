export default [

    {   path: '/login',
        name:'Login',
        component: () => import('@/views/pages/Login'),
    },

    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
    },

    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/pages/Profile'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/home',
        name: 'Home !',
        component: () => import('@/views/Home'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/users',
        name: 'User List',
        component: () => import('@/views/Users'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/posts',
        name: 'Post List',
        component: () => import('@/views/Posts'),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/post/:postId/view',
        name:'Post Details',
        component: ()=> import('@/views/PostDetails'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/image-crop',
        name:'Crop Image',
        component: ()=> import('@/views/ImageCrop'),
        meta:{
            requiresAuth: false
        }
    },

    {
        path: '/logout',
        name: 'Logout',
        component: () => import('@/views/pages/Logout'),
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/select-checkbox',
        name:'Select Checkbox',
        component: ()=> import('@/views/pages/SelectCheckbox'),
        meta:{
            requiresAuth: false
        }
    },

    {
        path:'*',
        name:'Not found',
        component: () => import('@/views/errors/404'),
    }

]
