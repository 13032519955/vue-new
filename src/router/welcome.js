import router from './utils'
const Welcome = () => import(/* webpackChunkName: "group-welcome" */ '@/pages/welcome')

router.addRoutes([
  // --------------crm---------------
  {
    path: '/',
    component: Welcome
  }
])

export default router
