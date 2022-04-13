import request from './request'
import apis from './apis'

function createApi({ url, queryId, ...rest } = {}) {
  if (queryId != undefined) {
    url += '/' + queryId
  }
  return request({
    url,
    ...rest
  })
}

/**
 * 封装请求接口 serve
 * 取具体某一个方法: serve[moduleName][fn](参数)
 * 如: serve.user.info({ data: {}, params: {} })
 */
const serve = apis.reduce((collection, next) => {
  const [path, moduleApis] = next
  const moduleServe = moduleApis.reduce(
    (moduleServeCollection, { fn, ...moduleConfig }) => {
      return {
        ...moduleServeCollection,
        [fn]: (requestConfig) =>
          createApi({
            ...moduleConfig,
            ...requestConfig
          })
      }
    },
    {}
  )
  return {
    ...collection,
    [path]: moduleServe
  }
}, {})
export default serve
