const props = {
  // 原生表格属性
  tableProps: Object,
  // 原生分页属性
  paginationProps: Object,
  // 表格列属性
  columns: {
    type: Array,
    default: () => []
  },
  // 请求函数, 必须是一个返回promise的函数
  fetch: Function,
  // 初始化加载
  initLoad: {
    type: Boolean,
    default: true
  }
}

export const propsKeys = Object.keys(props)

export default props
