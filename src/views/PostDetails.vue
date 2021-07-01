<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">{{post.title}}</div>
                    <div class="card-body">
                        {{post.body}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                post: null
            }
        },
        mounted(){
            this.loadPost()
        },
        methods:{
            loadPost(){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.postId)
                .then((response) => {
                    console.log(response.data)
                    this.post = response.data
                }).catch((error) => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>