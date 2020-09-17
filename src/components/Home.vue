<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">Home Components</div>
                        <div class="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum aut earum quisquam expedita id maiores ut laboriosam porro minima non quos officiis impedit, aliquid animi minus sed itaque eius!Lorem</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt facere nemo omnis consequuntur cumque est ab numquam distinctio, quos, aliquid reiciendis? Perferendis perspiciatis quos dignissimos aspernatur illum culpa libero.</p>
                        </div>
                        <div class="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum aut earum quisquam expedita id maiores ut laboriosam porro minima non quos officiis impedit, aliquid animi minus sed itaque eius!Lorem</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt facere nemo omnis consequuntur cumque est ab numquam distinctio, quos, aliquid reiciendis? Perferendis perspiciatis quos dignissimos aspernatur illum culpa libero.</p>
                        </div>
                        <div class="card-footer">Footer Components</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
    export default {
        mounted(){
            console.log(this.$store.state.userName)
        },
        components:{
            Navbar
        },
    }
</script>

<style lang="scss" scoped>

</style>