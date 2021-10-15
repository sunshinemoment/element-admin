import paginationProps from './_pagination-props'
import tableProps from './_table-props'
import proProps from './_pro-props'

const props = {
  ...paginationProps,
  ...tableProps,
  ...proProps
}

export const propsKeys = Object.keys(props)

export default props
