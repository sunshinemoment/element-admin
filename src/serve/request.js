import { Message, Loading } from 'element-ui'
import axios from 'axios'
import { localStore } from '@/utils/store'
import constStorage from '@/constant/storage'
import constHttpcode from '@/constant/httpcode'
import store from '@/store'
import { getValidParam } from '@/utils/tools'
import router from '@/router'

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  (config) => {
    const tokenKey = localStore.get(constStorage.LOCAL.TOKENKEY)
    if (tokenKey) {
      config.headers['authToken'] = tokenKey
    }
    config.data = getValidParam(config.data)
    config.params = getValidParam(config.params)
    if (
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      const formData = new FormData()
      for (let k in config.data || {}) {
        if (Object.prototype.hasOwnProperty.call(config.data, k)) {
          formData.append(k, config.data[k])
        }
      }
      config.data = formData
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.status === constHttpcode.SUCCESS) {
      return data.data
    }
    return Promise.reject({
      status: data.status,
      message: data.message
    })
  },
  ({ response }) => {
    if (response?.data) {
      return Promise.reject({
        status: response.data.status,
        message: response.data.message || 'server error'
      })
    }
    return Promise.reject({
      status: response.status,
      message: response.statusText || 'server error'
    })
  }
)

/**
 * Return Promise<any>
 * @param {object} headers 请求头部
 * @param {string} method 请求方式
 * @param {string} url 请求地址
 * @param {boolean} hideLoading 是否隐藏loading动画
 * @param {object} data Post 请求参数
 * @param {object} params Get 请求参数
 * @param {Function} processOptions options处理
 * @param {String} storeKey store唯一值
 */
const request = async (options = {}) => {
  const { processOptions } = options

  const {
    headers = {},
    method = 'GET',
    url = '/',
    hideLoading = false,
    hideError = false,
    data,
    params,
    storeKey
  } = typeof processOptions === 'function' && processOptions(options)
    ? processOptions(options)
    : options

  let loadingInstance
  store.commit('loadingUpdate', {
    [storeKey]: true
  })

  if (!hideLoading) {
    loadingInstance = Loading.service({ fullscreen: true })
  }

  try {
    const res = await axios({
      method,
      url,
      headers,
      data,
      params
    })

    store.commit('exceptionUpdate', {
      [storeKey]: null
    })

    return [null, res]
  } catch (error) {
    if (!hideError) {
      Message.error(error.message)
    }
    if (error.status === constHttpcode.UNAUTHORIZED) {
      localStore.clearAll()
      router.replace('/user/login')
      return [error, null]
    }
    store.commit('exceptionUpdate', {
      [storeKey]: error
    })
    return [error, null]
  } finally {
    loadingInstance && loadingInstance.close()
    store.commit('loadingUpdate', {
      [storeKey]: false
    })
  }
}

export default request
