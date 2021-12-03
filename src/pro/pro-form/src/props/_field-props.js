const props = {
  // 表单域的类型
  type: {
    type: String,
    default: 'input'
  },
  // 元素标签
  element: String,
  // 表单域自定义渲染, 配置了render之后, 以上type和attributes失效
  render: Function,
  // 表单域el-form-item原生属性
  formItemProps: Object,
  // element 组件库表单元素原生属性
  attributes: Object,
  events: Object,
  // [{ element: '', text, ...rest }]
  children: Array,
  childrenElement: String,
  normalizechildrenElement: Function,
  // 表单只读
  readonly: Boolean

}

export const propsKeys = Object.keys(props)

export default props
