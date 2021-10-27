export default {
  data() {
    return {
      base_form_date_picker_model: {
        base_form_date_picker: '',
        base_form_date_picker_week: '',
        base_form_date_picker_month: '',
        base_form_date_picker_year: '',
        base_form_date_picker_daterange: '',
        base_form_date_picker_monthrange: ''
      },
      base_form_date_picker_fields: [
        {
          type: 'date',
          formItemProps: {
            label: '选择日',
            prop: 'base_form_date_picker'
          }
        },
        {
          type: 'week',
          formItemProps: {
            label: '周',
            prop: 'base_form_date_picker_week'
          }
        },
        {
          type: 'month',
          formItemProps: {
            label: '月',
            prop: 'base_form_date_picker_month'
          }
        },
        {
          type: 'year',
          formItemProps: {
            label: '年',
            prop: 'base_form_date_picker_year'
          }
        },
        {
          type: 'daterange',
          formItemProps: {
            label: '选择日期范围',
            prop: 'base_form_date_picker_daterange'
          }
        },
        {
          type: 'monthrange',
          formItemProps: {
            label: '选择月份范围',
            prop: 'base_form_date_picker_monthrange'
          }
        }
      ]
    }
  }
}
