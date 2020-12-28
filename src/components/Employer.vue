<template>
  <div class="container">

    <ul v-for="employerView in employersView" :key="employerView">
      <li>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../assets/hqdefault.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>Сотрудник № {{employerView.id}}</strong></h5>
            <p class="card-text">{{employerView.body}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Отдел:</li>
            <li class="list-group-item">Возраст:</li>
            <li class="list-group-item">Тел:</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-danger" @click="$emit('deleteEmployer', employerView.id)">Удалить</button>
            <button class="btn btn-warning">Изменить</button>
          </div>
        </div>
        <!-- <div class="card">
          <div class="card-header">
            <strong>Сотрудник № {{employerView.id}}</strong>
          </div>
          <div class="card-body">
            <h4 class="card-title">Some info about employer</h4>
            <p class="card-text">{{employerView.body}}</p>
          </div>
          <div class="card-footer text-muted">
          <button class="btn btn-danger" @click="$emit('deleteEmployer', employerView.id)">Удалить</button>
          <button class="btn btn-warning">Изменить</button> -->
          <!-- </div> -->
        <!-- </div> -->
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: ['employersView']
}
</script>

<style scoped>
  button {
    margin: 5px
  }
  ul li {
    float: left;
    margin-left: 35px;
  }
</style>