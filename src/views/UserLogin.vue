<template>
    <div class="container">
        <div
            class="row justify-content-center d-flex align-items-center vh-100"
        >
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg text-center my-4">
                            Sign in to start your session
                        </p>

                        <form @submit.prevent="login">
                            <div class="input-group mb-3">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    v-model="username"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            <div class="input-group mb-3">
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="password"
                                    placeholder="Password"
                                    autocomplete="current-password"
                                    required
                                />
                            </div>
                            <div class="row">
                                <!-- /.col -->
                                <div class="col-sm-12">
                                    <button
                                        type="submit"
                                        class="btn btn-success btn-block"
                                    >
                                        <span>Sign In</span>
                                        <div
                                            class="spinner-border spinner-border-sm ms-3"
                                            role="status"
                                            v-if="isLoading"
                                        >
                                            <span class="visually-hidden"
                                                >Loading...</span
                                            >
                                        </div>
                                    </button>
                                </div>
                                <!-- /.col -->
                            </div>
                        </form>
                    </div>
                    <!-- /.login-card-body -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "zaman7u@gmail.com",
            password: "123456",
            isLoading: false,
        };
    },
    methods: {
        login() {
            this.isLoading = true;
            this.$axios
                .post("auth/login", {
                    email: this.username,
                    password: this.password,
                    device_name: "Insomnia",
                })
                .then((response) => {
                    this.$store.commit("token", response.data.token);
                    localStorage.setItem("token", response.data.token);
                    this.$store.dispatch("user");
                    this.$router.push({ name: "home" });
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.isLoading = false;
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
