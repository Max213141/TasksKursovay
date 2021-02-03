import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  modules: {},
  state () {
    return {
      orderList: []
    }
  },
  mutations: {
    addToOrderList (state, payload) {
      state.orderList.push(payload)
    }
  },
  getters: {}
})
