function normalizechildrenElement(childrenElement) {
  if (!childrenElement.text) {
    childrenElement.text = childrenElement.label
  }
  return childrenElement
}

const presetElements = [
  {
    type: 'select',
    element: 'el-select',
    childrenElement: 'el-option',
    normalizechildrenElement
  },
  {
    type: 'select-disabled',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      disabled: true
    },
    normalizechildrenElement
  },
  {
    type: 'select-clearable',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      clearable: true
    },
    normalizechildrenElement
  },
  {
    type: 'select-multiple',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      multiple: true
    },
    normalizechildrenElement
  },
  {
    type: 'select-medium',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      size: 'medium'
    },
    normalizechildrenElement
  },
  {
    type: 'select-small',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      size: 'small'
    },
    normalizechildrenElement
  },
  {
    type: 'select-mini',
    element: 'el-select',
    childrenElement: 'el-option',
    attrs: {
      size: 'mini'
    },
    normalizechildrenElement
  }
]

export default presetElements
