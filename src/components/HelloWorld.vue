<script>
  // import QueueButton from "./QueueButton.vue";

  export default {
    props: {
      msg: { type: String, required: true }
    },
    // components: { QueueButton },
    computed: {
      addToQueue() {
        return this.$store.state.queuer
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <p>{{ msg }}</p>
  <h1>Det är {{ $store.state.queuer }} före dig på listan</h1>
</template>
