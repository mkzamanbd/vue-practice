import axios from 'axios';
const API_URL = 'http://laravel-practice.test/api/v1'
export default {
	state: {
		token: localStorage.getItem('token') || null,
		user: localStorage.getItem('user') || null,
		tags: [],
		users:[]
	},

	getters: {
		loggedIn(state){
			return state.token !== null;
		},

		user(state){
			return state.user
		},
		getTags(state) {
			return state.tags
		},
		getUsers(state) {
			return state.users
		}
	},

	actions:{
		user(context){
			axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.token;
			if(context.getters.loggedIn){
				axios.get(API_URL + '/auth/current-user').then((response) =>{
					localStorage.setItem('user', response.data.user);
					context.commit('user', response.data.user);
					//console.log(response)
				}).catch((error) => {
					console.log(error)
				})
			}
		},
		async serverInit(context){
			try{
				const response = await axios.get(API_URL + "/init");
				context.commit('setTags', response.data.tags)
				context.commit('setUsers', response.data.users)
				console.log('Server Init', response.data);

			}catch(err){
				console.log(err.response);
			}
		},

		logout(context){
			axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.token;
			if(context.getters.loggedIn){
				axios.post(API_URL + '/auth/logout').then(() =>{
					localStorage.removeItem('token');
					localStorage.removeItem('user');
					console.log(context)
				}).catch((error) => {
					console.log(error)
				})
			}
		}
	},

	mutations:{
		token(state, data){
			return state.token = data;
		},
		user(state, data){
			return state.user = data
		},
		setTags(state, data) {
			state.tags = data
		},

		setUsers(state, data) {
			state.users = data
		}
	},
}
