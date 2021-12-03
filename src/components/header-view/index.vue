<template>
  <div class="com-header-view">
    <div class="com-header-view__left">
      <span class="com-header-view__triggle" @click="menuCollapseToggle">
        <i v-if="menuCollapse" class="el-icon-d-arrow-right"></i>
        <i v-else class="el-icon-d-arrow-left"></i>
      </span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="item in matchedRoutes">
          <el-breadcrumb-item
            v-if="item.enabled"
            :key="item.path"
            :to="{
              path: item.path
            }"
          >
            {{ item.name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <!-- <div class="com-header-view__right">user</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      menuCollapse(state) {
        return state.menuCollapse
      },
      currentRoute(state) {
        return state.currentRoute
      }
    }),
    matchedRoutes() {
      if (!this.currentRoute) {
        return []
      }
      let matched = this.currentRoute.matched.slice(1) || []
      matched = matched.filter((item) => item.name)
      return matched.map((item, i) => ({
        name: item.meta.name,
        path: item.meta.realPath,
        enabled: item.meta.hideChildrenInMenu && i !== matched.length - 1
      }))
    }
  },
  methods: {
    menuCollapseToggle() {
      this.$store.commit('menuCollapseUpdate', !this.menuCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.com-header-view {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.com-header-view__left {
  display: flex;
  align-items: center;
}
.com-header-view__triggle {
  cursor: pointer;
  margin-right: 10px;
}
</style>
