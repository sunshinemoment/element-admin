<template>
  <div class="com-sider-view">
    <div class="com-sider-view__logo">LOGO</div>
    <el-menu router class="com-sider-view__menu">
      <tree-menu :data="menulist"></tree-menu>
    </el-menu>
  </div>
</template>

<script>
import TreeMenu from '@/components/tree-menu'
import homeRoute from '@/router/_home'

export default {
  components: {
    TreeMenu
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
.com-sider-view__menu {
  border-right: none;
}
</style>
