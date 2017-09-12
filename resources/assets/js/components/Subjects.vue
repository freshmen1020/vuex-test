<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Subject Lists</div>

                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="subject in subjects">{{subject.subject}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            subjects() {
                return this.$store.getters.allSubjects
            }
        }
    }
</script>
