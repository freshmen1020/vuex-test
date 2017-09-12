import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		students: [],
	},
	getters: {
		allStudents(state){
			return state.students
		},
	},
	mutations: { //change the state on fly
		loadStudents(state, students){
			state.students = students;
		},
	},
	actions: {
		loadStudents(context, payload){
			context.loadStudents(payload)
		},
	}
})