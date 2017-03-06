export default {
  UPDATE_USERS(state, payload){
           state.users = payload.data
           console.log("response******************"+JSON.stringify(state.users))
           state.dataUpdating = false
      },
      UPDATE_DATA_CHANGE_STATUS(state, payload){
          state.dataUpdating = payload.status
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