import VueRouter from 'vue-router';

export default new VueRouter({
	routes: [
		{
			path: '/',
			alias: '/students',
			component: require('./components/students/Students')
		},
		{
			path: '/subjects',
			component: require('./components/Subjects')
		}
	],
	linkActiveClass: 'active'
})