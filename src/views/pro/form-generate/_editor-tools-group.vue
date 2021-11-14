<template>
  <div class="_editor-tools-group">
    <div class="_editor-tools-group__head">
      <h3>{{ title }}</h3>
    </div>
    <div class="_editor-tools-group__main">
      <draggable
        class="_editor-tools-group__draggable"
        ghostClass="_editor-tools-group__draggable--ghost"
        chosenClass="_editor-tools-group__draggable--chosen"
        dragClass="_editor-tools-group__draggable--drag"
        :list="tools"
        :group="{ name: groupName, pull: 'clone', put: false }"
        :sort="false"
        :clone="draggableClone"
        @start="start"
        @add="add"
        @remove="remove"
        @update="update"
        @end="end"
        @clone="clone2"
        @choose="choose"
        @unchoose="unchoose"
        @change="change"
      >
        <div
          class="_editor-tools-group__item"
          v-for="(tool, i) in tools"
          :key="i"
        >
          {{ tool.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: {
    title: String,
    tools: Array,
    data: Object,
    groupName: String,
    clone: Function
  },
  methods: {
    draggableClone(original) {
      if (this.clone) {
        return this.clone(original)
      }
      return original
    },
    start() {
      console.log('start', 1, arguments)
    },
    add() {
      console.log('add', 1, arguments)
    },
    remove() {
      // console.log('remove', 1, arguments)
    },
    update() {
      // console.log('update', 1, arguments)
    },
    end() {
      // console.log('end', 1, arguments)
    },
    clone2() {
      // console.log('clone2', 1, arguments)
    },
    choose() {
      // console.log('choose', 1, arguments)
    },
    unchoose() {
      // console.log('unchoose', 1, arguments)
    },
    change() {
      // console.log('change', 1, arguments)
    }
  }
}
</script>

<style lang="scss" scoped>
._editor-tools-group__head {
  padding-left: 10px;
  h3 {
    font-size: 14px;
    margin: 0;
  }
}
._editor-tools-group__draggable {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
._editor-tools-group__item {
  width: 90px;
  line-height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: #f5f5f5;
  font-size: 12px;
  text-align: center;
  cursor: move;
  user-select: none;
}
</style>
