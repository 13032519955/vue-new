import router from './utils'
const Welcome = () => import(/* webpackChunkName: "group-welcome" */ '@/pages/welcome')

router.addRoutes([
  // --------------crm---------------
  {
    path: '/welcome',
    component: Welcome
  }
])

export default router
