import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'

import firebase from 'firebase/app'


Vue.use(Router);


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
