export default {
  data() {
    return {
      base_form_input_number_model: {
        base_form_input_number: 1,
        base_form_input_number_disabled: 1,
        base_form_input_number_medium: 1,
        base_form_input_number_small: 1,
        base_form_input_number_mini: 1,
        base_form_input_number_right: 1
      },
      base_form_input_number_fields: [
        {
          type: 'input-number',
          formItemProps: {
            label: '计数器',
            prop: 'base_form_input_number'
          }
        },
        {
          type: 'input-number-disabled',
          formItemProps: {
            label: '计数器-禁用状态',
            prop: 'base_form_input_number_disabled'
          }
        },
        {
          type: 'input-number-medium',
          formItemProps: {
            label: '计数器-中号大小',
            prop: 'base_form_input_number_medium'
          }
        },
        {
          type: 'input-number-small',
          formItemProps: {
            label: '计数器-小号大小',
            prop: 'base_form_input_number_small'
          }
        },
        {
          type: 'input-number-mini',
          formItemProps: {
            label: '计数器-迷你大小',
            prop: 'base_form_input_number_mini'
          }
        },
        {
          type: 'input-number-right',
          formItemProps: {
            label: '计数器-按钮位置',
            prop: 'base_form_input_number_right'
          }
        }
      ]
    }
  }
}
