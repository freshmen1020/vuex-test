import './bootstrap';
import router from './routes';
import store from './store';

new Vue({
    el: '#main-app',
    router,
    store,
    mounted() {
    	axios.get('/api/students')
        .then(response => this.$store.commit('loadStudents', response.data))
    },
});
