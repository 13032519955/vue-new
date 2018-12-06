import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import build from './page/build'
import crm from './page/crm'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'crm'
    },
    ...build,
    ...crm
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
