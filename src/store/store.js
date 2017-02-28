import Vue from 'vue'
import Vuex from 'vuex'
import contry from './country/store'
import states from './states/store'
//import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
      countries: [{name:'India',alpha2_code:'IN', alpha3_code:'INDd'}],
      states: []
  },
  mutations:{
      UPDATE_COUNTRIES(state, data){
          // state.countries = data
          state.countries = [{name:'India',alpha2_code:'IN', alpha3_code:'IND'}]
      },
      UPDATE_STATES(state, data){
           state.states[data.countryCode] = data.states
      }
  }
})