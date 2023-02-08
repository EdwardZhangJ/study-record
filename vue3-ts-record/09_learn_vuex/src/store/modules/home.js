const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter ++
    }
  },
  actions: {
    incrementHomeAction(context) {
      context.commit('increment')
    }
  }
}

export default homeModule
