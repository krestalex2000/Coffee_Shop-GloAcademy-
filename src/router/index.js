import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import GoodsPage from '../views/GoodsPage'
import Contacts from '../views/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HeroView,
  },
  {
    path: '/our-coffee',
    component: OurCoffeeView,
  },
  {
    path: '/goodspage',
    component: GoodsPage,
  },
  {
    path: '/contacts',
    component: Contacts,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router