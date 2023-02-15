<template>
  <h1 :style="userTitle">User</h1>
  <input type="text" v-model="inputuser" placeholder="mango" />
  <RouterLink :to="`/userview/${inputuser}`">
    <input class="btn btn-outline-danger" type="button" value="klickeliklick" />
  </RouterLink>
  <p>{{ `${this.$route.params.z}` }}</p>
</template>
<!-- <style>
  @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Oswald&display=swap');
</style> -->
<script>
  export default {
    data() {
      return {
        inputuser: 'MANGO',
        userTitle: {
          color: 'red',
          fontSize: '50px',
          FontFace: 'Monoton'
        }
      }
    },
    watch: {
      inputuser() {
        console.log(`${this.inputuser}`)
      }
    }
  }
</script>
