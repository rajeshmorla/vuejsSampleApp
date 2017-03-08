export default {
  UPDATE_USER_DETAILS(state, payload){
           state.username = payload.username
           state.password = payload.password
           state.securityToken = payload.securityToken
           console.log("From: UPDATE_USER_DETAILS => state.username: "+state.username+' state.password: '+state.password+' state.securityToken: '+state.securityToken)
           state.dataUpdating = false
      },
      UPDATE_USERNAME(state, payload){
          state.username = payload.username
      },
      UPDATE_PASSWORD(state, payload){
          state.password = payload.password
      },
      UPDATE_SECURITY_TOKEN(state, payload){
          state.securityToken = payload.securityToken
      }
}

/*
export default {
  [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message)
  },

  [types.SWITCH_THREAD] (state, { id }) {
    setCurrentThread(state, id)
  }
}
*/