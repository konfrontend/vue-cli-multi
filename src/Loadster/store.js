import Vue from 'vue'
import Vuex from 'vuex'

import sharedModule from '@cm/store/modules/sharedModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sharedModule
  },
  state: {
    fromLocalModule: `I'm a record from local vuex module`
  },
  mutations: {

  },
  actions: {

  }
})
