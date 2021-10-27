export default {
  data() {
    return {
      base_form_time_picker_model: {
        base_form_time_select: '',
        base_form_time_picker: new Date(2016, 9, 10, 18, 40)
      },
      base_form_time_picker_fields: [
        {
          type: 'time-select',
          formItemProps: {
            label: '固定时间点',
            prop: 'base_form_time_select'
          },
          attributes: {
            pickerOptions: {
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }
          }
        },
        {
          type: 'time-picker',
          formItemProps: {
            label: '任意时间点',
            prop: 'base_form_time_picker'
          }
        }
      ]
    }
  }
}
