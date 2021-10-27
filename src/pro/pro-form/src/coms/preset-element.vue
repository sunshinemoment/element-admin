<template>
  <component
    :is="fieldData.element"
    v-model="modelData[fieldData.formItemProps.prop]"
    v-bind="fieldData.attributes"
    v-on="fieldData.events"
  >
    <template v-if="fieldData.children">
      <template v-for="(child, i) in normalizeChilren(fieldData)">
        <template v-if="typeof child === 'object'">
          <component
            :is="child.element"
            :key="getChildKey(child, i)"
            v-bind="getChilAttrs(child)"
          >
            <template v-if="child.render">
              <custom-render :render="child.render"></custom-render>
            </template>
            <template v-else>
              {{ child.text }}
            </template>
          </component>
        </template>
        <template v-else>
          {{ child }}
        </template>
      </template>
    </template>
  </component>
</template>

<script>
import { normalizeReturnRender } from '@/pro/helper'
const CustomRender = {
  props: {
    render: Function
  },
  render(h) {
    if (typeof this.render === 'function') {
      const content = this.render.call(this, h)
      return normalizeReturnRender(h, content)
    }
    return ''
  }
}

export default {
  components: {
    CustomRender
  },
  props: {
    fieldData: Object,
    modelData: Object
  },
  methods: {
    // 设置统一 child.element
    normalizeChilren(fieldData) {
      const children = fieldData.children
      const normalizechildrenElement = fieldData.normalizechildrenElement
      return children.map((child) => {
        if (
          typeof child === 'object' &&
          fieldData.childrenElement &&
          !child.element
        ) {
          child.element = fieldData.childrenElement
          if (normalizechildrenElement) {
            return normalizechildrenElement(child)
          }
          return child
        }

        return child
      })
    },
    getChildKey(child, i) {
      if (child.key !== undefined) {
        return child.key
      }
      return child.value === undefined ? i : child.value
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getChilAttrs({ element, render, text, ...rest }) {
      return rest
    }
  }
}
</script>
