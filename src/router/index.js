import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '../views/pokedex.vue'
import Pokemon from '../views/pokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pokedex',
      component: Pokedex
    },
    {
      path: '/pokemon',
      name: 'Pokemon',
      component: Pokemon
    }
  ]
})

export default router
