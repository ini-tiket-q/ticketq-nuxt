const state = () => ({
  allAirports: []
})

const getters = {
  allAirports: state => state.allAirports
}

const actions = {
  async getAirports ({ commit }) {
    const response = await this.$api.airports.getAirports()

    await commit('getAirports', response)
  }
}

const mutations = {
  getAirports (state, payload) { state.allAirports = payload }
}

export default {
  state,
  getters,
  actions,
  mutations
}
