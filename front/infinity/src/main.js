import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import routes from './routes'
import store from './store'
import Vuenut from 'vuenut' 
import 'vuenut/dist/vuenut.css'
import firebase from 'firebase/app' 

 

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Vuenut)


const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y:0}),
  routes
})



Vue.config.productionTip = false

new Vue({
  store,
  router,  
  render: h => h(App),
}).$mount('#app')
