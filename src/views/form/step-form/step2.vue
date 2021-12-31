<template>
  <div class="step2">
    <el-alert
      title="确认转账后，资金将直接打入对方账户，无法退回。"
      type="success"
    ></el-alert>
    <pro-form
      label-width="100px"
      :model="model"
      :fields="fields"
      readonly
      :submitter="{
        resetText: '上一步'
      }"
      @submit="nextStep"
      @reset="prevStep"
    ></pro-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        paymentUser: 'zhangsan@qq.com',
        payType: '支付宝',
        name: '张三',
        momey: '500.00',
        password: ''
      },
      fields: [
        {
          type: 'input',
          formItemProps: {
            label: '付款账户',
            prop: 'paymentUser'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '收款账户',
            prop: 'payType'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '收款人姓名',
            prop: 'name'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '转账金额',
            prop: 'momey'
          }
        },
        {
          type: 'password',
          readonly: false,
          formItemProps: {
            label: '密码',
            prop: 'password'
          }
        }
      ]
    }
  },
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
    prevStep() {
      this.$emit('prevStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.step2 {
  .pro-form {
    width: 460px;
    margin: 0 auto;
  }
}
</style>
