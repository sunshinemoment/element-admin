<template>
  <div class="_editor-tools">
    <editor-tools-group
      :data="layoutTool"
      group-name="layout"
      :clone="layoutDraggableClone"
    ></editor-tools-group>
    <editor-tools-group
      :data="elementTool"
      group-name="element"
    ></editor-tools-group>
  </div>
</template>

<script>
import EditorToolsGroup from './_editor-tools-group'
import layoutTool from './config/layout-tool'
import elementTool from './config/element-tool'
import { normalizeToolDataToGroupData } from './helper'

export default {
  components: {
    EditorToolsGroup
  },
  data() {
    return {
      layoutTool,
      elementTool
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
