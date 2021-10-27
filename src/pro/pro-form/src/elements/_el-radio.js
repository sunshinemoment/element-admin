function normalizechildrenElement(childrenElement) {
  if (!childrenElement.text) {
    childrenElement.text = childrenElement.label
  }
  return childrenElement
}

const presetElements = [
  {
    type: 'radio',
    element: 'el-radio',
    normalizechildrenElement
  },
  {
    type: 'radio-disabled',
    element: 'el-radio',
    attrs: {
      disabled: true
    },
    normalizechildrenElement
  },
  {
    type: 'radio-group',
    element: 'el-radio-group',
    childrenElement: 'el-radio',
    normalizechildrenElement
  },
  {
    type: 'radio-button-group',
    element: 'el-radio-group',
    childrenElement: 'el-radio-button',
    normalizechildrenElement
  }
]

export default presetElements
