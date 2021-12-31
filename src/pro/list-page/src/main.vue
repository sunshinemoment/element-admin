<template>
  <div class="list-page">
    <pro-form
      ref="formRef"
      v-bind="newProFormProps"
      @submit="formSubmit"
      @reset="formReset"
    ></pro-form>
    <slot name="addon"></slot>
    <pro-table
      ref="tableRef"
      :init-load="false"
      v-bind="newProTableProps"
      v-on="tableListeners"
    ></pro-table>
  </div>
</template>

<script>
import ProForm from '@/pro/pro-form'
import ProTable from '@/pro/pro-table'

import props from './props'
import { normalizeProTableProps, normalizeProFormProps } from './helper'

const tableListeners = ['sizeChange', 'prevClick', 'nextClick', 'currentChange']

export default {
  name: 'list-page',
  components: {
    ProForm,
    ProTable
  },
  props,
  computed: {
    isFetch() {
      return this.$refs.tableRef.isFetch
    },
    newProFormProps() {
      return normalizeProFormProps(this.$props)
    },
    newProTableProps() {
      return normalizeProTableProps(this.$props)
    },
    tableListeners() {
      const listeners = Object.entries(this.$listeners).reduce(
        (pre, [k, v]) => {
          if (tableListeners.includes(k)) {
            return {
              ...pre,
              [k]: v
            }
          }
          return pre
        },
        {}
      )
      return listeners
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    formSubmit(model) {
      if (this.isFetch) {
        this.$refs.tableRef.fetchData({
          ...model,
          currentPage: 1
        })
      }
      this.$emit('formSubmit', model)
    },
    formReset(model) {
      if (this.isFetch) {
        this.$refs.tableRef.fetchData({
          ...model,
          currentPage: 1
        })
      }
      this.$emit('formReset', model)
    },
    fetchData(data) {
      this.$refs.tableRef.fetchData(data)
    },
    refresh() {
      const { model } = this.$refs.formRef.newFormProps
      this.fetchData({
        ...model,
        currentPage: 1
      })
    }
  }
}
</script>
