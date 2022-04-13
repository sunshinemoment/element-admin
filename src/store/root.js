import serve from '@/serve'

const root = {
  state: {
    currentRoute: null, // 当前路由
    menuCollapse: false, // 菜单是否折叠
    screen: {}, // 当前屏幕大小
    exception: {}, // 业务接口报错或者不合法信息
    loading: {}, // 请求状态集合
    userinfo: null
  },
  mutations: {
    currentRouteUpdate(state, payload) {
      state.currentRoute = payload
    },
    menuCollapseUpdate(state, payload) {
      state.menuCollapse = payload
    },
    screenUpdate(state, payload) {
      state.screen = payload
    },
    exceptionUpdate(state, payload) {
      state.exception = {
        ...state.exception,
        ...payload
      }
    },
    loadingUpdate(state, payload) {
      state.loading = {
        ...state.loading,
        ...payload
      }
    },
    userinfoUpdate(state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    async fetchUserinfo({ commit }) {
      const [err, res] = await serve.user.info()
      if (err) {
        return
      }
      commit('userinfoUpdate', res)
    }
  }
}

export default root
