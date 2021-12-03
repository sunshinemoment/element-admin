const placeholder = '请输入'

const presetElements = [
  {
    type: 'input',
    element: 'el-input',
    attrs: {
      placeholder
    }
  },
  {
    type: 'input-disabled',
    element: 'el-input',
    attrs: {
      disabled: true,
      placeholder
    }
  },
  {
    type: 'input-clearable',
    element: 'el-input',
    attrs: {
      clearable: true,
      placeholder
    }
  },
  {
    type: 'password',
    element: 'el-input',
    attrs: {
      showPassword: true,
      placeholder
    }
  },
  {
    type: 'textarea',
    element: 'el-input',
    attrs: {
      type: 'textarea',
      placeholder
    }
  },
  {
    type: 'textarea-autosize',
    element: 'el-input',
    attrs: {
      autosize: true,
      placeholder
    }
  },
  {
    type: 'input-mini',
    element: 'el-input',
    attrs: {
      size: 'mini',
      placeholder
    }
  },
  {
    type: 'input-small',
    element: 'el-input',
    attrs: {
      size: 'small',
      placeholder
    }
  },
  {
    type: 'input-large',
    element: 'el-input',
    attrs: {
      size: 'large',
      placeholder
    }
  },
  {
    type: 'autocomplete',
    element: 'el-autocomplete'
  }
]

export default presetElements
