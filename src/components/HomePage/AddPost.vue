<template>
    <div class="card bg-transparent border-0 mb-3">
        <div class="card-body p-0">
            <div v-if="authUser">
                <textarea name id rows="3" class="form-control"></textarea>
            </div>
            <div v-else>
                <p>Login</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddPost",
        data() {
            return {
                errors: [],
                isLoading: false,
            };
        },

        computed: {
            authUser() {
                return this.$store.getters.user;
            },
        },
    };
</script>
<style lang="scss"></style>
