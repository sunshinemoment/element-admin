<template>
  <div class="pro-form">
    <el-form v-bind="newFormProps" ref="formRef">
      <!-- groups-layout -->
      <groups-layout v-if="groups" :groups="fieldsGroups" v-slot="{ group }">
        <grid-layout
          v-if="group.layout"
          :fields="group.fields"
          :fieldKey="fieldKey"
          v-slot="{ field }"
          :layout="group.layout"
        >
          <dynamic-element :field="field" :model="model"></dynamic-element>
        </grid-layout>
        <base-layout
          v-else
          :fields="group.fields"
          :fieldKey="fieldKey"
          v-slot="{ field }"
        >
          <dynamic-element :field="field" :model="model"></dynamic-element>
        </base-layout>
      </groups-layout>
      <!-- /groups-layout -->

      <!-- grid-layout -->
      <grid-layout
        v-else-if="grid"
        :fields="newFields"
        :fieldKey="fieldKey"
        v-slot="{ field }"
        :layout="layout"
      >
        <dynamic-element :field="field" :model="model"></dynamic-element>
      </grid-layout>
      <!-- /grid-layout -->

      <!-- base-layout -->
      <base-layout
        v-else
        :fields="newFields"
        :fieldKey="fieldKey"
        v-slot="{ field }"
      >
        <dynamic-element :field="field" :model="model"></dynamic-element>
      </base-layout>
      <!-- /base-layout -->

      <el-form-item v-if="submitter" v-bind="submitter.props">
        <el-button
          type="primary"
          v-bind="submitter.submitButtonProps"
          @click="submit"
        >
          {{ submitter.submitText || '提交' }}
        </el-button>
        <el-button v-bind="submitter.resetButtonProps" @click="reset">
          {{ submitter.resetText || '重置' }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import props from './props'
import { normalizeFormProps, normalizeFields } from './helper'

import BaseLayout from './coms/base-layout'
import GridLayout from './coms/grid-layout'
import GroupsLayout from './coms/groups-layout'
import DynamicElement from './coms/dynamic-element'

export default {
  name: 'pro-form',
  components: {
    BaseLayout,
    GridLayout,
    GroupsLayout,
    DynamicElement
  },
  props,
  computed: {
    newFormProps() {
      return normalizeFormProps(this.$props)
    },
    newFields() {
      return normalizeFields(this.fields)
    },
    fieldsGroups() {
      const fieldsKeys = this.newFields.map((field) => field.formItemProps.prop)
      return this.groups.reduce((pre, next) => {
        // 要排除掉不在fields中的元素
        const filterContent = (next.content || []).filter((item) =>
          fieldsKeys.includes(item)
        )
        return [
          ...pre,
          {
            ...next,
            fields: filterContent.map((item) =>
              this.newFields.find((field) => field.formItemProps.prop === item)
            )
          }
        ]
      }, [])
    }
  },
  mounted() {
    if (this.getFormInstance) {
      this.getFormInstance(this.$refs.formRef)
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
