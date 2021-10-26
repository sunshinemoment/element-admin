<template>
  <div class="page-pro-form">
    <!-- base_form_input -->
    <el-divider content-position="left">
      <h4>Input 输入框</h4>
    </el-divider>
    <pro-form
      :model="base_form_input_model"
      :fields="base_form_input_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /base_form_input -->

    <!-- base_form_radio -->
    <el-divider content-position="left">
      <h4>Radio 单选框</h4>
    </el-divider>
    <pro-form
      :model="base_form_radio_model"
      :fields="base_form_radio_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /base_form_radio -->

    <!-- base_form_checkbox -->
    <el-divider content-position="left">
      <h4>checkbox 多选框</h4>
    </el-divider>
    <pro-form
      :model="base_form_checkbox_model"
      :fields="base_form_checkbox_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /base_form_checkbox -->

    <pro-form
      :model="girdForm_model"
      :fields="girdForm_fields"
      grid
      submitter
      @submit="submit"
    ></pro-form>
    <pro-form
      :model="groupsForm_model"
      :fields="groupsForm_fields"
      :groups="groups"
      submitter
      @submit="submit"
    ></pro-form>
  </div>
</template>

<script>
import baseFormInput from './_base-form-input'
import baseFormRadio from './_base-form-radio'
import baseFormCheckbox from './_base-form-checkbox'
import girdForm from './_gird-form'
import groupsForm from './_groups-form'
export default {
  mixins: [
    baseFormInput,
    baseFormRadio,
    baseFormCheckbox,
    girdForm,
    groupsForm
  ],
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
