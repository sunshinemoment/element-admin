<template>
  <div class="page-advanced-form">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <div class="page-advanced-form__content">
      <step1 v-if="active === 0" @nextStep="nextStep" />
      <step2 v-if="active === 1" @nextStep="nextStep" @prevStep="prevStep" />
      <step3 v-if="active === 2" @prevStep="prevStep" @finish="finish" />
    </div>
  </div>
</template>

<script>
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

export default {
  components: {
    Step1,
    Step2,
    Step3
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    nextStep() {
      if (this.active < 2) {
        this.active += 1
      }
    },
    prevStep() {
      if (this.active > 0) {
        this.active -= 1
      }
    },
    finish() {
      this.active = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.el-steps {
  margin-bottom: 30px;
}
</style>
