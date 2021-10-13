import memoizeOne from 'memoize-one'
import isEqual from 'lodash/isEqual'

/**
 * 增加路由配置数据的方法
 * 增加的配置有：
 * realPath 完整的路由字符串
 * parent 父路由
 */
export const formatRoutesByEnhanceMeta = memoizeOne((routes) => {
  const fn = (routes, parent) => {
    return routes.reduce((pre, next) => {
      if (!next.meta) {
        next.meta = {}
      }
      if (parent) {
        const parentRealPath = parent.meta.realPath
        if (parentRealPath === '/') {
          next.meta.realPath = '/' + next.path
        } else {
          next.meta.realPath = `${parentRealPath}${
            next.path ? '/' + next.path : ''
          }`
        }
        next.meta.parent = parent
      } else {
        next.meta.realPath = next.path.startsWith('/')
          ? next.path
          : '/' + next.path
        next.meta.parent = null
      }
      if (next.children?.length) {
        next.children = fn(next.children, next)
      }
      return [...pre, next]
    }, [])
  }

  return fn(routes)
}, isEqual)

/**
 * 路由列表转化为对象的方法
 * 以 realPath 为键, route 为值的对象词典
 */
export const getRoutesMapByRealPath = memoizeOne((routers) => {
  const fn = (routers) => {
    return routers.reduce((pre, next) => {
      if (next.meta?.realPath) {
        return {
          ...pre,
          [next.meta.realPath]: { ...next },
          ...(next.children && next.children.length
            ? fn(next.children, next)
            : null)
        }
      }
      return { ...pre }
    }, {})
  }
  return fn(routers)
}, isEqual)
