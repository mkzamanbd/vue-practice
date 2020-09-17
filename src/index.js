import axios from 'axios'
export default {
	state: {
		token: localStorage.getItem('token') || null,
		user: localStorage.getItem('user') || null,
	},

	getters: {
		loggedIn(state){
			return state.token !== null;
		},

		user(state){
			return state.user
		},
	},

	actions:{
		user(contex){
			axios.defaults.headers.common['Authorization'] = 'Bearer '+contex.state.token;
			if(contex.getters.loggedIn){
				axios.get('https://boipottor.exchangeon.xyz/api/v1/current-user/profile').then((response) =>{
					localStorage.setItem('user', response.data.data);
					contex.commit('user', response.data.data);
				}).catch((error) => {
					console.log(error)
				})
			}
		},
	},

	mutations:{
		token(state, data){
			return state.token = data;
		},
		user(state, data){
			return state.user = data
		},
	},
}