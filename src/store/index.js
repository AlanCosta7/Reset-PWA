import Vue from 'vue'
import Vuex from 'vuex'

import userApp from './user'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: userApp.state,
    actions: userApp.actions,
    getters: userApp.getters,
    mutations: userApp.mutations,
    strict: false
  })

  return Store
}
