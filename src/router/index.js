import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Make from '../views/Make.vue'
import Color from '../views/Color.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/Make',
      name: 'Make',
      component: Make
  },
  {
      path: '/Color',
      name: 'Color',
      component: Color
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
