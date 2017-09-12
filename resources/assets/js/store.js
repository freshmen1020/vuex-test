import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		students: [],
		subjects: [],
	},
	getters: {
		allStudents(state){
			return state.students
		},
		allSubjects(state){
			return state.subjects
		}
	},
	mutations: { //change the state on fly
		loadStudents(state, students){
			state.students = students;
		},
		loadSubjects(state, subjects){
			state.subjects = subjects;
		},
	},
	actions: {
		loadStudents(context, payload){
			context.loadStudents(payload)
		},
		loadSubjects(context, payload){
			context.loadSubjects(payload)
		},
	}
})