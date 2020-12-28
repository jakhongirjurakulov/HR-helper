<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <h2>Добро пожаловать!</h2>
        <h4><em>в</em> HR helper</h4>
      </div>
    </div>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/dashboard">Главная (Dashboard)</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/list-of-employers">Cписок всех сотрудников</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/view-of-employer">Просмотр одного сотрудника</router-link></a>
            </li>
        </ul>
    </nav>

    <div class="row d-flex justify-content align-items">
      <div class="col-md" id="form">
        <form @submit.prevent="submitEmployer">
          <div class="form-group">
            <label for="inputText1">ФИО:</label>
            <input type="text" placeholder="Type a name" v-model="name" class="form-control" id="inputText1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="select">Отдел:</label>
            <select id="select" v-model="selected">
              <option value="бухгалтерия active">Бухгалтерия</option>
              <option value="IT">IT</option>
              <option value="маркетинг">Маркетинг</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputText2">Должность:</label>
            <input type="Text" v-model="position" placeholder="Type a position" class="form-control" id="inputText2">
          </div>
          
          <div class="form-check">
            <div class="row">
              <div class="col">
                <input class="form-check-input" v-model="picked" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  Male
                </label>
              </div>
              <div class="col">
                <input class="form-check-input" v-model="picked" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="date">Дата рождения:</label>
            <input type="date" v-model="dateOfBirth" id="date" class="form-control" placeholder="Birth date">
          </div>
          <button type="submit" @click="submitEmployer" class="btn btn-primary">Добавить сотрудника</button>
        </form>
      </div>

    </div>
    
    <!-- <ul v-for="emp in list" :key="emp">
      <li>{{name}}</li>
      <li>{{position}}</li>
      <li>{{dateOfBirth}}</li>
    </ul>   -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      dateOfBirth: '', // or null
      position: '',
      // picked: false,
      // selected: true,
      // list: [],
      // errors: []
    }
  },
  // methods: {
  //   submitEmployer() {
  //     this.name = this.list.push(this.name)
  //     this.position = this.list.push(this.position)
  //     this.dateOfBirth = this.list.push(this.dateOfBirth)
  //   }
        // if name: null, age: null
      //  checkForm() {
      //     if (this.name && this.position) {
      //       return true;
      //     }

      //     this.errors = [];

      //     if (!this.name) {
      //       this.errors.push('Name required.');
      //     }
      //     if (!this.position) {
      //       this.errors.push('Position required.');
      //     }
      //   }
  // }
}
</script>

<style>
form {
  width: 500px;
  margin-left: 300px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10%;
  background-color: #F8F9FA;
}

ul li {
  list-style-type: none;
}

input {
  margin: 10px 0;
}
</style>