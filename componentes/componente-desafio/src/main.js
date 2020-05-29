import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Footer from '@/components/Footer.vue' // @ - a partir do src
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar.vue'
import Toolbar2 from '@/Toolbar2.vue'

Vue.component('appCarousel', Carousel);
Vue.component('app-footer', Footer);
Vue.component('appToolbar', Toolbar);
Vue.component('app-toolbar-2', Toolbar2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
