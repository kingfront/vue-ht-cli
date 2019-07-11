export default {
  namespaced: true,
  state: {
    title: '',
    backFlag: false
  },
  mutations: {
    updateTitle (state, title) {
      state.title = title
    },
    updateBackFlag (state, backFlag) {
      state.backFlag = backFlag
    }
  },
	getters: {
    getTitle (state) {
      return state.title
    },
		getBackFlag (state) {
		  return state.BackFlag
		}
  }
}