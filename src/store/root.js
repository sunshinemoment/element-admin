const root = {
  state: {
    currentRoute: null, // 当前路由
    menuCollapse: false, // 菜单是否折叠
    screen: {} // 当前屏幕大小
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
    }
  }
}

export default root
