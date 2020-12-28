import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list-of-employers',
      component: () => import('./components/views/ListOfEmployers.vue')
    },
    {
      path: '/view-of-employer',
      component: () => import('./components/views/VeiwOfEmployer.vue')
    },
    {
      path: '/dashboard',
      component: () => import('./components/views/Dashboard.vue')
    }
  ]
})
