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
    <div class="com-header-view__right">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ $t('global.change-language') }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="lang !== 'cn'">
            <el-button
              type="text"
              style="width: 100%; text-align: center"
              size="small"
              @click="changeLang('cn')"
            >
              {{ $t('global.language-cn') }}
            </el-button>
          </el-dropdown-item>
          <el-dropdown-item v-if="lang !== 'en'">
            <el-button
              type="text"
              style="width: 100%; text-align: center"
              size="small"
              @click="changeLang('en')"
            >
              {{ $t('global.language-en') }}
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-divider direction="vertical"></el-divider>
      <el-dropdown>
        <span class="el-dropdown-link">
          user
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-button
              type="text"
              style="width: 100%; text-align: center"
              size="small"
              @click="logout"
            >
              退出登录
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { localStore } from '@/utils/store'

export default {
  data() {
    return {
      lang: localStore.get('lang') || 'cn' // 语言标识
    }
  },
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
    },
    changeLang(lang) {
      localStore.set('lang', lang)
      location.reload()
    },
    logout() {
      localStore.clearAll()
      location.replace(`/user/login`)
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
.com-header-view__right {
  .user-name {
    cursor: pointer;
  }
}
</style>
