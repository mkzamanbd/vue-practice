<template>
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
                                        <button type="button" class="btn btn-sm btn-primary" @click.prevent="Edit(user)">Edit</button>
                                        <button type="button" class="btn btn-sm btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Users",
        data(){
            return {
                users:[],
            }
        },
        mounted(){
            this.loadUsers()
        },
        methods:{
            loadUsers(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                });
            },
            Edit(){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    console.log(result.value)
                    if (result.value) {
                        this.$swal.fire({
                            title: 'Success',
                            text: 'Operation Successfull :)',
                            icon: 'success'
                        })
                    }
                    else{
                        this.$swal.fire({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            icon: 'info'
                        })
                    }
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>