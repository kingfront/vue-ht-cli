import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navbar
  },
  strict: process.env.NODE_ENV !== 'production'
})