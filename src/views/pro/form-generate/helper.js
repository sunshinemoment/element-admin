export const TYPE_BASE = 'base'
export const TYPE_GIRD = 'gird'
export const TYPE_GROUPS = 'groups'

export function normalizeToolDataToGroupData(data) {
  return {
    label: data.name,
    showLabel: data.type === TYPE_GROUPS,
    content: []
  }
}
