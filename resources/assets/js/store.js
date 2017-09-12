import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		newStudent: {first_name: '', last_name: ''},
		students: [],
		subjects: [],
	},
	getters: {
		allStudents(state){
			return state.students
		},
		allSubjects(state){
			return state.subjects
		},
		newStudent(state){
			return state.newStudent
		}
	},
	mutations: { //change the state on fly
		loadStudents(state, students){
			state.students = students;
		},
		loadSubjects(state, subjects){
			state.subjects = subjects;
		},
		registerNewStudent(state, payload){
			const first_name = payload.first_name;
			const last_name = payload.last_name;
		},
		updateStudentLists(state, student){
			state.students.push(student);
			state.newStudent = {first_name: '', last_name: ''}
		},
	},
	actions: {
		loadStudents(context, payload){
			context.loadStudents(payload)
		},
		loadSubjects(context, payload){
			context.loadSubjects(payload)
		},
		registerStudent(context, payload){
			axios.post('/api/register-student', payload)
	        .then(function(response){
	        	context.commit('updateStudentLists', response.data)
	        })
		},
	}
})