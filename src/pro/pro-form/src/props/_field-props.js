const props = {
  // 表单域的类型
  type: {
    type: String,
    default: 'input'
  },
  // 元素标签
  element: '',
  // 表单域自定义渲染, 配置了render之后, 以上type和attributes失效
  render: Function,
  // 表单域el-form-item原生属性
  formItemProps: Object,
  // element 组件库表单元素原生属性
  attributes: Object,
  events: Object,
  // 子选项 如 select
  option: String,
  normalizeOptionAttrs: Function,
  normalizeOptionSlot: Function
}

export const propsKeys = Object.keys(props)

export default props
