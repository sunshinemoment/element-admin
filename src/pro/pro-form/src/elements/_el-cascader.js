const presetElements = [
  {
    type: 'cascader',
    element: 'el-cascader',
    childrenElement: 'el-option'
  },
  {
    type: 'cascader-disabled',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'cascader-clearable',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      clearable: true
    }
  },
  {
    type: 'cascader-multiple',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      multiple: true
    }
  },
  {
    type: 'cascader-medium',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      size: 'medium'
    }
  },
  {
    type: 'cascader-small',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      size: 'small'
    }
  },
  {
    type: 'cascader-mini',
    element: 'el-cascader',
    childrenElement: 'el-option',
    attrs: {
      size: 'mini'
    }
  }
]

export default presetElements
