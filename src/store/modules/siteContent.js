import { xHttpRequest } from "@/plugins/axios-http";

// State object
const state = {
    posts: [],
};
// Getter functions
const getters = {
    getPosts(state){
        return state.posts
    }
};

// Actions
const actions = {
    fetchPosts({ commit }){
        xHttpRequest.get('posts').then((response) => {
            console.log('site content module', response.data.posts.data);
            commit('SET_POSTS', response.data.posts.data)
        }).catch(error =>{
            console.log(error);
        });
    }
};

// Mutations
const mutations = {
    SET_POSTS(state, payload){
        state.posts = payload
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
