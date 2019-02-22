import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

//import
Vue.use(Vuex)

//상태값
const state = {
    testData: []    
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
