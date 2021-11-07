<template>
  <component :is="name">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
