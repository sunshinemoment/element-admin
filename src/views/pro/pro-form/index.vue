<template>
  <div class="page-pro-form">
    <pro-form
      :model="baseForm_model"
      :fields="baseForm_fields"
      @submit="submit"
      submitter
    ></pro-form>
  </div>
</template>

<script>
import baseForm from './_base-form'
export default {
  mixins: [baseForm],
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
