<template>
  <container-query :query="query" v-model="screen">
    <div :class="['layout-basic', screen]">
      <el-container>
        <el-aside
          :width="menuCollapse ? '64px' : '200px'"
          class="layout-basic__sider"
        >
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
        size="200px"
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
import { mapState } from 'vuex'
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
  computed: {
    ...mapState({
      menuCollapse(state) {
        return state.menuCollapse
      }
    })
  },
  watch: {
    screen(data) {
      this.$store.commit('screenUpdate', data)
      // 在小屏幕的时候, menuCollapseUpdate 为 true
      if (data['screen-xs']) {
        this.$store.commit('menuCollapseUpdate', true)
      }
    },
    menuCollapse(val) {
      if (this.screen['screen-xs']) {
        this.drawerVisible = !val
      }
    }
  },
  methods: {
    // 关闭抽屉页面 设置 menuCollapseUpdate 为 true
    drawerClosed() {
      this.$store.commit('menuCollapseUpdate', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-basic__sider {
  height: 100vh;
  box-shadow: 2px 0 6px rgba(29, 35, 41, 0.05);
  position: relative;
}
.layout-basic__header {
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.layout-basic__content {
  height: 100vh;
  padding: 0;
  overflow-y: auto;
}
.layout-basic__main {
  min-height: calc(100vh - 60px);
  // background: #f0f2f5;
  background-color: #fff;
}
.screen-xs {
  .layout-basic__sider {
    display: none;
  }
}
</style>
