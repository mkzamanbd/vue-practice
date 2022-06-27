<template>
    <div>
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "@/components/HeaderNav.vue";
    export default {
        name: "App",
        components: {
            Navbar,
        },
        created() {
            this.$store.dispatch("user");
            this.$store.dispatch("serverInit");
        },
    };
</script>

<style>
    a.router-link-exact-active {
        color: #42b983;
    }
    @media screen and (min-width: 992px) {
        .container-fluid {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }
    }
</style>
