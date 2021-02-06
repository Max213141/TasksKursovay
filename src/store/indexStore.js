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
    },
    startWorking (_, payload) {
      payload.badgeText = 'Выполняется'
      payload.status = 'processing'
    },
    finish (_, payload) {
      payload.badgeText = 'Завершён'
      payload.status = 'active'
    },
    cancel (_, payload) {
      payload.badgeText = 'Отменён'
      payload.status = 'done'
    }
  },
  getters: {
    activeTasks (state) {
      return state.activeTasks
    },
    tasks (state) {
      return state.orderList
    }
  }
})
