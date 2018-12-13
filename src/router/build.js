import router from './utils'
const Build = () => import(/* webpackChunkName: "group-build" */ '@/pages/build')
const Project = () => import(/* webpackChunkName: "group-build" */ '@/pages/build/project')
router.addRoutes([
  // --------------build---------------
  {
    path: '/',
    component: Build
  },
  // --------------build---------------
  {
    path: '/project',
    component: Project
  }
])

export default router
