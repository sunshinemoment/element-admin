<template>
  <div class="com-header-view">
    <div class="com-header-view__left">
      <span @click="menuCollapseToggle" class="com-header-view__triggle">
        {{ menuCollapse ? 'open' : 'close' }}
      </span>
    </div>
    <div class="com-header-view__right">user</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      menuCollapse(state) {
        return state.menuCollapse
      }
    })
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
.com-header-view__triggle {
  cursor: pointer;
}
</style>
