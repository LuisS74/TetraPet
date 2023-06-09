import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import LoginView from './views/LoginView.vue'
import RegistroView from './views/RegistroView.vue'
import AdminMascotasView from './views/AdminMascotasView.vue'
import ClienteMascotasView from './views/ClienteMascotasView.vue'

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
  },
  {
    path: '/listado-mascotas/admin/',
    name: 'listado-mascotas-admin',
    component: AdminMascotasView
  },
  {
    path: '/listado-mascotas/cliente/',
    name: 'listado-mascotas-cliente',
    component: ClienteMascotasView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router