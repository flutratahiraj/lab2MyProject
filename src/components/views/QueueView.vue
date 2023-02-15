<template>
  <h1>Ställ dig i kö</h1>
  <HelloWorld msg="Hello World!" />
  <QueueButton
    msg="Yo! "
    @start-queue="onStartQueue"
    name="dsd"
    classmate="x"
  />
  <MessageToYou msg2="While waiting, read a joke!" />
</template>

<script>
  import QueueButton from '../QueueButton.vue'
  import HelloWorld from '../HelloWorld.vue'
  import MessageToYou from '../MessageToYou.vue'

  export default {
    components: {
      QueueButton,
      HelloWorld,
      MessageToYou
    },
    methods: {
      onStartQueue() {
        console.log('test test')
        // this.userName = o.userName
      }
    }
  }
</script>
