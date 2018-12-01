import Vue from 'vue'
import Vuex from 'vuex'
import * as crm from './module/crm'
import * as build from './module/build'
import * as sys from './module/sys'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ...crm,
    ...build,
    ...sys
  }
})

export default store
