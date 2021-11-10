const item = {
  name: 'Radio',
  type: 'radio',
  initialValue: '',
  config: [
    {
      name: '表单项配置',
      type: 'formItemProps',
      list: [
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
    {
      name: '表单元素配置',
      type: 'attributes',
      list: [
        {
          name: '绑定值',
          key: 'label',
          value: 1,
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
    {
      name: '子元素配置',
      type: 'children',
      option: {
        name: '选项名称',
        value: '',
        element: 'input'
      }
    }
  ]
}

export default item
