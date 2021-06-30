<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">{{ getUser.name }}</div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>JoinAt</th>
                                </tr>
                                <tr>
                                    <td>{{ getUser.name }}</td>
                                    <td>{{ getUser.email }}</td>
                                    <td>{{ getUser.phone }}</td>
                                    <td>{{ getUser.created_at }}</td>
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
import Navbar from './../../components/Navbar'
    export default {
        name:'Profile',
        created(){
            this.$store.dispatch('user')
        },
        components:{
            Navbar
        },
        computed:{
            getUser(){
                return this.$store.getters.user
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>