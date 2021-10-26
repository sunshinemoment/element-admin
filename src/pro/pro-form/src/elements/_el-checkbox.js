const presetElements = [
  {
    type: 'checkbox',
    element: 'el-checkbox'
  },
  {
    type: 'checkbox-disabled',
    element: 'el-checkbox',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'checkbox-group',
    element: 'el-checkbox-group',
    childrenElement: 'el-checkbox'
  },
  {
    type: 'checkbox-button-group',
    element: 'el-checkbox-group',
    childrenElement: 'el-checkbox-button'
  }
]

export default presetElements
