import presetRadio from './_el-radio'
import presetCheckbox from './_el-checkbox'
import presetInput from './_el-input'
import presetInputNumber from './_el-input-number'

export const presetElements = [
  ...presetRadio,
  ...presetCheckbox,
  ...presetInput,
  ...presetInputNumber
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
