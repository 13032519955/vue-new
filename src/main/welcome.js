import Vue from 'vue'
import { App, store } from './util'
import router from '../router/welcome'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App app-name="welcome" />'
})
