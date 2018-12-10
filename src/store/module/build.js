import Store from '../utils'

const build = Store('build', {})

const buildDemo = Store('buildDemo', {
  actions: {
    // 获取列表数据
    getList ({ state, commit }, params = {}) {
      commit('changeLoading', true)
      setTimeout(function () {
        commit('setList', {
          code: 200,
          data: {
            docs: [{ xx: 11 }],
            count: 1
          }
        })
        commit('changeLoading', false)
      }, 1000)
    }
  }
})
export {
  build, buildDemo
}
