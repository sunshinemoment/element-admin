<template>
  <div class="_editor-props">
    <pro-form
      :model="model"
      :fields="fields"
      :groups="groups"
      submitter
      @submit="submit"
      size="small"
    ></pro-form>
  </div>
</template>

<script>
import {
  generateDynamicModelByConfig,
  generateDynamicFieldsByConfig,
  generateDynamicGroupsByConfig
} from './helper'

export default {
  props: {
    field: Object
  },
  data() {
    return {
      model: {},
      fields: [],
      groups: []
    }
  },
  watch: {
    field(val) {
      const config = val.attributes._config
      this.setFormConfig(config)
    }
  },
  created() {
    const config = this.field.attributes._config
    this.setFormConfig(config)
  },
  methods: {
    setFormConfig(config) {
      this.model = generateDynamicModelByConfig(config)
      this.fields = generateDynamicFieldsByConfig(config)
      this.groups = generateDynamicGroupsByConfig(config)
    },
    submit() {
      console.log(999)
    }
  }
}
</script>

<style lang="scss" scoped>
._editor-props {
  padding: 20px 10px;
}
/deep/ .pro-form__groups-layout__group-title {
  font-size: 14px;
}
</style>
