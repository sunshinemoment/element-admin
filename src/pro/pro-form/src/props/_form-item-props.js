const props = {
  label: String,
  labelWidth: String,
  prop: String,
  required: {
    type: Boolean,
    default: undefined
  },
  rules: [Object, Array],
  error: String,
  validateStatus: String,
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ''
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: String
}

export const propsKeys = Object.keys(props)

export default props
