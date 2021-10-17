<template>
  <div class="page-pro-form">
    <pro-form
      :model="baseForm_model"
      :fields="baseForm_fields"
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
import baseForm from './_base-form'
import girdForm from './_gird-form'
import groupsForm from './_groups-form'
export default {
  mixins: [baseForm, girdForm, groupsForm],
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
