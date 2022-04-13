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
            paddingLeft: '-50px'
          }
        },
        submitButtonProps: {
          style: {
            width: '100%'
          }
        },
        resetButtonProps: {
          style: {
            display: 'none'
          }
        },
        submitText: '登录'
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
    async submit(val) {
      const [err, res] = await this.$serve.user.login({
        data: {}
      })
      if (err) return
      console.log(res, 'res')
      console.log(val, '这里提交数据, 提交成功之后, 跳转首页')
      // this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-user-login {
  position: relative;
}
</style>
