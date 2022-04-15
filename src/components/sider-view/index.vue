<template>
  <div class="com-sider-view">
    <div class="com-sider-view__logo">
      <p v-if="menuCollapse">
        <router-link to="/">T</router-link>
      </p>
      <p v-else class="com-sider-view__logo-text">
        <router-link to="/">ElementUI Admin</router-link>
      </p>
    </div>
    <el-menu
      :default-active="menuActive"
      :collapse="screen['screen-xs'] ? false : menuCollapse"
      :collapse-transition="false"
      class="com-sider-view__menu"
    >
      <tree-menu :data="menu" :menu-click="menuClick"></tree-menu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TreeMenu from '@/components/tree-menu'
import menu, { menuMap } from '@/config/menu'

export default {
  components: {
    TreeMenu
  },
  computed: {
    ...mapState({
      currentRoute(state) {
        return state.currentRoute
      },
      menuCollapse(state) {
        return state.menuCollapse
      },
      screen(state) {
        return state.screen
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
        if (
          menu.parent &&
          menu.parent.name &&
          menuMap[menu.parent.name]?.hideChildrenInMenu
        ) {
          return false
        }
        if (menuMap[menu.name]?.hide) {
          return false
        }
        return true
      })
      return menuMatched[menuMatched.length - 1].name
    }
  },
  data() {
    return {
      menu
    }
  },
  methods: {
    menuClick(menuItem) {
      this.$router.push({
        name: menuItem.key
      })
      console.log(menuItem)
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
