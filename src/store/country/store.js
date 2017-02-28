const state = {
    all : []
}

const mutations = {
    updateCountry (state, countries){
        state.all = countries
    }
}

export default {
        state,
        mutations
}