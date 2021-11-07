<template>
  <div class="_editor-props">
    <pro-form
      inline
      :model="model"
      :fields="fields"
      :groups="groups"
      submitter
      @submit="submit"
    ></pro-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
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
      fields: [
        {
          type: 'input',
          formItemProps: {
            label: '属性名',
            prop: 'input1'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '属性键',
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
          label: '表单项配置',
          content: ['input1', 'input2', 'input3']
        },
        {
          label: '组件配置',
          content: ['input4', 'input5', 'input6']
        },
        {
          label: '事件配置',
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
  },
  methods: {
    submit() {
      console.log(999)
    }
  }
}
</script>

<style lang="scss" scoped>
._editor-props {
  padding: 20px 10px;
}
/deep/ .pro-form__groups-layout__group-title {
  font-size: 14px;
}
</style>
