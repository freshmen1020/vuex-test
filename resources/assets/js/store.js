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
		updateStudentSubjects(state, payload){
			const student = state.students.find(student => {
				return student.id == payload.student_id;
			})

			student.subjects = payload.data;
		},
		updateStudentSubjectIds(state, payload){
			const student = state.students.find(student => {
				return student.id == payload.student_id;
			})

			student.subject_ids = payload.data;
		}
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
		registerStudentToSubject(context, payload){
			axios.post('/api/register-to-subject', payload)
	        .then(function(response){
	        	context.commit('updateStudentSubjects', {student_id: payload.student_id, data: response.data[0]})
	        	context.commit('updateStudentSubjectIds', {student_id: payload.student_id, data: response.data[1]})
	        })
		},
		unregisterStudentToSubject(context, payload){
			axios.post('/api/unregister-to-subject', payload)
	        .then(function(response){
	        	context.commit('updateStudentSubjects', {student_id: payload.student_id, data: response.data[0]})
	        	context.commit('updateStudentSubjectIds', {student_id: payload.student_id, data: response.data[1]})
	        })
		}
	}
})