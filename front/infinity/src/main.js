import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swal from 'sweetalert2'
import '../public/js/settings'
import toggle from 'bootstrap4-toggle'


window.Swal = Swal
Vue.config.productionTip = false

new Vue({
  store,
  router,      
  render: h => h(App),
}).$mount('#app')
