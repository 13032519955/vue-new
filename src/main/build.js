
import { App, store } from './util'
import router from '../router/build'
import Vue from 'vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App app-name="build"  />'
})
