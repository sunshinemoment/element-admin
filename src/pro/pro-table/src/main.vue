<template>
  <div class="pro-table" v-loading="newLoading">
    <el-table v-bind="newTableProps">
      <el-table-column
        v-for="(
          { render, slotname, headerSlotname, label, ...column }, i
        ) in columns"
        v-bind="column"
        :key="i"
      >
        <!-- 重置默认插槽 s -->
        <template slot-scope="scope">
          <!-- 自定义默认插槽  -->
          <template v-if="!!(slotname && $slots[slotname])">
            <slot :name="slotname" v-bind="scope"></slot>
          </template>
          <!-- /自定义默认插槽  -->

          <!-- 自定义渲染render方法  -->
          <template v-else-if="!!render">
            <custom-column-content
              :render="render"
              :column="column"
              :columnIndex="i"
              :scope="scope"
            ></custom-column-content>
          </template>
          <!-- /自定义渲染render方法  -->

          <!-- 数据中也可单独返回一个函数 -->
          <template v-if="typeof scope.row[column.prop] === 'function'">
            <custom-column-content
              :render="scope.row[column.prop]"
              :column="column"
              :columnIndex="i"
              :scope="scope"
            ></custom-column-content>
          </template>
          <!-- /数据中也可单独返回一个函数 -->

          <!-- 默认 -->
          <template v-else>
            {{ scope.row[column.prop] }}
          </template>
        </template>
        <!-- /默认 -->

        <!-- 重置表头插槽 s -->
        <template slot="header" slot-scope="scope">
          <template v-if="!!(headerSlotname && $slots[headerSlotname])">
            <slot :name="headerSlotname" v-bind="scope"></slot>
          </template>
          <template v-else>
            {{ label }}
          </template>
        </template>
        <!-- 重置表头插槽 e -->
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="newTableProps.data.length"
      v-bind="newPaginationProps"
      @size-change="sizeChange"
      @prev-click="prevChange"
      @next-click="nextChange"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
import props from './props'
import { normalizeTableProps, normalizePaginationProps } from './helper'

import CustomColumnContent from './coms/custom-column-content'

export default {
  name: 'pro-table',
  components: {
    CustomColumnContent
  },
  props,
  data() {
    return {
      stateLoading: false,
      stateData: [],
      statePagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  computed: {
    isFetch() {
      return typeof this.fetch === 'function'
    },
    newLoading() {
      if (this.isFetch) {
        return this.stateLoading
      }
      return false
    },
    newTableProps() {
      const props = normalizeTableProps(this.$props)
      if (this.isFetch) {
        props.data = this.stateData
      }
      return props
    },
    newPaginationProps() {
      const props = normalizePaginationProps(this.$props)
      if (this.isFetch) {
        Object.assign(props, this.statePagination)
      }
      return props
    }
  },
  mounted() {
    if (this.initLoad) {
      this.fetchData({
        currentPage: 1
      })
    }
  },
  methods: {
    fetchData(reqData) {
      if (!this.isFetch) {
        return
      }
      const fetchParams = {
        currentPage: this.statePagination.currentPage,
        pageSize: this.statePagination.pageSize,
        ...reqData
      }
      this.stateLoading = true
      this.fetch(fetchParams)
        .then((res) => {
          this.stateData = res.list
          this.statePagination.total = res.total
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.stateLoading = false
        })
    },
    sizeChange(pageSize) {
      this.statePagination.pageSize = pageSize
      this.fetchData({ pageSize })
      this.$emit('sizeChange', pageSize)
    },
    prevChange(page) {
      this.$emit('prevClick', page)
    },
    nextChange(page) {
      this.$emit('nextClick', page)
    },
    currentChange(currentPage) {
      this.statePagination.currentPage = currentPage
      this.fetchData({ currentPage })
      this.$emit('currentChange', currentPage)
    },
    refresh() {
      this.statePagination.currentPage = 1
      this.fetchData({ currentPage: 1 })
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-table {
  background-color: #fff;
  .el-pagination {
    text-align: center;
  }
}
</style>
