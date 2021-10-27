export default {
  data() {
    return {
      base_form_switch_model: {
        base_form_switch: true,
        base_form_switch_disabled: false
      },
      base_form_switch_fields: [
        {
          type: 'switch',
          formItemProps: {
            label: '开关',
            prop: 'base_form_switch'
          }
        },
        {
          type: 'switch-disabled',
          formItemProps: {
            label: '开关-禁用状态',
            prop: 'base_form_switch_disabled'
          }
        }
      ]
    }
  }
}
