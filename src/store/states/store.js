const state = {
    all: []
}

const mutations = {
    addSatets(state, states){
        state.all.push(states)
    }
}

export default {
        state,
        mutations
}