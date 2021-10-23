<template>
  <div class="page-pro-form">
    <pro-form
      :model="base_form_input_model"
      :fields="base_form_input_fields"
      submitter
      @submit="submit"
    ></pro-form>
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
import girdForm from './_gird-form'
import groupsForm from './_groups-form'
export default {
  mixins: [baseFormInput, girdForm, groupsForm],
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
