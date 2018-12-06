import router from './utils'
const Build = () => import(/* webpackChunkName: "group-build" */ '@/pages/build')

router.addRoutes([
  // --------------crm---------------
  {
    path: '/build',
    component: Build
  }
])

export default router
