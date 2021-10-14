const presetElements = [
  {
    type: 'radio',
    element: 'el-radio'
  },
  {
    type: 'radio-button',
    element: 'el-radio-button'
  },
  {
    type: 'radio-disabled',
    element: 'el-radio',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'radio-button-disabled',
    element: 'el-radio-button',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'radio-group',
    element: 'el-radio-group',
    option: 'el-radio',
    normalizeOptionAttrs(option) {
      return {
        label: option.value
      }
    },
    normalizeOptionSlot(option) {
      return option.label
    }
  },
  {
    type: 'radio-button-group',
    element: 'el-radio-group',
    option: 'el-radio-button',
    normalizeOptionAttrs(option) {
      return {
        label: option.value
      }
    },
    normalizeOptionSlot(option) {
      return option.label
    }
  }
]

export default presetElements
