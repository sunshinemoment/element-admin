<template>
  <div class="_editor-props">
    <pro-form
      ref="formRef"
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
  generateDynamicModelByfieldConfig,
  generateDynamiFieldsByfieldConfig,
  generateDynamicGroupsByfieldConfig
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
      this.setFormConfig(val)
    },
    model: {
      handler(val, preVal) {
        this.$emit('change', val)
        console.log(val, preVal)
      },
      deep: true
    }
  },
  created() {
    this.setFormConfig(this.field)
  },
  methods: {
    setFormConfig(config) {
      this.model = generateDynamicModelByfieldConfig(config)
      this.fields = generateDynamiFieldsByfieldConfig(config)
      this.groups = generateDynamicGroupsByfieldConfig(config)
    },
    submit(val) {
      console.log(val)
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
