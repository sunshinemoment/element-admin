function normalizechildrenElement(childrenElement) {
  if (!childrenElement.text) {
    childrenElement.text = childrenElement.label
  }
  return childrenElement
}

const presetElements = [
  {
    type: 'checkbox',
    element: 'el-checkbox',
    normalizechildrenElement
  },
  {
    type: 'checkbox-disabled',
    element: 'el-checkbox',
    attrs: {
      disabled: true
    },
    normalizechildrenElement
  },
  {
    type: 'checkbox-group',
    element: 'el-checkbox-group',
    childrenElement: 'el-checkbox',
    normalizechildrenElement
  },
  {
    type: 'checkbox-button-group',
    element: 'el-checkbox-group',
    childrenElement: 'el-checkbox-button',
    normalizechildrenElement
  }
]

export default presetElements
