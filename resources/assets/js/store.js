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
		deleteStudent(state, studentId){
			const student = state.students.find(student => {
				return student.id == studentId;
			})
			state.students.splice(state.students.indexOf(student), 1);
		},
		updateStudentData(state, updatedStudent){
			const student = state.students.find(student => {
				return student.id == updatedStudent.id;
			})
		},
		updateStudentSubjects(state, payload){
			const index = state.students.findIndex(student => {
				return student.id == payload.student_id;
			})

			state.students[index].subjects = payload.data;
		},
		updateStudentSubjectIds(state, payload){
			const index = state.students.findIndex(student => {
				return student.id == payload.student_id;
			})

			state.students[index].subject_ids = payload.data;
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
		updateStudent(context, payload){
			axios.patch('/api/update-student/'+payload.id, payload)
	        .then(function(response){
	        	context.commit('updateStudentData', payload)
	        })
		},
		deleteStudent(context, studentId){
			axios.delete('/api/delete-student/'+studentId)
	        .then(function(response){
	        	context.commit('deleteStudent', studentId)
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