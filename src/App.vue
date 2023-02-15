<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import QueueButton from './components/QueueButton.vue'
  // import MessageToYou from './components/MessageToYou.vue'

  export default {
    components: {
      // HelloWorld
      // QueueButton
      // MessageToYou
    }
    // methods: {
    //   onStartQueue() {
    //     console.log('test test')
    //     // this.userName = o.userName
    //   }
    // }
  }
</script>

<template>
  <nav class="bg-primary">
    <ul>
      <li>
        <RouterLink to="/queue">Ställ dig i kö</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Programming jokes</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakta Miiig</RouterLink>
      </li>
      <li>
        <RouterLink to="/userview">User</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <!-- <HelloWorld msg="Hello World!" /> -->
  <!-- <QueueButton /> -->
  <!-- <QueueButton @start-game="onStartGame" /> -->
  <!-- <MessageToYou msg2="While waiting, read a joke!" /> -->
</template>

<style>
  body {
    padding: 1em;
  }

  ul {
    list-style-type: none;
  }
</style>
