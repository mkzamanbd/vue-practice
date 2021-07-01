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
			this.$axios.defaults.headers.common['Authorization'] = 'Bearer '+contex.state.token;
			if(contex.getters.loggedIn){
				this.$axios.get('http://demo-laravel.test/api/v1/auth/current-user').then((response) =>{
					localStorage.setItem('user', response.data.user);
					contex.commit('user', response.data.user);
					console.log(response)
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