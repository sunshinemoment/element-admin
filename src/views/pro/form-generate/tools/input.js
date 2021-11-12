const item = {
  name: 'Input',
  type: 'input',
  initialValue: '',
  formItemPropsConfig: {
    name: '表单项配置',
    key: 'formItemProps',
    content: [
      {
        name: '属性标题',
        key: 'label',
        value: '',
        element: 'input'
      },
      {
        name: '属性键',
        key: 'prop',
        value: '',
        element: 'input'
      }
    ]
  },
  attributesConfig: {
    name: '表单元素配置',
    key: 'attributes',
    content: [
      {
        name: '是否禁用',
        key: 'disabled',
        value: false,
        element: 'checkbox'
      }
    ]
  }
}

export default item
