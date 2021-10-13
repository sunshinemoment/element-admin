<template>
  <container-query :query="query" v-model="screen">
    <div :class="['layout-basic', screen]">
      <el-container>
        <el-aside width="256px" class="layout-basic__sider">
          <sider-view></sider-view>
        </el-aside>
        <el-main class="layout-basic__content">
          <el-container>
            <el-header class="layout-basic__header">
              <header-view></header-view>
            </el-header>
            <el-main class="layout-basic__main">
              <router-view />
            </el-main>
          </el-container>
        </el-main>
      </el-container>
      <el-drawer
        direction="ltr"
        :visible.sync="drawerVisible"
        :with-header="false"
        :modal-append-to-body="false"
        @closed="drawerClosed"
      >
        <sider-view></sider-view>
      </el-drawer>
    </div>
  </container-query>
</template>

<script>
import { ContainerQuery } from 'vue-container-query'
import HeaderView from '@/components/header-view'
import SiderView from '@/components/sider-view'

const query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
}

export default {
  components: { ContainerQuery, HeaderView, SiderView },
  data() {
    return {
      query,
      screen: {},
      drawerVisible: false
    }
  },
  methods: {
    drawerClosed() {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-basic__sider {
  height: 100vh;
  border-right: 1px solid #f1f1f1;
}
.layout-basic__header {
  border-bottom: 1px solid #f1f1f1;
}
.layout-basic__content {
  height: 100vh;
  padding: 0;
  overflow-y: auto;
}
.layout-basic__main {
  min-height: calc(100vh - 60px);
  background: #f8f8f8;
}
</style>
