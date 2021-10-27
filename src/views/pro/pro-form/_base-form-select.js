const children = [
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  },
  {
    value: '选项3',
    label: '蚵仔煎'
  },
  {
    value: '选项4',
    label: '龙须面'
  },
  {
    value: '选项5',
    label: '北京烤鸭'
  }
]

export default {
  data() {
    return {
      base_form_select_model: {
        base_form_select: '',
        base_form_select_disabled: '',
        base_form_select_clearable: '',
        base_form_select_multiple: [],
        base_form_select_medium: '',
        base_form_select_small: '',
        base_form_select_mini: ''
      },
      base_form_select_fields: [
        {
          type: 'select',
          formItemProps: {
            label: '选择器',
            prop: 'base_form_select'
          },
          children
        },
        {
          type: 'select-disabled',
          formItemProps: {
            label: '选择器-禁用状态',
            prop: 'base_form_select_disabled'
          },
          children
        },
        {
          type: 'select-clearable',
          formItemProps: {
            label: '选择器-可清空单选',
            prop: 'base_form_select_clearable'
          },
          children
        },
        {
          type: 'select-multiple',
          formItemProps: {
            label: '选择器-基础多选',
            prop: 'base_form_select_multiple'
          },
          children
        },
        {
          type: 'select-medium',
          formItemProps: {
            label: '选择器-中号大小',
            prop: 'base_form_select_medium'
          },
          children
        },
        {
          type: 'select-small',
          formItemProps: {
            label: '选择器-小号大小',
            prop: 'base_form_select_small'
          },
          children
        },
        {
          type: 'select-mini',
          formItemProps: {
            label: '选择器-迷你大小',
            prop: 'base_form_select_mini'
          },
          children
        }
      ]
    }
  }
}
