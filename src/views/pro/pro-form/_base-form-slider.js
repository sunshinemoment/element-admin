export default {
  data() {
    return {
      base_form_slider_model: {
        base_form_slider: 0,
        base_form_slider_disabled: 50
      },
      base_form_slider_fields: [
        {
          type: 'slider',
          formItemProps: {
            label: '滑块',
            prop: 'base_form_slider'
          }
        },
        {
          type: 'slider-disabled',
          formItemProps: {
            label: '滑块-禁用状态',
            prop: 'base_form_slider_disabled'
          }
        }
      ]
    }
  }
}
