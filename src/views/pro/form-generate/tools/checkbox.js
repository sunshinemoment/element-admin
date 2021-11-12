const item = {
  name: 'Checkbox',
  type: 'checkbox',
  initialValue: false,
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
        name: '选项值',
        key: 'label',
        value: '',
        element: 'input'
      },
      {
        name: '是否禁用',
        key: 'disabled',
        value: false,
        element: 'checkbox'
      }
    ]
  },
  childrenConfig: {
    name: '子元素配置',
    key: 'children',
    childType: 'string',
    content: [
      {
        name: '选项名称',
        value: '',
        element: 'input'
      }
    ]
  }
}

export default item
