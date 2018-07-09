<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Cordova/>
  </div>
</template>

<script>
import Cordova from './components/Cordova.vue'

export default {
  name: 'app',
  components: {
    Cordova
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
  margin-top: 60px;
}
</style>
