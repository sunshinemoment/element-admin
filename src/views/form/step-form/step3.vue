<template>
  <div class="step3">
    <el-result icon="success" title="操作成功" subTitle="请根据提示进行操作">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="finish">
          再转一笔
        </el-button>
        <el-button size="medium">查看账单</el-button>
      </template>
    </el-result>
    <pro-form
      label-width="100px"
      :model="model"
      :fields="fields"
      readonly
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
        momey: '500.00'
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
    finish() {
      this.$emit('finish')
    }
  }
}
</script>

<style lang="scss" scoped>
.step3 {
  .pro-form {
    width: 460px;
    margin: 0 auto;
  }
}
</style>
