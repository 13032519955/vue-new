// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../store'
import router from '../router/crm'
import baseMixins from '@/mixins/base'
import ElementUI from 'element-ui'
import * as filters from '../filters'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.mixin(baseMixins)
Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })
let myPlugin = {}
myPlugin.install = function (vue, options) {
}

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  throw new Error(err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
