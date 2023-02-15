<script>
  export default {
    props: {
      msg2: {
        type: String,
        required: true
      }
    },
    computed: {}
  }
</script>
<style lang="scss" scoped>
  $coloR: rgb(30, 5, 217);
  h2 {
    color: $coloR;
  }
</style>
<template>
  <h2>{{ msg2 }}</h2>
</template>
;
