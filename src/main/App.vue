<template>
  <div id="app">
    <frame />
  </div>
</template>

<script>
import Frame from '@/frame/frame'
export default {
  name: 'App',
  mounted () {
  },
  components: {
    Frame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
