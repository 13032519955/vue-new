import Store from '../sys'
import { Message } from 'element-ui'
//  布局变化
const sysLayoutName = Store('sysLayoutName', {})
//  消息提醒
const sysMsg = Store('sysMsg', {
  actions: {
    changeData ({ state, commit }, data) {
      Message(data)
      commit('changeD', data)
    }
  }
})
//  布局下视图挂载点loading控制
const layLoading = Store('layLoading', {})
export {
  sysLayoutName, sysMsg, layLoading
}
