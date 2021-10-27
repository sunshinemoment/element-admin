<template>
  <div class="page-pro-form">
    <!-- 栅格表单 -->
    <el-divider content-position="left">
      <h4>栅格表单</h4>
    </el-divider>
    <pro-form
      :model="girdForm_model"
      :fields="girdForm_fields"
      grid
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /栅格表单 -->

    <!-- 分组表单 -->
    <el-divider content-position="left">
      <h4>分组表单</h4>
    </el-divider>
    <pro-form
      :model="groupsForm_model"
      :fields="groupsForm_fields"
      :groups="groups"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /分组表单 -->

    <!-- Input 输入框 -->
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
    <!-- /Input 输入框 -->

    <!-- Radio 单选框 -->
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
    <!-- /Radio 单选框 -->

    <!-- Checkbox 多选框 -->
    <el-divider content-position="left">
      <h4>Checkbox 多选框</h4>
    </el-divider>
    <pro-form
      :model="base_form_checkbox_model"
      :fields="base_form_checkbox_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Checkbox 多选框 -->

    <!-- InputNumber 计数器 -->
    <el-divider content-position="left">
      <h4>InputNumber 计数器</h4>
    </el-divider>
    <pro-form
      :model="base_form_input_number_model"
      :fields="base_form_input_number_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /InputNumber 计数器 -->

    <!-- Select 选择器 -->
    <el-divider content-position="left">
      <h4>Select 选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_select_model"
      :fields="base_form_select_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Select 选择器 -->

    <!-- Cascader 级联选择器 -->
    <el-divider content-position="left">
      <h4>Cascader 级联选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_cascader_model"
      :fields="base_form_cascader_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Cascader 级联选择器 -->

    <!-- Switch 开关 -->
    <el-divider content-position="left">
      <h4>Switch 开关</h4>
    </el-divider>
    <pro-form
      :model="base_form_switch_model"
      :fields="base_form_switch_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Switch 开关 -->

    <!-- Slider 滑块 -->
    <el-divider content-position="left">
      <h4>Slider 滑块</h4>
    </el-divider>
    <pro-form
      :model="base_form_slider_model"
      :fields="base_form_slider_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Slider 滑块 -->

    <!-- TimePicker 时间选择器 -->
    <el-divider content-position="left">
      <h4>TimePicker 时间选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_time_picker_model"
      :fields="base_form_time_picker_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /TimePicker 时间选择器 -->

    <!-- DatePicker 日期选择器 -->
    <el-divider content-position="left">
      <h4>DatePicker 日期选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_date_picker_model"
      :fields="base_form_date_picker_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /DatePicker 日期选择器 -->

    <!-- DateTimePicker 日期时间选择器 -->
    <el-divider content-position="left">
      <h4>DateTimePicker 日期时间选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_date_time_picker_model"
      :fields="base_form_date_time_picker_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /DateTimePicker 日期时间选择器 -->

    <!-- Rate 评分 -->
    <el-divider content-position="left">
      <h4>Rate 评分</h4>
    </el-divider>
    <pro-form
      :model="base_form_rate_model"
      :fields="base_form_rate_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Rate 评分 -->

    <!-- ColorPicker 颜色选择器 -->
    <el-divider content-position="left">
      <h4>ColorPicker 颜色选择器</h4>
    </el-divider>
    <pro-form
      :model="base_form_color_picker_model"
      :fields="base_form_color_picker_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /ColorPicker 颜色选择器 -->

    <!-- Transfer 穿梭框 -->
    <el-divider content-position="left">
      <h4>Transfer 穿梭框</h4>
    </el-divider>
    <pro-form
      :model="base_form_transfer_model"
      :fields="base_form_transfer_fields"
      submitter
      @submit="submit"
    ></pro-form>
    <br />
    <!-- /Transfer 穿梭框 -->
  </div>
</template>

<script>
import girdForm from './_gird-form'
import groupsForm from './_groups-form'
import baseFormRadio from './_base-form-radio'
import baseFormCheckbox from './_base-form-checkbox'
import baseFormInput from './_base-form-input'
import baseFormInputNumber from './_base-form-input-number'
import baseFormSelect from './_base-form-select'
import baseFormCascader from './_base-form-cascader'
import baseFormSwitch from './_base-form-switch'
import baseFormSlider from './_base-form-slider'
import baseFormTimePicker from './_base-form-time-picker'
import baseFormDatePicker from './_base-form-date-picker'
import baseFormDateTimePicker from './_base-form-date-time-picker'
import baseFormRate from './_base-form-rate'
import baseFormColorPicker from './_base-form-color-picker'
import baseFormTransfer from './_base-form-transfer'

export default {
  mixins: [
    girdForm,
    groupsForm,
    baseFormRadio,
    baseFormCheckbox,
    baseFormInput,
    baseFormInputNumber,
    baseFormSelect,
    baseFormCascader,
    baseFormSwitch,
    baseFormSlider,
    baseFormTimePicker,
    baseFormDatePicker,
    baseFormDateTimePicker,
    baseFormRate,
    baseFormColorPicker,
    baseFormTransfer
  ],
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
