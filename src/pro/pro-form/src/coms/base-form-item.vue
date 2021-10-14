<template>
  <el-form-item v-bind="formItemProps">
    <slot></slot>
  </el-form-item>
</template>

<script>
export default {
  props: {
    formItemProps: Object
  }
}
</script>
