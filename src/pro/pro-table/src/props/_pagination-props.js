const props = {
  pageSize: {
    type: Number,
    default: 10
  },
  small: Boolean,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator(value) {
      return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
    },
    default: 7
  },
  currentPage: {
    type: Number,
    default: 1
  },
  layout: {
    default: 'prev, pager, next, jumper, ->, total'
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 40, 50, 100]
    }
  },
  popperClass: String,
  prevText: String,
  nextText: String,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}

export const propsKeys = Object.keys(props)

export default props
