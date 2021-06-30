<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">Posts Components</div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="(post,index) in posts" :key="post.id">
                                    <td>{{index+1}}</td>
                                    <td>{{post.title}}</td>
                                    <td>{{post.body}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="`/post/${post.id}/view`" class="btn btn-sm btn-info">View</router-link>
                                            <a href="" class="btn btn-sm btn-primary">Edit</a>
                                            <button @click="postDelete" class="btn btn-sm btn-danger">Delete</button>
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
import Navbar from './../components/Navbar'
import axios from 'axios'
    export default {
        name: "Posts",
        data(){
            return {
                posts:[],
            }
        },
        components:{
            Navbar
        },
        mounted(){
            this.loadPosts()
        },

        methods:{
            loadPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    this.posts = response.data
                }).catch((error) => {
                    console.log(error)
                });
            },
            postDelete(){
                confirm("Are You Sure?")
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>