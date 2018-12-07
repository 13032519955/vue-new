import router from './utils'
const Crm = () => import(/* webpackChunkName: "group-crm" */ '@/pages/crm')
router.addRoutes([
  // --------------crm---------------
  {
    path: '/',
    component: Crm
  }
])
export default router
