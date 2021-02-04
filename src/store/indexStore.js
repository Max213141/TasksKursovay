import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  modules: {},
  state () {
    return {
      orderList: [],
      activeTasks: 0
    }
  },
  mutations: {
    addToOrderList (state, payload) {
      state.orderList.push(payload)
    }
  },
  getters: {
    activeTasks (state) {
      return state.activeTasks
    }
  }
})
