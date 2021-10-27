const presetElements = [
  {
    type: 'input-number',
    element: 'el-input-number'
  },
  {
    type: 'input-number-disabled',
    element: 'el-input-number',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'input-number-medium',
    element: 'el-input-number',
    attrs: {
      size: 'medium'
    }
  },
  {
    type: 'input-number-small',
    element: 'el-input-number',
    attrs: {
      size: 'small'
    }
  },
  {
    type: 'input-number-mini',
    element: 'el-input-number',
    attrs: {
      size: 'mini'
    }
  },
  {
    type: 'input-number-right',
    element: 'el-input-number',
    attrs: {
      controlsPosition: 'right'
    }
  }
]

export default presetElements
