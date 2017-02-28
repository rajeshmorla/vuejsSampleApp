import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const updateCountries = ({ commit }, payload) => {
    Vue.http.get('http://services.groupkt.com/country/get/all').then((response) => {        
        var str = response.body
        var objc = str
        objc = objc.RestResponse
        // console.log("response------"+JSON.stringify(objc))
    commit('UPDATE_COUNTRIES', objc )
  })
}

export const updateCountriesFromData = ({ commit }, payload) => {
    commit('UPDATE_COUNTRIES', payload )
}

export const updateStates = ({ commit }, payload) => {
    Vue.http.get('http://services.groupkt.com/state/get/'+payload+'/all').then((response) => {        
        var str = response.body
        var objc = str
        objc = objc.RestResponse
        var temp = {}
        temp.countryCode = payload
        temp.states = objc.result
        console.log("response------"+JSON.stringify(objc))
        console.log("temp obj------"+JSON.stringify(temp))
    commit('UPDATE_STATES', temp )
  })
}

export const clearCountryList = ({ commit }, payload) => {
    var temp = {};
    temp.result = [];
    commit('UPDATE_COUNTRIES', temp )
}
