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
          },
          children: ['选项一']
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
          children: [
            {
              label: 1,
              text: '选项一'
            },
            {
              label: 2,
              text: '选项二'
            }
          ]
        }
      ]
    }
  }
}
