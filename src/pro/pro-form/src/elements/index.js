import presetRadio from './_el-radio'
import presetCheckbox from './_el-checkbox'
import presetInput from './_el-input'
import presetInputNumber from './_el-input-number'
import presetSelect from './_el-select'
import presetCascader from './_el-cascader'
import presetSwitch from './_el-switch'
import presetSlider from './_el-slider'
import presetTimePicker from './_el-time-picker'
import presetDatePicker from './_el-date-picker'
import presetDateTimePicker from './_el-date-time-picker'
import presetRate from './_el-rate'
import presetColorPicker from './_el-color-picker'
import presetTransfer from './_el-transfer'

export const presetElements = [
  ...presetRadio,
  ...presetCheckbox,
  ...presetInput,
  ...presetInputNumber,
  ...presetSelect,
  ...presetCascader,
  ...presetSwitch,
  ...presetSlider,
  ...presetTimePicker,
  ...presetDatePicker,
  ...presetDateTimePicker,
  ...presetRate,
  ...presetColorPicker,
  ...presetTransfer
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
