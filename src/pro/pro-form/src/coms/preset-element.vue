<template>
  <component
    :is="fieldData.element"
    v-model="modelData[fieldData.formItemProps.prop]"
    v-bind="fieldData.attributes"
    v-on="fieldData.events"
  >
    <slot>
      <template v-if="fieldData.option">
        <component
          :is="fieldData.option"
          v-for="(option, i) in fieldData.attributes.options || []"
          :key="getOptionKey(option, i)"
          v-bind="getOptionAttrs(option)"
        >
          <template v-if="fieldData.normalizeOptionSlot">
            {{ fieldData.normalizeOptionSlot(option) }}
          </template>
        </component>
      </template>
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    fieldData: Object,
    modelData: Object
  },
  methods: {
    getOptionKey(option, i) {
      if (option.key !== undefined) {
        return option.key
      }
      return option.value === undefined ? i : option.value
    },
    getOptionAttrs(option) {
      const normalizeOptionAttrs = this.fieldData.normalizeOptionAttrs
      return {
        ...option,
        ...(normalizeOptionAttrs ? normalizeOptionAttrs(option) : null)
      }
    }
  }
}
</script>
