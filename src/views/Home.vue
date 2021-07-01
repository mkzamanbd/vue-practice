<template>
    <div class="container-fluid">
        <Banner />
        <div class="row">
            <div class="col-md-3">
                <LeftSideBar />
            </div>
            
            <div class="col-md-6">
                <AddPost />
                <PostList />
            </div>

            <div class="col-md-3">
                <RightSideBar />
            </div>
        </div>
        
    </div><!-- container -->
</template>

<script>

import Banner from './../components/Home/Banner';
import LeftSideBar from './../components/Home/LeftSideBar';
import AddPost from './../components/Home/AddPost';
import PostList from './../components/Home/PostList';
import RightSideBar from './../components/Home/RightSideBar';
export default {
    name:'Home',
    components:{
        Banner,
        LeftSideBar,
        AddPost,
        PostList,
        RightSideBar
    }
}
</script>