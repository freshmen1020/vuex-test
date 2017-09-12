<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <router-link exact class="btn btn-default btn-sm" to="/students"><i class="glyphicon glyphicon-chevron-left"></i></router-link>
                        {{student.first_name+' '+student.last_name}}
                    </div>

                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="subject in subjects">
                                {{subject.subject}}
                                <span class="pull-right">
                                    <button class="btn btn-sm btn-success" v-if="student.subject_ids.indexOf(subject.id) < 0" @click="registerSubject(student_id, subject.id)">Register</button>
                                    <button class="btn btn-sm btn-danger" v-if="student.subject_ids.indexOf(subject.id) >= 0" @click="unregisterSubject(student_id, subject.id)">Unregister</button>
                                </span>
                                <div class="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data: function(){
            return {
                student_id: this.id
            }
        },
        computed: {
            student() {
                return this.$store.getters.allStudents.filter((item) => item.id == this.id)[0]
            },
            subjects() {
                return this.$store.getters.allSubjects
            }
        },
        methods: {
            registerSubject(student_id, subject_id){
                var payload = {student_id: student_id, subject_id: subject_id};
                this.$store.dispatch('registerStudentToSubject', payload);
            },
            unregisterSubject(student_id, subject_id){
                var payload = {student_id: student_id, subject_id: subject_id};
                this.$store.dispatch('unregisterStudentToSubject', payload);
            }
        }
    }
</script>
