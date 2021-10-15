import { propsKeys as tablePropsKeys } from './props/_table-props'
import { propsKeys as paginationPropsKeys } from './props/_pagination-props'
import { propsKeys as proPropsKeys } from './props/_pro-props'

export function normalizeTableProps(props) {
  const { tableProps = {} } = props
  return Object.entries(props).reduce((newTableProps, [k, v]) => {
    if (proPropsKeys.includes(k)) {
      return newTableProps
    }

    if (tablePropsKeys.includes(k)) {
      return {
        [k]: v,
        ...newTableProps
      }
    }

    return newTableProps
  }, tableProps)
}

export function normalizePaginationProps(props) {
  const { paginationProps = {} } = props
  return Object.entries(props).reduce((newPaginationProps, [k, v]) => {
    if ([...tablePropsKeys, ...proPropsKeys].includes(k)) {
      return newPaginationProps
    }

    if (paginationPropsKeys.includes(k)) {
      return {
        [k]: v,
        ...newPaginationProps
      }
    }

    return newPaginationProps
  }, paginationProps)
}
