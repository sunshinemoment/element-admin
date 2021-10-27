export default {
  data() {
    const generateData = () => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      base_form_transfer_model: {
        base_form_transfer: [1, 4]
      },
      base_form_transfer_fields: [
        {
          type: 'transfer',
          formItemProps: {
            label: '穿梭框',
            prop: 'base_form_transfer'
          },
          attributes: {
            data: generateData()
          }
        }
      ]
    }
  }
}
