const Build = () => import(/* webpackChunkName: "group-build" */ '@/pages/build')
export default [
  // --------------build---------------
  {
    path: '/build',
    component: Build,
    meta: {
      layout: 'no'
    }
  }
]
