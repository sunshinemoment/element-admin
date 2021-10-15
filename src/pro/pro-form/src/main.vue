<template>
  <div class="pro-form">
    <el-form v-bind="newFormProps" ref="formRef">
      <base-form-item
        v-for="(field, i) in newFields"
        :key="field[fieldKey || 'id'] || i"
        :formItemProps="field.formItemProps"
      >
        <dynamic-element :field="field" :model="model"></dynamic-element>
      </base-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
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
  },
  methods: {
    submit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.newFormProps.model)
        }
      })
    },
    reset() {
      this.$refs.formRef.resetFields()
      this.$emit('reset', this.newFormProps.model)
    }
  }
}
</script>
