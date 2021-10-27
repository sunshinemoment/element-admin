export default {
  data() {
    return {
      base_form_date_time_picker_model: {
        base_form_date_time_picker: '',
        base_form_date_time_picker_range: ''
      },
      base_form_date_time_picker_fields: [
        {
          type: 'datetime',
          formItemProps: {
            label: '日期和时间点',
            prop: 'base_form_date_time_picker'
          }
        },
        {
          type: 'datetimerange',
          formItemProps: {
            label: '日期和时间范围',
            prop: 'base_form_date_time_picker_range'
          }
        }
      ]
    }
  }
}
