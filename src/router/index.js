import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Galeria from '@/components/Galeria'
import Contacto from '@/components/Contacto'
import Cabanias from '@/components/Cabanias'
import Servicios from '@/components/Servicios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/cabanias',
      name: 'Cabanias',
      component: Cabanias
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
  ],
  mode: 'history',
})
