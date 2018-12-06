import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: [
  ]
})
router.beforeEach((to, from, next) => {
  // 布局限定
  let curModuleLayOutName = to.meta.layout
  store.dispatch('layLoading/changeValue', true)
  store.dispatch('sysLayoutName/changeValue', curModuleLayOutName || 'regular')
  next()
  // ...
})
router.afterEach((to, from) => {
  // ...
  store.dispatch('layLoading/changeValue', false)
})
export default router
