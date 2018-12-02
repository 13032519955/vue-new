import config from '@/config/config'
import { _ } from '@/utils/utils'
import fetch from '@/fetch'
// 生成一个公共的store
const Store = (action, mergeData, preName = 'v1') => {
  var api = `${config.apis[preName]}/${action}`
  const store = {
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    state: {
      // 异步loading控制
      loading: false,
      // 数据列表
      list: [],
      // 数据对象
      data: {},
      // 数据条数
      count: 0
    },
    getters: {
      // 获取状态数据
      data (state, getters) {
        return state
      }
    },
    mutations: {
      // 突变数据
      setOne (state, res) {
        if (res.code !== 200) {

        } else {
          state.data = res.data
        }
      },
      // 突变列表
      setList (state, res) {
        if (res.code !== 200) {

        } else {
          state.list = res.data.docs
          state.count = res.data.count
        }
      },
      // 改变loading
      changeLoading (state, loading) {
        state.loading = loading
      }
    },
    actions: {
      // 获取单条数据
      getByParams ({ state, commit }, params = {}) {
        commit('changeLoading', true)
        return fetch
          .get(api, params)
          .then(res => {
            commit('setOne', res)
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      },
      // 获取单条数据
      getById ({ state, commit }, id) {
        commit('changeLoading', true)
        return fetch
          .get(`${api}/${id}`, {})
          .then(res => {
            commit('setOne', res)
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      },

      // 获取列表数据
      getList ({ state, commit }, params = {}) {
        commit('changeLoading', true)
        if (!params.pageSize) {
          Object.assign(params, { pageSize: 20 })
        }
        if (!params.pageNo) {
          Object.assign(params, { pageNo: 1 })
        }
        return fetch
          .get(api, params)
          .then(res => {
            commit('setList', res)
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            // debugger
            commit('changeLoading', false)
          })
      },

      // 新增数据
      post ({ state, commit }, params = {}) {
        commit('changeLoading', true)
        return fetch
          .post(api, params)
          .then(res => {
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      },

      // 修改数据
      put ({ state, commit }, params = {}) {
        commit('changeLoading', true)
        return fetch
          .put(api, params)
          .then(res => {
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      },

      // 删除数据
      delete ({ state, commit }, id) {
        commit('changeLoading', true)
        return fetch
          .delete(`${api}/${id}`, {})
          .then(res => {
            commit('changeLoading', false)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      },

      // 批量删除数据
      deleteBatch ({ state, commit }, ids) {
        commit('changeLoading', true)
        return fetch
          .delete(api, ids)
          .then(res => {
            commit('changeLoading', true)
            return res
          })
          .finally(one => {
            commit('changeLoading', false)
          })
      }
    }
  }

  const newStore = _.merge({}, store, mergeData)

  return newStore
}

export default Store
