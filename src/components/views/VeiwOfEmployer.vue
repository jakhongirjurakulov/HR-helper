<template>
  <div>
    <h2>Просмотр одного сотрудника</h2>
    <router-link to="/">Home page</router-link>
    <Loader v-if="loading"/>
    <Employer :employersView="employersView" @deleteEmployer="deleteEmployer" />
  </div>
</template>

<script>
import Employer from '../Employer'
import Loader from '../Loader'
export default {
  data() {
    return {
      employersView: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.employersView = json
        this.loading = false
      })
  },
  methods: {
    deleteEmployer(id) {
      this.employersView = this.employersView.filter(e => e.id !== id);
    }
  },
  components: {
  Employer, Loader
  }
}
</script>

<style>

</style>