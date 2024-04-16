import { createRouter, createWebHistory } from 'vue-router'

import CocinaView from '@/views/CocinaView.vue'
import MapContainer from '@/views/MapContainer.vue'
import Bano1View from '@/views/Bano1View.vue'
import Bano2View from '@/views/Bano2View.vue'
import SalaView from '@/views/SalaView.vue'
import Hab1View from '@/views/Hab1View.vue'
import Hab2View from '@/views/Hab2View.vue'
import Hab3View from '@/views/Hab3View.vue'
import GarageView from '@/views/GarageView.vue'
import ActuadoresView from '@/views/ActuadoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MapContainer
    },
    {
      path: '/cocina',
      name: 'cocina',
      component: CocinaView
    },
    {
      path: '/sala',
      name: 'sala',
      component: SalaView
    },
    {
      path: '/bano1',
      name: 'bano1',
      component: Bano1View
    },
    {
      path: '/bano2',
      name: 'bano2',
      component: Bano2View
    },
    {
      path: '/habitacion1',
      name: 'habitacion1',
      component: Hab1View
    },
    {
      path: '/habitacion2',
      name: 'habitacion2',
      component: Hab2View
    },
    {
      path: '/habitacion3',
      name: 'habitacion3',
      component: Hab3View
    },
    {
      path: '/garage',
      name: 'garage',
      component: GarageView
    },
    {
      path: '/actuadores',
      name: 'actuadores',
      component: ActuadoresView
    }
   
  ]
})

export default router
