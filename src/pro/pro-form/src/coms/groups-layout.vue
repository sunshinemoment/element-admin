<template>
  <div class="pro-form__groups-layout">
    <div
      class="pro-form__groups-layout__group"
      v-for="(group, i) in groups"
      :key="i"
    >
      <div class="pro-form__groups-layout__group-title">{{ group.label }}</div>
      <div class="pro-form__groups-layout__group-content">
        <slot v-bind:group="group"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groups: Array
  }
}
</script>

<style lang="scss" scoped>
.pro-form__groups-layout__group-title {
  color: $--color-text-primary;
  font-size: $--font-size-medium;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
