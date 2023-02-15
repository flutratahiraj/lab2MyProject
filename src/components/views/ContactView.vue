<template>
  <h1 :style="contactStyle">Kontakta Moi</h1>
</template>

<style lang="scss">
  $apelsin: rgb(255, 154, 4);
  $indigo: #6610f2;
  h1 {
    color: $apelsin;
  }
</style>

<script>
  export default {
    data() {
      return {
        contactStyle: {
          backgroundColor: '#16b88b'
        }
      }
    }
  }
</script>
