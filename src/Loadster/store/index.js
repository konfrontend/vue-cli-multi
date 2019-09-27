import Vue from 'vue'
import Vuex from 'vuex'
import sharedModule from '@cm/store/modules/sharedModule'
import loadster from './modules/loadster'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    sharedModule,
    loadster
  },
  mutations: {},
  actions: {}
})

export default store
