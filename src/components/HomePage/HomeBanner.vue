<template>
    <div class="row d-flex justify-content-center align-items-center py-3 mb-3 banner">
        <div class="col-md-6">
            <div class="text-end px-3 d-flex justify-content-end">
                <img src="@/assets/images/banner.svg" alt />
            </div>
        </div>
        <div class="col-md-6">
            <div class="content px-3">
                <h2>বাংলার প্রোগ্রামিং নেটওয়ার্ক</h2>
                <p class="my-2 text-dark-secondary">
                    <span># ব্লগ</span>
                    <span># টিউটোরিয়াল</span>
                    <span># চ্যালেঞ্জ</span>
                    <span># আলোচনা</span>
                    <span># CI/DC</span>
                </p>

                <button
                    class="btn btn-secondary d-flex align-items-center hover:bg-green-400 focus:outline-none hover:border-green-400"
                    v-if="!authUser"
                    @click="login"
                >
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-dark-secondary"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <line x1="20" y1="8" x2="20" y2="14" />
                        <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    <span class="ms-1">যুক্ত হোন</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 1,
            };
        },
        computed: {
            authUser() {
                return this.$store.getters.user;
            },
        },
        methods: {
            login() {
                this.counter++;
                console.log("Counter " + this.counter);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .banner {
        background: #fdf9f3;
    }
</style>
