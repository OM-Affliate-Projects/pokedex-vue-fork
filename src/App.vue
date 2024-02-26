<script>
import NavBar from './components/nav-bar.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <nav-bar />
  <main>
    <RouterView />
  </main>
</template>
