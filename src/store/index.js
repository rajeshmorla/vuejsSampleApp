import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    countries: [{name:'Pakistan',alpha2_code:'IN', alpha3_code:'IND'}],
    states: {},
    dataUpdating: false,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
