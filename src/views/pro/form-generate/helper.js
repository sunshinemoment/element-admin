import { uid } from 'uid'
import { helper } from '@/pro/pro-form'

export const TYPE_BASE = 'base'
export const TYPE_GIRD = 'gird'
export const TYPE_GROUPS = 'groups'

/** 格式化 groups */
export function normalizeToolDataToGroupData(data) {
  return {
    label: data.name,
    showLabel: data.type === TYPE_GROUPS,
    content: []
  }
}

/** 格式化 原始数据标准化: 配置uid */
export function normalizeOriginToField(origin, model, id) {
  const field = {
    type: origin.type
  }

  origin.formItemPropsConfig.content.forEach((item) => {
    if (model) {
      item.value = model[item.id]
      return
    }
    const id = uid()
    if (item.value === '') {
      // item.value = '_' + item.key + '_' + id
      item.value = id
    }

    item.id = id
  })

  origin.attributesConfig.content.forEach((item) => {
    if (model) {
      item.value = model[item.id]
      return
    }
    const id = uid()
    if (item.value === '') {
      // item.value = '_' + item.key + '_' + id
      item.value = id
    }
    item.id = id
  })

  field.formItemProps = origin.formItemPropsConfig.content.reduce(
    (pre, next) => {
      return {
        ...pre,
        [next.key]: next.value
      }
    },
    { id: id || uid() }
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

/** 根据当前的表单项动态生成表单model */
export function generateDynamicModelByfieldConfig(fieldConfig) {
  const originalConfig = fieldConfig.attributes._config

  const formItemPropsFieldsModel =
    originalConfig.formItemPropsConfig.content.reduce((pre, next) => {
      return {
        ...pre,
        [next.id]: next.value
        // ['_formItemProps_' + next.key]: next.value
      }
    }, {})
  const attributesFieldsModel = originalConfig.attributesConfig.content.reduce(
    (pre, next) => {
      return {
        ...pre,
        [next.id]: next.value
        // ['_attributes_' + next.key]: next.value
      }
    },
    {}
  )
  return {
    ...formItemPropsFieldsModel,
    ...attributesFieldsModel
  }
}

/** 根据当前的表单项动态生成表单域 */
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
            prop: next.id
            // prop: '_formItemProps_' + next.key
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
            prop: next.id
            // prop: '_attributes_' + next.key
          }
        }
      ]
    },
    []
  )

  return [...formItemPropsFields, ...attributesFields]
}

/** 根据当前的表单项动态生成表单分组配置 */
export function generateDynamicGroupsByfieldConfig(fieldConfig) {
  const originalConfig = fieldConfig.attributes._config
  return [
    {
      label: originalConfig.formItemPropsConfig.name,
      content: originalConfig.formItemPropsConfig.content.map((item) => {
        return item.id
        // return '_formItemProps_' + item.key
      })
    },
    {
      label: originalConfig.attributesConfig.name,
      content: originalConfig.attributesConfig.content.map((item) => {
        return item.id
        // return '_attributes_' + item.key
      })
    }
  ]
}

/** 根据属性配置生成修改之后的表单项 */
export function generateFieldByPropsConfig(propsConfig, field) {
  const fieldConfig = field.attributes._config
  const formItemProps = field.formItemProps
  return normalizeOriginToField(fieldConfig, propsConfig, formItemProps.id)
}
