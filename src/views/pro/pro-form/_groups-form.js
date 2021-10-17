export default {
  data() {
    return {
      groupsForm_model: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: ''
      },
      groupsForm_fields: [
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项一',
            prop: 'input1'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项二',
            prop: 'input2'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项三',
            prop: 'input3'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项四',
            prop: 'input4'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项五',
            prop: 'input5'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项六',
            prop: 'input6'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项七',
            prop: 'input7'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项八',
            prop: 'input8'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项九',
            prop: 'input9'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: 'Groups选项十',
            prop: 'input10'
          }
        }
      ],
      groups: [
        {
          label: 'group 一',
          content: ['input1', 'input2', 'input3']
        },
        {
          label: 'group 二',
          content: ['input4', 'input5', 'input6']
        },
        {
          label: 'group 三',
          content: ['input7', 'input8', 'input9', 'input10'],
          layout: {
            xs: 24,
            sm: 12,
            lg: 8,
            xl: 6
          }
        }
      ]
    }
  }
}
