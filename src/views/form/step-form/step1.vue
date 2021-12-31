<template>
  <div class="step1">
    <pro-form
      label-width="100px"
      :model="model"
      :fields="fields"
      :submitter="{
        submitText: '下一步',
        resetButtonProps: {
          style: {
            display: 'none'
          }
        }
      }"
      @submit="submit"
    ></pro-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        paymentUser: '',
        payType: '',
        name: '',
        momey: ''
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
        }
      ]
    }
  },
  methods: {
    submit() {
      this.$emit('nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.step1 {
  .pro-form {
    width: 460px;
    margin: 0 auto;
  }
}
</style>
