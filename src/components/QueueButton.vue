<script>
  export default {
    computed: {
      qNumber() {
        return this.$store.state.queuer
      }
    },
    props: {
      msg: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      classmate: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        queuer: 0,
        n: '',
        names: '',
        arrayList: []
      }
    },
    emits: ['start-queue', 'startGame'],
    methods: {
      addToQueue() {
        this.queuer++
        this.$store.commit('addToQueue')
        // this.$store.state.queuer++; //funkar men får inte göras
      },
      onClick() {
        console.log('knapp tryck')
        //push in array??
        this.arrayList.push(this.n)
        this.names += ', ' + this.n
        this.$store.commit('addToQueue')
        this.$emit('start-queue')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $theme-colors: (
    'primary': #166200,
    'success': #577717,
    'danger': #88193a
  );
</style>

<template>
  <input type="text" placeholder="Vem behöver hjälp?" v-model="n" />
  <input :disabled="n.length === 0" type="button" value="OK" @click="onClick" />
  <p>Skriv in ditt namn, och tryck på OK</p>
  <input
    class="btn btn-outline-dark"
    type="button"
    :value="queuer"
    @click="addToQueue"
  />
  <!-- <input
    type="button"
    :value="queuer"
    @click="
      this.queuer++;
      $store.commit('addToQueue');
    "
  /> -->
  <p>{{ msg }}{{ queuer }} {{ qNumber }}</p>
  <p v-if="!names">Noob-club!</p>
  <p v-if="!n">Get first in line!!</p>
  <p v-else>{{ n }} has been added to the queue!</p>
  <h2>Queue</h2>
  <!-- <li>{{ names }}</li> -->
  <h3 v-for="(mates, i) in arrayList" :key="i">{{ mates }}</h3>
</template>

<!--
[]använd splice? för att ta bort namn
 -->
