export default {
  data() {
    return {
      base_form_checkbox_model: {
        base_form_checkbox: '',
        base_form_checkbox_disabled: '禁用状态',
        base_form_checkbox_group: [],
        base_form_checkbox_button_group: []
      },
      base_form_checkbox_fields: [
        {
          type: 'checkbox',
          formItemProps: {
            label: '多选框',
            prop: 'base_form_checkbox'
          },
          attributes: {
            label: 1
          },
          children: ['选项一']
        },
        {
          type: 'checkbox-disabled',
          formItemProps: {
            label: '多选框-禁用状态',
            prop: 'base_form_checkbox_disabled'
          },
          attributes: {
            label: '禁用状态'
          }
        },
        {
          type: 'checkbox-group',
          formItemProps: {
            label: '多选框-多选框组',
            prop: 'base_form_checkbox_group'
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
        },
        {
          type: 'checkbox-button-group',
          formItemProps: {
            label: '多选框-按钮样式',
            prop: 'base_form_checkbox_button_group'
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
