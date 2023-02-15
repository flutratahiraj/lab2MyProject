<template>
  <h1>Have some Fun while waiting!</h1>
  <JokeList name="Bob" />
  <HelloWorld />
</template>

<script>
  import HelloWorld from '../HelloWorld.vue'
  import JokeList from '../JokeList.vue'

  export default {
    components: {
      JokeList,
      HelloWorld
    }
  }
</script>
<!--

  Håll kölistan uppdaterad!
 -->
<style lang="scss" scoped>
  $coloR: rgb(30, 5, 217);
  h1 {
    color: $coloR;
  }
</style>
