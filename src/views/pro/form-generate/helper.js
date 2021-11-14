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

export function normalizeOriginToField(origin) {
  const id = uid()
  const field = {
    type: origin.type
  }

  origin.formItemPropsConfig.content.forEach((item) => {
    if (item.value === '') {
      item.value = '_' + item.key + '_' + id
    }
  })

  origin.attributesConfig.content.forEach((item) => {
    if (item.value === '') {
      item.value = '_' + item.key + '_' + id
    }
  })

  field.formItemProps = origin.formItemPropsConfig.content.reduce(
    (pre, next) => {
      return {
        ...pre,
        [next.key]: next.value
      }
    },
    {}
  )

  field.attributes = origin.attributesConfig.content.reduce(
    (pre, next) => {
      return {
        ...pre,
        [next.key]: next.value
      }
    },
    {
      _config: origin
    }
  )

  if (origin.childrenConfig) {
    if (origin.childrenConfig.childType === 'string') {
      field.children = origin.childrenConfig.content.reduce((pre, next) => {
        return [...pre, next.value === '' ? next.name : next.value]
      }, [])
    }
  }

  return helper.normalizeElement(helper.normalizeField(field))
}

export function generateDynamicModelByfieldConfig(fieldConfig) {
  const originalConfig = fieldConfig.attributes._config

  const formItemPropsFieldsModel =
    originalConfig.formItemPropsConfig.content.reduce((pre, next) => {
      return {
        ...pre,
        ['_formItemProps_' + next.key]: next.value
      }
    }, {})
  const attributesFieldsModel =
    originalConfig.formItemPropsConfig.content.reduce((pre, next) => {
      return {
        ...pre,
        ['_attributes_' + next.key]: next.value
      }
    }, {})
  return {
    ...formItemPropsFieldsModel,
    ...attributesFieldsModel
  }
}

export function generateDynamiFieldsByfieldConfig(fieldConfig) {
  const originalConfig = fieldConfig.attributes._config
  const formItemPropsFields = originalConfig.formItemPropsConfig.content.reduce(
    (pre, next) => {
      return [
        ...pre,
        {
          type: next.element,
          formItemProps: {
            label: next.name,
            prop: '_formItemProps_' + next.key
          }
        }
      ]
    },
    []
  )
  const attributesFields = originalConfig.attributesConfig.content.reduce(
    (pre, next) => {
      return [
        ...pre,
        {
          type: next.element,
          formItemProps: {
            label: next.name,
            prop: '_attributes_' + next.key
          }
        }
      ]
    },
    []
  )

  return [...formItemPropsFields, ...attributesFields]
}

export function generateDynamicGroupsByfieldConfig(fieldConfig) {
  const originalConfig = fieldConfig.attributes._config
  return [
    {
      label: originalConfig.formItemPropsConfig.name,
      content: originalConfig.formItemPropsConfig.content.map(
        (item) => '_formItemProps_' + item.key
      )
    },
    {
      label: originalConfig.attributesConfig.name,
      content: originalConfig.attributesConfig.content.map(
        (item) => '_attributes_' + item.key
      )
    }
  ]
}
