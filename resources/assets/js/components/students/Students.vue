<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Student Lists
                        <router-link class="btn btn-default pull-right btn-sm" to="/students/register"><i class="glyphicon glyphicon-plus"></i></router-link>
                        <div class="clearfix"></div>
                    </div>

                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="student in students" :key="student.id">
                                <router-link :to="student.subjects_path"><span class="badge">{{student.subjects.length}}</span> Subjects - {{student.first_name+' '+student.last_name}}</router-link>
                                <span class="pull-right">
                                    <router-link :to="student.edit_path" class=" btn btn-default btn-sm">Edit</router-link>
                                    <button class="btn btn-danger btn-sm " @click="deleteStudent(student.id);">Delete</button>
                                </span>
                                <div class="clearfix"></div>
                            </li>
                        </ul>
                        <p v-if="students.length<=0">Please register a student first</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            students() {
                return this.$store.getters.allStudents
            }
        },
        methods: {
            deleteStudent(studentId) {
            	if(confirm('Delete this student')){
	                this.$store.dispatch('deleteStudent', studentId);
            	}
            }
        },
    }
</script>
