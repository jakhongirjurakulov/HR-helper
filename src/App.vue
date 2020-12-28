<template>
  <div id="app">
    <!-- <h1>HR helper</h1>
    <hr> -->
    <router-view /> <!-- any page could be rendered here-->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data() {
    return {
      employers: [
        // {id: 1, name: 'Jakhongir', position: 'software developer', male: true},
        // {id: 2, name: 'Sherzod', position: 'accountant', male: true},
        // {id: 3, name: 'Alisher', position: 'project manager', male: true}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
