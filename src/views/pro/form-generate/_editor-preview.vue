<template>
  <div class="_editor-preview">
    <el-form ref="formRef" :model="model">
      <draggable
        class="_editor-preview__draggable-layout"
        ghostClass="_editor-preview__draggable-layout--ghost"
        :list="groups"
        :sort="false"
        group="layout"
        @add="add"
        @end="end"
        @update="update"
        @change="layoutDraggableChange"
        @choose="choose"
        filter="._editor-preview__draggable-layout-container"
      >
        <div
          class="_editor-preview__draggable-layout-container"
          v-for="(group, i) in groups"
          :key="i"
        >
          <div class="_editor-preview__draggable-layout-head">
            <h3>{{ group.label }}</h3>
          </div>
          <draggable
            class="
              _editor-preview__draggable-layout-main
              _editor-preview__draggable-elements
            "
            ghostClass="_editor-preview__draggable-elements--ghost"
            :list="group.content"
            group="element"
            @change="elementDraggableChange"
          >
            <div>
              <!-- 这里空标签解决第一次拖拽引起排序错乱的bug todo: 待调研 -->
            </div>
            <el-form-item
              v-for="(field, i) in fields"
              :key="i"
              v-bind="field.formItemProps"
              :class="[
                '_editor-preview__draggable-item',
                {
                  '_editor-preview__draggable-item--active':
                    currentField &&
                    currentField.formItemProps.prop === field.formItemProps.prop
                }
              ]"
            >
              <div
                @click.stop="selectFieldItem(field)"
                class="_editor-preview__draggable-item-inner"
              >
                <dynamic-element
                  :field="field"
                  :model="model"
                ></dynamic-element>
              </div>
            </el-form-item>
          </draggable>
          <div
            class="_editor-preview__draggable-layout-foot"
            v-if="fields.length"
          >
            <el-button size="small" type="primary" @click="submit">
              提交
            </el-button>
            <el-button size="small" @click="reset">重置</el-button>
          </div>
          <!-- <div class="_editor-preview__draggable__empty-tip">
            please draggable element
          </div> -->
        </div>
        <div
          class="_editor-preview__draggable__empty-tip"
          v-if="!groups.length"
        >
          please draggable layout
        </div>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import { DynamicElement } from '@/pro/pro-form'
import { toolsMap } from './tools'

export default {
  props: {
    currentField: Object,
    currentConfigModel: Object
  },
  components: {
    Draggable,
    DynamicElement
  },
  data() {
    return {
      groups: [],
      model: {},
      fields: []
    }
  },
  watch: {
    currentConfigModel(val) {
      // if ()
    }
  },
  methods: {
    add() {
      console.log('add', 2, arguments)
    },
    end() {
      console.log('end', 2, arguments)
    },
    update() {
      console.log('update', 2, arguments)
    },
    layoutDraggableChange(evt) {
      this.groups = [evt.added.element]
      this.model = {}
      this.fields = []
    },
    choose() {
      // console.log('choose', 1, arguments)
    },
    elementDraggableChange() {
      // console.log(2, arguments)
      const content = this.groups?.[0]?.content || []
      this.fields = content.filter((item) => item)
      this.model = this.fields.reduce((pre, next) => {
        return {
          ...pre,
          [next.formItemProps.prop]:
            this.model[next.formItemProps.prop] === undefined
              ? toolsMap[next.type].initialValue
              : this.model[next.formItemProps.prop]
        }
      }, {})
    },
    selectFieldItem(field) {
      this.$emit('select', field)
    },
    submit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          console.log(this.model)
        }
      })
    },
    reset() {
      this.$refs.formRef.resetFields()
      console.log('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
._editor-preview,
.el-form,
._editor-preview__draggable-layout {
  height: 100%;
  position: relative;
}
._editor-preview__draggable-layout-container {
  height: 100%;
  position: relative;
}
._editor-preview__draggable-layout-head {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  background: rgba($color: #fff, $alpha: 0.8);
  h3 {
    margin: 0;
    font-size: 14px;
  }
}
._editor-preview__draggable-layout-foot {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  text-align: center;
  background: rgba($color: #fff, $alpha: 0.8);
}
._editor-preview__draggable-elements {
  height: 100%;
  padding: 36px 10px 60px;
  overflow-y: auto;
  /deep/ .el-form-item {
    margin-bottom: 10px;
    padding: 10px;
    cursor: move;
    border: 1px dashed transparent;
    &._editor-preview__draggable-item--active {
      border: 1px solid #409eff;
    }
    &:hover {
      border: 1px dashed #409eff;
    }
  }
}
._editor-preview__draggable__empty-tip {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #cccccc;
}
/deep/ {
  ._editor-preview__draggable-layout--ghost {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  ._editor-preview__draggable-elements--ghost {
    width: 100%;
    margin: 0;
  }
}
</style>
