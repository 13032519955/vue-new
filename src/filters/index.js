// 时间格式化
export function formate (d, pattern) {
  if (!d || d === '') return ''
  if (typeof d !== 'object') {
    d = new Date(d)
  }
  pattern = pattern || 'yyyy-mm-dd HH:MM'
  let str = ''
  str = pattern.replace('yyyy', d.getFullYear())
  str = str.replace(
    'mm',
    d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
  )
  str = str.replace('dd', d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
  str = str.replace(
    'HH',
    d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  )
  str = str.replace(
    'MM',
    d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  )
  str = str.replace(
    'ss',
    d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
  )
  return str
}
// 钱
export function cent (price = 0, precision = 2) {
  if (!price && price !== 0) return ''
  return '￥' + (price / 100).toFixed(precision)
}
