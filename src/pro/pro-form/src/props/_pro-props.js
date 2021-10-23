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
  getFormInstance: Function,
  border: [Boolean, Object],
  groups: Array,
  /**
   *  groups: [
   *    { label: '', content: ['name', 'date'] },
   *    { label: '', content: ['region', 'delivery'] },
   *    { label: '', content: ['type'] },
   *    { label: '', content: ['desc', 'resource'] }
   *  ]
   */
  grid: Boolean,
  layout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 12,
      lg: 8,
      xl: 6
    })
  }
}

export const propsKeys = Object.keys(props)

export default props
