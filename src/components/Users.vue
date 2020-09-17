<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">Users Components</div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="(user,index) in users" :key="user.id">
                                    <td>{{index+1}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="" class="btn btn-sm btn-primary">Edit</a>
                                            <a href="" class="btn btn-sm btn-danger">Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import axios from 'axios'
 import Navbar from './Navbar'
    export default {
        name: "Users",
        data(){
            return {
                users:[],
            }
        },
        components:{
            Navbar
        },
        mounted(){
            this.loadUsers()
            
        },
        methods:{
            loadUsers(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    console.log(response.data)
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                });
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>