export default {
  data() {
    return {
      base_form_color_picker_model: {
        base_form_color_picker: null
      },
      base_form_color_picker_fields: [
        {
          type: 'color',
          formItemProps: {
            label: '颜色选择器',
            prop: 'base_form_color_picker'
          }
        }
      ]
    }
  }
}
