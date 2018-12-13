import Vue from 'vue'
import { App, store } from './util'
import router from '../router/crm'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App app-name="crm"  />'
})
