
import LoadingComponent from '@/frame/loadingComponent'
import ErrorComponent from '@/frame/ErrorComponent'
import bb from '@/pages/build'
//  todo
const Build = () => ({
  // component: import(),
  component: new Promise((resolve, reject) => {
    setTimeout(() => resolve(bb), 30000)
  }),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})
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
