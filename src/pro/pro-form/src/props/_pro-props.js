const props = {
  // 原生表单属性
  formProps: Object,
  // 表单域
  fields: {
    type: Array,
    default: () => []
  },
  // 表单域唯一键
  fieldKey: String
}

export const propsKeys = Object.keys(props)

export default props
