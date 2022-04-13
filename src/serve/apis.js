import { baseUrl, isDev } from '@/config/env'

const files = require.context('./modules', false, /\.js$/)
const apis = files.keys().reduce((pre, next) => {
  const moduleApis = files(next).default
  moduleApis.forEach((api) => {
    api.storeKey = api.storeKey || api.url
    if (!isDev) {
      api.url = baseUrl + api.url
    }
  })
  const path = /^\.\/(.+)\.js$/.exec(next)[1]
  return [...pre, [path, moduleApis]]
}, [])

export default apis
