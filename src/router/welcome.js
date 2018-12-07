import router from './utils'
const Welcome = () => import(/* webpackChunkName: "group-welcome" */ '@/pages/welcome')

router.addRoutes([
  // --------------crm---------------
  {
    path: '/',
    component: Welcome,
    meta: {
      layout: 'no'
    }
  }
])

export default router
