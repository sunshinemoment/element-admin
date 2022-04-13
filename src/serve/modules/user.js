const apis = [
  {
    // 用户登录
    fn: 'login',
    method: 'POST',
    url: '/api/login',
    hideLoading: true
  },
  {
    // 获取用户信息
    fn: 'info',
    method: 'POST',
    url: '/user/info',
    hideLoading: true
  }
]

export default apis
