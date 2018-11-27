import Vue from 'vue';
import Vuex from 'vuex';
import crm from './module/crm';
import build from './module/build';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      ...crm,
      ...build
  },
});

export default store;
