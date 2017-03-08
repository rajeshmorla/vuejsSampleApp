import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const updateUserDetailsFromData = ({ commit }, payload) => {
    commit('UPDATE_USER_DETAILS', payload )
}

export const updateUsers = ({ commit }, payload) => {
    Vue.http.get('https://api.waves.io/users?securityToken='+payload).then((response) => {        
        var str = response.body
        var objc = str
        var temp = {}
        temp.data = objc
        console.log("response------"+JSON.stringify(objc))
        console.log("temp obj------"+JSON.stringify(temp))
    commit('UPDATE_USERS', temp )
  })
}

export const clearUsersList = ({ commit }, payload) => {
    var temp = {};
    temp.data = [];
    commit('UPDATE_USERS', temp )
}

export const updateDataChangeStatus = ({ commit }, payload) => {
    commit('UPDATE_DATA_CHANGE_STATUS', payload )
}
