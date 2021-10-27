export default {
  data() {
    return {
      base_form_rate_model: {
        base_form_rate: null
      },
      base_form_rate_fields: [
        {
          type: 'rate',
          formItemProps: {
            label: 'Rate 评分',
            prop: 'base_form_rate'
          }
        }
      ]
    }
  }
}
