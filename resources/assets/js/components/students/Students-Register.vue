<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <router-link exact class="btn btn-default btn-sm" to="/students"><i class="glyphicon glyphicon-chevron-left"></i></router-link> Register Student
                    </div>

                    <div class="panel-body">
                        <div class="alert alert-success" role="alert" v-if="registerSuccess">
                            <button type="button" class="close" @click="clearSuccess();"><span aria-hidden="true">&times;</span></button>
                            <strong>Success!</strong> Student has been registered
                        </div>
                        <form>
                            <div class="form-group" v-bind:class="[error.first_name ? 'has-error' : '']">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model="newStudent.first_name" />
                                <span id="helpBlock2" class="help-block" v-if="error.first_name">Enter student first name</span>
                            </div>
                            <div class="form-group" v-bind:class="[error.last_name ? 'has-error' : '']">
                                <label for="last_name">Last Name</label>
                                <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="newStudent.last_name" />
                                <span id="helpBlock2" class="help-block" v-if="error.last_name">Enter student last name</span>
                            </div>
                            <button type="submit" class="btn btn-default btn-block btn-primary" @click="registerStudent(newStudent);">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                registerSuccess: false,
                error: {
                    first_name: false,
                    last_name: false
                }
            }
        },
        computed: {
            newStudent() {
                return this.$store.getters.newStudent;
            }
        },
        methods: {
            registerStudent(newStudent){
                this.error.first_name = false;
                this.error.last_name = false;
                this.registerSuccess = false;

                if(newStudent.first_name == '' || newStudent.last_name == ''){
                    if(newStudent.first_name == ''){
                        this.error.first_name = true;
                    }
                    if(newStudent.last_name == ''){
                        this.error.last_name = true;
                    }
                } else {
                    this.$store.dispatch('registerStudent', newStudent);
                    this.registerSuccess = true;
                }
            },
            clearSuccess(){
                this.registerSuccess = false;
            }
        }
    }
</script>
