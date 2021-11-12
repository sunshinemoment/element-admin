const item = {
  name: 'Radio',
  type: 'radio',
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
        name: '属性标题',
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
      group: [
        {
          name: '选项一',
          list: [
            {
              name: '选项名',
              key: 'label',
              value: '选项一',
              element: 'input'
            },
            {
              name: '选项值',
              key: 'value',
              value: '1',
              element: 'input'
            }
          ]
        }
      ]
    }
  ]
}

export default item
