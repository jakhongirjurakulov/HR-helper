<template>
<div>
  <h1>Dashboard</h1>
  <router-link to="/">Home</router-link>
  <Loader v-if="loading"/>
  <p>Количество всех сотрдников: {{dashboardArr.length}}</p>
  <p>Количество всех мужчин: {{dashboardArr[95].userId + 56}}</p>
  <p>Количество всех женщин: {{dashboardArr[45].userId + 29}}</p>
</div>
</template>

<script>
import Loader from '../Loader'
export default {
  data() {
    return {
      dashboardArr: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        this.dashboardArr = json
        this.loading = false
      })
  },
  components: {
    Loader
  }
}
</script>

<style>

</style>