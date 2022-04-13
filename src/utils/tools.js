/**
 * 删除对象中属性值为null、undefined和''的属性
 */
export function getValidParam(obj, empty = false) {
  const param = {}
  if (obj === null || obj === undefined || obj === '') return param
  for (var key in obj) {
    if (Object.prototype.toString.call(obj) === 'Object') {
      param[key] = getValidParam(obj[key])
    } else if (
      obj[key] !== null &&
      obj[key] !== undefined &&
      (empty ? true : obj[key] !== '')
    ) {
      param[key] = obj[key]
    }
  }

  return param
}

export function randomString (len = 32) {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let str = ''
  for (let i = 0; i < len; i += 1) {
    str += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}
