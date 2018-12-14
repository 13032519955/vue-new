import router from './utils'
const Crm = () => import(/* webpackChunkName: "group-crm" */ '@/pages/crm')
const Customers = () => import(/* webpackChunkName: "group-crm" */ '@/pages/crm/customers')
router.addRoutes([
  // --------------crm---------------
  {
    path: '/',
    component: Crm
  },
  // --------------customers---------------
  {
    path: '/customers',
    component: Customers
  }
])
export default router
