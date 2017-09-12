import VueRouter from 'vue-router';

export default new VueRouter({
	routes: [
		{
			path: '/',
			alias: '/students',
			component: require('./components/students/Students')
		},
		{
			path: '/students/register',
			component: require('./components/students/Students-Register')
		},
		{
			path: '/students/:id',
			props: true,
			component: require('./components/students/Students-Subjects')
		},
		{
			path: '/students/:id/edit',
			props: true,
			component: require('./components/students/Students-Edit')
		},
		{
			path: '/subjects',
			component: require('./components/Subjects')
		}
	],
	linkActiveClass: 'active'
})