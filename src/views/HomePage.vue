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
    </div>
    <!-- container -->
</template>

<script>
import Banner from "@/components/HomePage/HomeBanner";
import LeftSideBar from "@/components/HomePage/LeftSideBar";
import AddPost from "@/components/HomePage/AddPost";
import PostList from "@/components/HomePage/PostList";
import RightSideBar from "@/components/HomePage/RightSideBar";
export default {
    name: "HomePage",
    components: {
        Banner,
        LeftSideBar,
        AddPost,
        PostList,
        RightSideBar,
    },
};
</script>
