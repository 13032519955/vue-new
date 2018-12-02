import axios from 'axios'
import store from '@/store'

var instanceAxios = axios.create()
instanceAxios.interceptors.request.use(
  function (res) {
    return res
  },
  function (error) {
    store.dispatch('sysMsg/changeData', {message: '网络异常', type: 'warning'})
    return Promise.reject(error)
  }
)
instanceAxios.interceptors.response.use(
  function (response) {
    let resData = response.data
    if (resData.code === 200) return resData
    else {
      store.dispatch('sysMsg/changeData', {message: resData.msg, type: 'warning'})
      return Promise.reject(response)
    }
  },
  function (error) {
    store.dispatch('sysMsg/changeData', {message: '网络异常', type: 'warning'})
    return Promise.reject(error)
  }
)
instanceAxios.defaults.withCredentials = true
instanceAxios.defaults.timeout = 115000

const http = {
  post: function (action, params) {
    return instanceAxios
      .post(action, params)
      .then(function (response) {
        return response
      })
  },
  get: function (action, params) {
    return instanceAxios
      .get(action, {params: params})
      .then(function (response) {
        return response
      })
  },
  put: function (action, params) {
    return instanceAxios
      .put(action, params)
      .then(function (response) {
        return response
      })
  },
  delete: function (action, params) {
    return instanceAxios
      .delete(action, {data: params})
      .then(function (response) {
        return response
      })
  }
}
export default http
