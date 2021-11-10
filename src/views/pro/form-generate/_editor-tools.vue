<template>
  <div class="_editor-tools">
    <editor-tools-group
      title="布局组件"
      :tools="layoutTools"
      group-name="layout"
      :clone="layoutDraggableClone"
    ></editor-tools-group>
    <editor-tools-group
      title="元素组件"
      :tools="elementTools"
      group-name="element"
    ></editor-tools-group>
  </div>
</template>

<script>
import EditorToolsGroup from './_editor-tools-group'
import { normalizeToolDataToGroupData } from './helper'
import elementTools from './tools'

const layoutTools = [
  {
    name: '基础布局',
    type: 'base'
  },
  {
    name: '栅格布局',
    type: 'gird'
  },
  {
    name: '分组布局',
    type: 'groups'
  }
]

export default {
  components: {
    EditorToolsGroup
  },
  data() {
    return {
      layoutTools,
      elementTools
    }
  },
  methods: {
    layoutDraggableClone(original) {
      return normalizeToolDataToGroupData(original)
    }
  }
}
</script>

<style lang="scss" scoped>
._editor-tools-group {
  margin-top: 20px;
}
</style>
