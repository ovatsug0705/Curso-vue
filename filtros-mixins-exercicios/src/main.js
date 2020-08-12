import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', value => {
	return value.split('').reverse().join('');
})

Vue.mixin({
	data() {
		return {
			global: 'Estou no Mixin global',
		}
	},
	created() {
		console.log('Created - global')
	},
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Instance')
	},
}).$mount('#app')
