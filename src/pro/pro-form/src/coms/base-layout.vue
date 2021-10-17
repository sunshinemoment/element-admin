<template>
  <div class="pro-form__base-layout">
    <el-form-item
      v-for="(field, i) in fields"
      :key="field[fieldKey || 'id'] || i"
      v-bind="field.formItemProps"
    >
      <slot v-bind:field="field"></slot>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    fields: Array,
    fieldKey: String
  }
}
</script>
