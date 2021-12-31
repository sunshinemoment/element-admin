<template>
  <div class="page-advanced-form">
    <pro-form
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
            label: '仓库名',
            prop: 'input1'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '仓库域名',
            prop: 'input2'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '仓库管理员',
            prop: 'input3'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '任务名',
            prop: 'input4'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '任务描述',
            prop: 'input5'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '执行人',
            prop: 'input6'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '成员姓名',
            prop: 'input7'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '工号',
            prop: 'input8'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '所属部门',
            prop: 'input9'
          }
        }
      ],
      groups: [
        {
          label: '仓库管理',
          content: ['input1', 'input2', 'input3'],
          layout: {
            xs: 24,
            sm: 12,
            lg: 8,
            xl: 6
          }
        },
        {
          label: '任务管理',
          content: ['input4', 'input5', 'input6'],
          layout: {
            xs: 24,
            sm: 12,
            lg: 8,
            xl: 6
          }
        },
        {
          label: '成员管理',
          content: ['input7', 'input8', 'input9'],
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
    submit(data) {
      console.log(data)
    }
  }
}
</script>
