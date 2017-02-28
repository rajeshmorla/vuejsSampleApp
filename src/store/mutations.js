export default {
  UPDATE_COUNTRIES(state, payload){
           state.countries = payload.result
           console.log("response******************"+JSON.stringify(state.countries))
          //state.countries = [{name:'India',alpha2_code:'IN', alpha3_code:'IND'}]
      },
      UPDATE_STATES(state, payload){
           state.states = payload.states
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