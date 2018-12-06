import Store from '../sys'

//  布局变化
const sysLayoutName = Store('sysLayoutName', {})
//  消息提醒
const sysMsg = Store('sysMsg', {})
//  布局下视图挂载点loading控制
const layLoading = Store('layLoading', {})
export {
  sysLayoutName, sysMsg, layLoading
}
