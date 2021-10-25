export default {
  data() {
    return {
      base_form_radio_model: {
        base_form_radio: '',
        base_form_radio_disabled: '禁用状态',
        base_form_radio_group: ''
      },
      base_form_radio_fields: [
        {
          type: 'radio',
          formItemProps: {
            label: '单选框',
            prop: 'base_form_radio'
          },
          attributes: {
            label: 1
          }
        },
        {
          type: 'radio-disabled',
          formItemProps: {
            label: '单选框-禁用状态',
            prop: 'base_form_radio_disabled'
          },
          attributes: {
            label: '禁用状态'
          }
        },
        {
          type: 'radio-group',
          formItemProps: {
            label: '单选框组',
            prop: 'base_form_radio_group'
          },
          attributes: {
            options: [
              {
                label: '选项一',
                value: 1
              },
              {
                label: '选项二',
                value: 2
              }
            ]
          }
        }
      ]
    }
  }
}
