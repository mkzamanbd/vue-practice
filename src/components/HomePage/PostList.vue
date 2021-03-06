<template>
    <div class="post__list">
        <div v-if="posts.length > 0" ref="postList">
            <div
                class="card h-100 border-0 mb-3 bg-transparent post"
                v-for="post in posts"
                :key="post.id"
            >
                <div
                    class="card-header d-flex justify-content-between p-0 mb-2 border-0 bg-transparent"
                >
                    <a class="avatar d-flex align-items-center" href="#">
                        <img
                            :src="`https://ui-avatars.com/api/?background=random&name=${post.user.name}`"
                            class="img-circle"
                            alt="Profile Image"
                        />
                        <span class="ms-3">{{ post.user.name }}</span>
                    </a>
                    <ul class="nav navbar">
                        <li class="px-1">
                            <a href="#" class="d-flex align-items-center">
                                <img src="./../../assets/images/heart.svg" alt />
                                <span class="ms-2">
                                    {{
                                    post.comments.length
                                    }}
                                </span>
                            </a>
                        </li>

                        <li class="px-1">
                            <a href="#" class="d-flex align-items-center">
                                <img src="./../../assets/images/bookmark.svg" alt />
                                <span class="ms-2">20</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-body p-0">
                    <router-link :to="`/${post.slug}`">
                        <img
                            :src="post.image"
                            v-if="post.image"
                            class="card-img-top img-rounded"
                            alt="Blog Image"
                            loading="lazy"
                        />

                        <h4 class="title my-3">{{ post.title }}</h4>
                    </router-link>

                    <p>Time: {{ post.posted }}</p>
                    <ul class="nav mb-2">
                        <li class="mx-1" v-for="(tag, index) in post.tags" :key="index">
                            <router-link :to="`/tags/${tag.slug}`">#{{ tag.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex justify-content-center align-items-center col-md-12">
                <div class="spinner-border text-success" role="status" v-if="isLoading"></div>
            </div>
        </div>

        <div class="d-flex justify-content-center align-items-center py-2">
            <a class="btn btn-success" href="#" @click.prevent="loadMore" v-if="!isLoading">
                <b>LOAD MORE</b>
            </a>
        </div>
    </div>
</template>

<script>
    import { getAllPosts } from "@/api/usePosts";
    export default {
        name: "PostList",
        data() {
            return {
                posts: [],
                next_page: 1,
                isLoading: false,
            };
        },
        mounted() {
            this.getInitialPosts();
            window.addEventListener("scroll", this.getNextPosts);
        },
        unmounted() {
            window.removeEventListener("scroll", this.getNextPosts);
        },
        methods: {
            getInitialPosts() {
                getAllPosts()
                    .then((response) => {
                        this.posts = response.data.posts.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            getNextPosts() {
                let bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.isLoading = true;
                    let page = this.next_page++;
                    this.$axios.get("posts?page=" + page).then((response) => {
                        this.posts.push(...response.data.posts.data);
                        this.isLoading = false;
                    });
                }
            },

            loadMore() {
                this.isLoading = true;
                let page = this.next_page++;
                this.$axios.get("posts?page=" + page).then((response) => {
                    this.posts.push(...response.data.posts.data);
                    this.isLoading = false;
                });
            },
        },
    };
</script>
<style>
    .img-rounded {
        border-radius: 5px;
    }
    .img-circle {
        border-radius: 50%;
    }
    .post a {
        text-decoration: none;
        color: #000;
    }
    .icons div {
        margin-left: 10px;
    }
</style>
