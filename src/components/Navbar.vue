<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <router-link class="navbar-brand" to="/home">VueJs</router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/users">Users</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/posts">Posts</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/profile">Profile</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/logout">Logout</router-link>
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>