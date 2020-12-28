<template>
  <div class="container">
    <h2>Cписoк всех сотрудников</h2>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><router-link class="page-link" to="/">Home</router-link></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">6</a></li>
        <li class="page-item "><a class="page-link" href="#">7</a></li>
        <li class="page-item"><a class="page-link" href="#">8</a></li>
        <li class="page-item"><a class="page-link" href="#">9</a></li>
        <li class="page-item"><a class="page-link" href="#">10</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    <Loader v-if="loading"/>
    <Employers :employers='employers'/>
  </div>
</template>

<script>
import Loader from '../Loader'
import Employers from '../Employers'

export default {
  data() {
    return {
      employers: [
        // {id: 1, name: 'Jakhongir', position: 'software developer', male: true},
        // {id: 2, name: 'Sherzod', position: 'accountant', male: true},
        // {id: 3, name: 'Alisher', position: 'project manager', male: true}
      ],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
      .then(response => response.json())  
      .then(json => {
        this.employers = json
        this.loading = false
      })
  },
  components: {
    Loader,
    Employers
  }
}
</script>

<style scoped>
nav ul{
  margin-left: 300px;
}
</style>