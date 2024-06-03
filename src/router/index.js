import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WarehouseListView from '../views/WarehouseListView.vue'
import WarehouseNewView from '../views/WarehouseNewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehouseListView
  },
  {
    path: '/warehouses/new',
    name: 'new',
    component: WarehouseNewView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
