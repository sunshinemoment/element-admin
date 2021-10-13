<template>
  <div class="com-sider-view">
    <div class="com-sider-view__logo">
      <p class="com-sider-view__logo-text">ElementUI Admin</p>
    </div>
    <el-menu :default-active="menuActive" router class="com-sider-view__menu">
      <tree-menu :data="menulist"></tree-menu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TreeMenu from '@/components/tree-menu'
import homeRoute from '@/router/_home'

export default {
  components: {
    TreeMenu
  },
  computed: {
    ...mapState({
      currentRoute(state) {
        return state.currentRoute
      }
    }),
    menuActive() {
      if (this.currentRoute.path === '/') {
        return ''
      }
      const matched = this.currentRoute.matched
      /**
       * 在子菜单隐藏或者菜单隐藏的时候需要筛选菜单匹配
       */
      const menuMatched = matched.filter((menu) => {
        if (menu.parent?.meta.hideChildrenInMenu || menu.meta.hide) {
          return false
        }
        return true
      })
      return menuMatched[menuMatched.length - 1].meta.realPath
    }
  },
  data() {
    return {
      menulist: homeRoute.children
    }
  }
}
</script>

<style lang="scss" scoped>
.com-sider-view__logo {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.com-sider-view__logo-text {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    width: 80px;
    height: 1px;
    background-color: #f0f2f5;
    left: 50%;
    transform: translateX(-50%);
  }
}
.com-sider-view__menu {
  border-right: none;
}
</style>
