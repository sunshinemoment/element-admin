<template>
  <div class="page-user-login">
    <pro-form
      labelPosition="right"
      label-width="50px"
      :model="model"
      :fields="fields"
      :submitter="{
        props: {
          style: {
            marginLeft: '-50px'
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
        account: '',
        password: ''
      },
      fields: [
        {
          type: 'input',
          formItemProps: {
            label: '账号',
            prop: 'account'
          },
          attributes: {
            placeholder: '请输入'
          }
        },
        {
          type: 'password',
          formItemProps: {
            label: '密码',
            prop: 'password'
          },
          attributes: {
            placeholder: '请输入'
          }
        }
      ]
    }
  },
  methods: {
    submit(val) {
      console.log(val, '这里提交数据, 提交成功之后, 跳转首页')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-user-login {
  position: relative;
}
</style>
