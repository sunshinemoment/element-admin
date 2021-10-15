import tableProps from './_table-props'
import paginationProps from './_pagination-props'
import proProps from './_pro-props'

const props = {
  ...tableProps,
  ...paginationProps,
  ...proProps
}

export const propsKeys = Object.keys(props)

export default props
