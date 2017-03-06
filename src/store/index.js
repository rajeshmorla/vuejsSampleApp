import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import usersStore from './users/index'

Vue.use(Vuex)

const state = {
    countries: [{name:'Pakistan',alpha2_code:'IN', alpha3_code:'IND'}],
    states: {},
    dataUpdating: false,
}

const countriesStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

const store1 = new Vuex.Store({
    modules: {
        countries: countriesStore,
        users: usersStore
    }
})

export default store1
