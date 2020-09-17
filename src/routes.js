import Home from './components/Home'
import Users from './components/Users'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Logout from './components/pages/Logout'


export default [

    {   path: '/login',
        name:'login',
        component: Login,
    },

    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/users',
        component: Users,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/posts',
        component: Posts,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/post/:postId/view',
        component: PostDetails,
        meta:{
            requiresAuth: true
        }
    },

    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta:{
            requiresAuth: true
        }
    }
    
]