import proFormProps from '@/pro/pro-form/src/props'
import proTableProps from '@/pro/pro-table/src/props'
import proProps from './_pro-props'

// 顺序: form -> pagination -> table -> proForm -> proTable -> list-page

const props = {
  ...proFormProps,
  ...proTableProps,
  ...proProps
}

export const propsKeys = Object.keys(props)

export default props