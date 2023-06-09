import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import LoginView from './views/LoginView.vue'
import RegistroView from './views/RegistroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router