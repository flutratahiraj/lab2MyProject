<script>
  // import QueueButton from './QueueButton.vue'

  export default {
    // components: { QueueButton },
    data() {
      return {
        // classMate: null
      }
    },
    methods: {
      // onStartGame(o) {
      //   this.classMate = n.classMate
      // }
    }
  }
</script>

<template>
  <!-- <QueueButton @start-queue="onStartGame" /> -->
  <input type="button" value="OK" @click="onStartQueue" />
  <!-- <p v-if="!n">Noob</p>
  <p v-else>{{ n }}</p> -->
</template>
