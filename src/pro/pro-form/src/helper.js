import { presetElementsMapByType, presetElementsMapByElement } from './elements'
import { propsKeys as formPropsKeys } from './props/_form-props'
import { propsKeys as proPropsKeys } from './props/_pro-props'
import { propsKeys as formItemPropsKeys } from './props/_form-item-props'
import { propsKeys as fieldPropsKeys } from './props/_field-props'

export function normalizeFormProps(props) {
  const { formProps = {} } = props
  return Object.entries(props).reduce((newFormProps, [k, v]) => {
    if (proPropsKeys.includes(k)) {
      return newFormProps
    }

    if (formPropsKeys.includes(k)) {
      return {
        [k]: v,
        ...newFormProps
      }
    }

    return newFormProps
  }, formProps)
}

export function normalizeElement(field) {
  const current =
    presetElementsMapByType[field.type] ||
    presetElementsMapByElement[field.element]
  if (current) {
    const { attrs, element, ...rest } = current
    field.element = element
    if (attrs) {
      field.attributes = {
        ...attrs,
        ...field.attributes
      }
    }
    Object.assign(field, rest)
    return field
  }

  // 默认显示 el-input
  field.element = 'el-input'

  return field
}

export function normalizeFields(fields) {
  return fields
    .map((field) => {
      const fieldEntries = Object.entries(field)

      if (fieldEntries.length === 0) {
        // 统一filed配置数据 没有配置属性的话 统一为空 也可以解决 Cannot read property 'xxx' of undefined 的报错
        return {
          formItemProps: {},
          attributes: {},
          events: {}
        }
      }

      return fieldEntries.reduce((newField, [k, v]) => {
        // formItemProps 和 attributes 默认为空对象 以避免后续可能需要用到该对象的属性而产生  Cannot read property 'xxx' of undefined 的报错
        const filed = {
          ...newField,
          formItemProps: newField.formItemProps || {},
          attributes: newField.attributes || {},
          events: newField.events || {}
        }

        // fieldProps中的属性传入什么就是什么
        if (fieldPropsKeys.includes(k)) {
          if (['formItemProps', 'attributes', 'events'].includes(k)) {
            // 出现混写(即有formItemProps内部属性传入, 又有formItemProps字段传入)的时候 以实际formItemProps或attributes或events传值为主
            return {
              ...filed,
              [k]: {
                ...filed[k],
                ...v
              }
            }
          }
          return {
            ...filed,
            [k]: v
          }
        }

        // 简写形式传formItemProps的值时 最终还是处理成formItemProps的属性传入内部
        if (formItemPropsKeys.includes(k)) {
          return {
            ...filed,
            formItemProps: {
              [k]: v,
              ...filed.formItemProps
            }
          }
        }

        // 简写形式传其他值时 全部作为attributes的属性 函数类型的全部作为events的属性
        return {
          ...filed,
          attributes: {
            ...(typeof v !== 'function' ? { [k]: v } : null),
            ...filed.attributes
          },
          events: {
            ...(typeof v === 'function' ? { [k]: v } : null),
            ...filed.events
          }
        }
      }, {})
    })
    .map(normalizeElement)
}
