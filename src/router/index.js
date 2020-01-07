import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home/home.vue'
import homePage from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home',
    component: Home,
    children: [{
      path: '',
      component: homePage },
    { path: '/home/comment',
      component: () => import ('../views/comment') },
    { path: '/home/publish',
      component: () => import('../views/publisharticle') },
    { path: '/home/articles',
      component: () => import('../views/articlesList') },
    { path: '/home/userInfo',
      component: () => import('../views/userinfo') },
    { path: '/home/material',
      component: () => import('../views/material') }] },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
