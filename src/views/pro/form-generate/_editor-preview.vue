<template>
  <div class="_editor-preview">
    <el-form ref="formRef" :model="model">
      <draggable
        class="_editor-preview__draggable-layout"
        ghostClass="_editor-preview__draggable-layout-item--ghost"
        :list="groups"
        :sort="false"
        group="layout"
        @add="add"
        @end="end"
        @update="update"
        @change="layoutDraggableChange"
        @choose="choose"
        filter="._editor-preview__draggable-layout-item"
      >
        <div
          class="_editor-preview__draggable-layout-item"
          v-for="(group, i) in groups"
          :key="i"
        >
          <div class="_editor-preview__draggable-layout-item-head">
            <h3>{{ group.label }}</h3>
          </div>
          <draggable
            class="
              _editor-preview__draggable-layout-item-main
              _editor-preview__draggable-elements
            "
            ghostClass="_editor-preview__draggable-elements-item--ghost"
            :list="group.content"
            group="element"
            @change="elementDraggableChange"
          >
            <el-form-item
              v-for="field in fields"
              :key="field.formItemProps.prop"
              v-bind="field.formItemProps"
            >
              <dynamic-element
                class="_editor-preview__draggable-elements-item"
                :field="field"
                :model="model"
              ></dynamic-element>
            </el-form-item>
          </draggable>
          <div
            class="_editor-preview__draggable-layout-item-foot"
            v-if="fields.length"
          >
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="reset">重置</el-button>
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
import { uid } from 'uid'
import { DynamicElement, helper } from '@/pro/pro-form'

export default {
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
  computed: {
    // content() {
    //   if (this.groups?.[0]?.content) {
    //     return this.groups[0].content || []
    //   }
    //   return []
    // },
    // fields() {
    //   return helper.normalizeFields(
    //     this.content.map((item) => {
    //       const id = uid()
    //       return {
    //         type: item.type,
    //         formItemProps: {
    //           label: item.name + '-' + id,
    //           prop: id
    //         }
    //       }
    //     })
    //   )
    // }
  },
  methods: {
    add() {
      // console.log('add', 2, arguments)
    },
    end() {
      // console.log('end', 2, arguments)
    },
    update() {
      // console.log('update', 2, arguments)
    },
    layoutDraggableChange(evt) {
      this.groups = [evt.added.element]
      this.model = []
      this.fields = []
    },
    choose() {
      // console.log('choose', 1, arguments)
    },
    elementDraggableChange() {
      // console.log(2, arguments)
      const content = this.groups?.[0]?.content || []
      this.fields = helper.normalizeFields(
        content.map((item) => {
          console.log(item, 'item')
          const id = uid()
          return {
            type: item.type,
            formItemProps: {
              label: item.name + '-' + id,
              prop: id
            },
            attributes: {
              _self: item
            }
          }
        })
      )
      this.model = this.fields.reduce((pre, next) => {
        return {
          ...pre,
          [next.formItemProps.prop]: next.attributes._self.defaultVal
        }
      }, {})
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
._editor-preview__draggable-layout-item {
  height: 100%;
  position: relative;
}
._editor-preview__draggable-layout-item-head {
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
._editor-preview__draggable-layout-item-foot {
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
  ._editor-preview__draggable-layout-item--ghost {
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
  ._editor-preview__draggable-elements-item--ghost {
    width: 100%;
    margin: 0;
  }
}
</style>
