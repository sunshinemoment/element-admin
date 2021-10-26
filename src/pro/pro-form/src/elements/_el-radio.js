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
    childrenElement: 'el-radio'
  },
  {
    type: 'radio-button-group',
    element: 'el-radio-group',
    childrenElement: 'el-radio-button'
  }
]

export default presetElements
