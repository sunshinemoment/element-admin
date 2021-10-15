const presetElements = [
  {
    type: 'input',
    element: 'el-input'
  },
  {
    type: 'input-disabled',
    element: 'el-input',
    attrs: {
      disabled: true
    }
  },
  {
    type: 'input-clearable',
    element: 'el-input',
    attrs: {
      clearable: true
    }
  },
  {
    type: 'password',
    element: 'el-input',
    attrs: {
      showPassword: true
    }
  },
  {
    type: 'textarea',
    element: 'el-input',
    attrs: {
      type: 'textarea'
    }
  },
  {
    type: 'textarea-autosize',
    element: 'el-input',
    attrs: {
      autosize: true
    }
  },
  {
    type: 'input-mini',
    element: 'el-input',
    attrs: {
      size: 'mini'
    }
  },
  {
    type: 'input-small',
    element: 'el-input',
    attrs: {
      size: 'small'
    }
  },
  {
    type: 'input-large',
    element: 'el-input',
    attrs: {
      size: 'large'
    }
  },
  {
    type: 'autocomplete',
    element: 'el-autocomplete'
  }
]

export default presetElements
