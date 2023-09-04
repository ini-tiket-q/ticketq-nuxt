const state = () => ({
  allSchedule: []
})

const getters = {
  allSchedule: state => state.allSchedule
}

const actions = {
  async getAllSchedule ({ commit }) {
    const response = await this.$api.flight.getAllSchedule()
    await commit('getAllSchedule', response)
  }
}

const mutations = {
  getAllSchedule (state, payload) { state.allSchedule = payload.data }
}

export default {
  state,
  getters,
  actions,
  mutations
}
