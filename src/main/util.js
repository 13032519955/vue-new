import Vue from 'vue'
import App from './App'
import store from '../store'
import baseMixins from '@/mixins/base'
import ElementUI from 'element-ui'
import * as filters from '../filters'
import compos from '../config/components'; 
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.mixin(baseMixins)
Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })
let myPlugin = {}
myPlugin.install = function (vue, options) {
}
compos.forEach(component =>
    Vue.component(component.name, component.instance),
);
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  throw new Error(err)
}
export {
    store, App
}
