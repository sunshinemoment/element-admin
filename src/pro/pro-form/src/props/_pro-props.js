const props = {
  // 原生表单属性
  formProps: Object,
  // 表单域
  fields: {
    type: Array,
    default: () => []
  },
  // 表单域唯一键
  fieldKey: String,
  // 表单提交重置按钮配置
  submitter: [Boolean, Object],
  // 父组件获取子组件form实例
  getFormInstance: Function
}

export const propsKeys = Object.keys(props)

export default props
