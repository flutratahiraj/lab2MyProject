<script>
  import axios from 'axios'

  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    created() {
      //Med vanlig fetch, Tar två-delad skämt, 10st
      fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-100&amount=10'
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.jokes)
          this.jokes = result.jokes
        })
    },
    data() {
      return {
        jokes: null,
        oneLinerJoke: null,
        isHidden: false
      }
    },
    methods: {
      onClick() {
        //Tar in ett skämt
        axios(
          'https://v2.jokeapi.dev/joke/Programming?type=single&idRange=0-100'
        ).then((result) => {
          console.log(result.data.joke)
          this.oneLinerJoke = result.data.joke
        })
      },
      showDelivery(jok) {
        //(index)
        console.log(this.jokes.length)
        // this.jokes.splice(index, 1)
        jok.isHidden = !jok.isHidden
      }
    }
  }
</script>

<template>
  <h1>{{ name }}</h1>
  <ol>
    <li v-for="jok in jokes" :key="jok.setup">
      {{ jok.setup }}
      <input type="button" value="Toggle answer" @click="showDelivery(jok)" />
      <span v-if="jok.isHidden">{{ jok.delivery }}</span>
    </li>
  </ol>
  <!-- <li v-for="(jok, index) in jokes" :key="jok.setup"> // funkar med splice -->

  <!-- <li v-for="jok in jokes" :key="jok.delivery">{{ jok.delivery }}</li> -->
  <!-- <li v-for="(value, key) in jokes">{{ value }}</li> -->

  <input type="button" value="Get one liner Joke" @click="onClick" />
  <!-- <li v-for="x in jokes">{{ this.jokes }}</li> -->
  <h4>{{ this.oneLinerJoke }}</h4>
</template>
