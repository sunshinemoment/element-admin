import presetInput from './_el-input'
import presetRadio from './_el-radio'
import presetCheckbox from './_el-checkbox'

export const presetElements = [
  ...presetInput,
  ...presetRadio,
  ...presetCheckbox
]

export const presetElementsMapByType = presetElements.reduce(
  (pre, { type, ...rest }) => {
    return {
      ...pre,
      [type]: rest
    }
  },
  {}
)

export const presetElementsMapByElement = presetElements.reduce(
  (pre, { element, ...rest }) => {
    return {
      ...pre,
      ...(pre[element]
        ? null
        : {
            [element]: {
              element,
              ...rest
            }
          })
    }
  },
  {}
)
