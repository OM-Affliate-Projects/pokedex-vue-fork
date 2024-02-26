<template>
  <nav
    class="flex h-16 w-full items-center justify-between bg-red-500 px-4 shadow-md shadow-yellow-300"
  >
    <router-link to="/">
      <img :src="pokeball" alt="Pokeball" class="h-12 w-12" />
    </router-link>

    <ul class="flex gap-4 text-xl font-bold text-red-500">
      <router-link to="/" class="rounded-lg bg-white p-2 transition hover:bg-yellow-300"
        >Pokedex</router-link
      >
      <router-link to="/pokemon" class="rounded-lg bg-white p-2 transition hover:bg-yellow-300"
        >Reference</router-link
      >
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import pokeball from '../assets/images/pokeball.png'
export default {
  data() {
    return {
      pokeball
    }
  }
}
</script>
