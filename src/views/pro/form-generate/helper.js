import { uid } from 'uid'
import { helper } from '@/pro/pro-form'

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

export function generateDynamicFields(content) {
  return helper.normalizeFields(
    content.map((item) => {
      const id = uid()
      return {
        type: item.type,
        formItemProps: {
          label: '_' + item.name + '_' + id,
          prop: '_' + id
        },
        attributes: {
          _config: item.config
        }
      }
    })
  )
}

export function generateDynamicModelByConfig(config) {
  return config.reduce((pre, next) => {
    const model = {
      ...pre,
      ...(next.list || []).reduce((innerPre, innerNext) => {
        return {
          ...innerPre,
          ['_' + next.type + '_' + innerNext.key]: innerNext.value
        }
      }, {})
    }

    if (next.type === 'children') {
      if (next.option) {
        model.children = [next.option.value]
      } else if (next.type === 'group') {
        //
      }
    }

    return model
  }, {})
}

export function generateDynamicFieldsByConfig(config) {
  return config.reduce((pre, next) => {
    return [
      ...pre,
      ...(next.list || []).reduce((innerPre, innerNext) => {
        return [
          ...innerPre,
          {
            type: innerNext.element,
            formItemProps: {
              label: innerNext.name,
              prop: '_' + next.type + '_' + innerNext.key
            }
          }
        ]
      }, [])
    ]
  }, [])
}

export function generateDynamicGroupsByConfig(config) {
  return config.reduce((pre, next) => {
    return [
      ...pre,
      {
        label: next.name,
        content: (next.list || []).reduce((innerPre, innerNext) => {
          return [...innerPre, '_' + next.type + '_' + innerNext.key]
        }, [])
      }
    ]
  }, [])
}
