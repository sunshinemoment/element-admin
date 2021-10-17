<template>
  <div class="pro-form__grid-layout">
    <el-row :gutter="20">
      <el-col
        v-bind="layout"
        class="pro-form__grid-layout-item"
        v-for="(field, i) in fields"
        :key="field[fieldKey || 'id'] || i"
      >
        <el-form-item v-bind="field.formItemProps">
          <slot v-bind:field="field"></slot>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    fields: Array,
    fieldKey: String,
    layout: Object
  }
}
</script>
