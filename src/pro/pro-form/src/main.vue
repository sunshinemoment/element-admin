<template>
  <div class="pro-form">
    <el-form v-bind="newFormProps">
      <base-form-item
        v-for="(field, i) in newFields"
        :key="field[fieldKey || 'id'] || i"
        :formItemProps="field.formItemProps"
      >
        <dynamic-element :field="field" :model="model"></dynamic-element>
      </base-form-item>
    </el-form>
  </div>
</template>

<script>
import props from './props'
import { normalizeFormProps, normalizeFields } from './helper'

import BaseFormItem from './coms/base-form-item'
import DynamicElement from './coms/dynamic-element'

export default {
  name: 'pro-form',
  components: {
    BaseFormItem,
    DynamicElement
  },
  props,
  computed: {
    newFormProps() {
      return normalizeFormProps(this.$props)
    },
    newFields() {
      return normalizeFields(this.fields)
    }
  }
}
</script>
