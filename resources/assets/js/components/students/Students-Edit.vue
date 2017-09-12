<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <router-link exact class="btn btn-default btn-sm" to="/students"><i class="glyphicon glyphicon-chevron-left"></i></router-link> Edit Student Info
                    </div>

                    <div class="panel-body">
                        <div class="alert alert-success" role="alert" v-if="editSuccess">
                            <button type="button" class="close" @click="clearSuccess();"><span aria-hidden="true">&times;</span></button>
                            <strong>Success!</strong> Student has been updated
                        </div>
                        <form>
                            <div class="form-group" v-bind:class="[error.first_name ? 'has-error' : '']">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model="student.first_name" />
                                <span id="helpBlock2" class="help-block" v-if="error.first_name">Enter student first name</span>
                            </div>
                            <div class="form-group" v-bind:class="[error.last_name ? 'has-error' : '']">
                                <label for="last_name">Last Name</label>
                                <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="student.last_name" />
                                <span id="helpBlock2" class="help-block" v-if="error.last_name">Enter student last name</span>
                            </div>
                            <button type="submit" class="btn btn-default btn-block btn-primary" @click="updateStudent(student);">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data: function() {
            return {
                editSuccess: false,
                error: {
                    first_name: false,
                    last_name: false
                }
            }
        },
        computed: {
            student() {
                return this.$store.getters.allStudents.filter((item) => item.id == this.id)[0]
            },
        },
        methods: {
            updateStudent(student){
                this.error.first_name = false;
                this.error.last_name = false;
                this.editSuccess = false;

                if(student.first_name == '' || student.last_name == ''){
                    if(student.first_name == ''){
                        this.error.first_name = true;
                    }
                    if(student.last_name == ''){
                        this.error.last_name = true;
                    }
                } else {
                    this.$store.dispatch('updateStudent', student);
                    this.editSuccess = true;
                }
            },
            clearSuccess(){
                this.editSuccess = false;
            }
        }
    }
</script>
