<template>
    <div class="container">
        <div class="row justify-content-center d-flex align-items-center vh-100">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg text-center my-4">Sign in to start your session</p>

                        <form @submit.prevent="login">
                            <div class="input-group mb-3">
                                <input id="email" type="email" class="form-control" v-model="username" placeholder="Email Address" required>
                            </div>

                            <div class="input-group mb-3">
                                <input id="password" type="password" class="form-control" v-model="password" placeholder="Password" autocomplete="current-password" required>
                            </div>
                            <div class="row">
                                <!-- /.col -->
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-success btn-block">Sign In</button>
                                    <br>
                                    <span v-if="isLoading"><spinner/></span>
                                </div>
                                <!-- /.col -->
                            </div>
                        </form>
                        <p class="mb-1">
                            <a href="">I forgot my password</a>
                        </p>
                    </div>
                    <!-- /.login-card-body -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                username: null,
                password: null,
                isLoading : false
            }
        },
        mounted(){
            
        },
        methods:{
            login(){
                this.isLoading = true
                this.$axios.post('http://demo-laravel.test/api/v1/auth/login',{
                    email: this.username,
                    password: this.password,
                    device_name: "Insomnia"
                }).then((response) =>{
                    this.$store.commit('token', response.data.token);
                    localStorage.setItem('token', response.data.token);
                    this.$router.push({name:'home'})
                    this.isLoading = false
                })
                .catch((error) =>{
                    this.isLoading = false
                    console.log(error)
                })

                
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>