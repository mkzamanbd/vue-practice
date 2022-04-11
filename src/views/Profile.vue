<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">{{ getUser.name }} Logged in</div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
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
                        <div class="content-middle media-upload">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="alert alert-success mb-0 mt-4 border-0" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                    <form action="#">
                                        <div class="row gy-3">
                                            <!-- Upload button -->
                                            <div class="col-12 ">
                                                <label for="file" class="form-label required">Upload file from this computer</label>
                                                <div class="upload-button d-flex align-items-center flex-column justify-content-center">
                                                    <input type="file" name="#" class="form-control" id="file" required>
                                                    <h5 id="file_name">Or drop file here</h5>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 24 24">
                                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <!-- Upload button -->
                                            <div class="col-12 text-end">
                                                <button type="submit" class="btn custom-btn btn-success"> <i class="bi bi-cloud-arrow-up"></i> <span>Upload</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Profile',
        created(){
            this.$store.dispatch('user')
        },
        computed:{
            getUser(){
                return this.$store.getters.user
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    $primary-color:#2CA01C;
    $gray-color: gray;

    .media-upload{
        .upload-button{
            width: 100%;
            height: 200px;
            border: 1px dotted $gray-color;
            position: relative;
            transition: all linear .3s;
            &:hover{
                color: $primary-color;
            }
            .form-control{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                opacity: 0;
            }
            i{
                font-size: 52px;
            }
        }
        .btn{
            i, svg{
                font-size: 20px;
                line-height: 0;
            }
        }
    }
</style>