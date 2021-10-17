import { propsKeys as proPropsKeys } from './props/_pro-props'
import { propsKeys as proTablePropsKeys } from '@/pro/pro-table/src/props'
import { propsKeys as proFormPropsKeys } from '@/pro/pro-form/src/props'

export function normalizeProTableProps(props) {
  const { proTableProps } = props
  return Object.entries(props).reduce((newProTableProps, [k, v]) => {
    if (proPropsKeys.includes(k)) {
      return newProTableProps
    }

    if (proTablePropsKeys.includes(k)) {
      return {
        [k]: v,
        ...newProTableProps
      }
    }

    return newProTableProps
  }, proTableProps)
}

export function normalizeProFormProps(props) {
  const { proFormProps } = props
  return Object.entries(props).reduce((newProFormProps, [k, v]) => {
    if ([...proTablePropsKeys, ...proPropsKeys].includes(k)) {
      return newProFormProps
    }

    if (proFormPropsKeys.includes(k)) {
      return {
        [k]: v,
        ...newProFormProps
      }
    }

    return newProFormProps
  }, proFormProps)
}
