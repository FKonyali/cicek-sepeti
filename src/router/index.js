import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/elektronik',
    name: 'Elektronik',
    component: () => import('../views/Electronic.vue')
  },
  {
    path: '/ev-ve-yasam',
    name: 'Ev ve Yaşam',
    component: () => import('../views/HomeAndLife.vue')
  },
  {
    path: '/evcil-hayvan',
    name: 'Evcil Hayvan',
    component: () => import('../views/Pet.vue')
  },
  {
    path: '/kitap',
    name: 'Kitap',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/oyuncak',
    name: 'Oyuncak',
    component: () => import('../views/Toys.vue')
  },
  {
    path: '/spor',
    name: 'Spor',
    component: () => import('../views/Sport.vue')
  },
  {
    path: '/cicek',
    name: 'Çiçek',
    component: () => import('../views/Flower.vue')
  },
  {
    path: '/hediye',
    name: 'Hediye',
    component: () => import('../views/Gift.vue')
  },
  {
    path: '/moda-aksesuar',
    name: 'Moda, Aksesuar',
    component: () => import('../views/FashionAccessory.vue')
  },
  {
    path: '/ofis-kirtasiye',
    name: 'Ofis, Kırtasiye',
    component: () => import('../views/OfficeStationery.vue')
  },
  {
    path: '/parfum',
    name: 'Parfüm',
    component: () => import('../views/Perfume.vue')
  },
  {
    path: '/kisisel-bakim',
    name: 'Kişisel Bakım',
    component: () => import('../views/PersonalCare.vue')
  },
  {
    path: '/petshop',
    name: 'Petshop',
    component: () => import('../views/Petshop.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
