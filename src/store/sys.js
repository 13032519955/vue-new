import { _ } from '@/utils/utils'
// 生成一个公共系统动作store
const Store = (action, mergeData) => {
  const store = {
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    state: {
      // 对象值
      data: {},
      // 非对象值
      value: ''
    },
    getters: {
      // 获取状态数据
      data (state, getters) {
        return state
      }
    },
    mutations: {
      // 突变数据
      changeD (state, data) {
        state.data = data
      },
      // 突变数据
      changeV (state, value) {
        state.value = value
      }
    },
    actions: {
      changeData ({ state, commit }, data) {
        commit('changeD', data)
      },
      changeValue ({ state, commit }, value) {
        commit('changeV', value)
      }
    }
  }

  const newStore = _.merge({}, store, mergeData)

  return newStore
}

export default Store
