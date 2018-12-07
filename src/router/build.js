import router from './utils'
const Build = () => import(/* webpackChunkName: "group-build" */ '@/pages/build')

router.addRoutes([
  // --------------crm---------------
  {
    path: '/',
    component: Build
  }
])

export default router
