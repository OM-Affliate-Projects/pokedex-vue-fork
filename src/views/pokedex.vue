<template>
  <h1 class="my-4 text-center text-3xl font-medium">Pokedex</h1>

  <div class="container mx-auto my-4 flex w-3/4 justify-center gap-2 md:w-full">
    <input
      type="text"
      placeholder="Search Pokemon..."
      class="w-3/4 rounded bg-red-100 px-4 py-2 outline-none"
      v-model="searchTerm"
      @keydown.enter="searchPokemon"
      @input="searchPokemon"
    />
    <button
      class="w-1/4 rounded bg-yellow-300 px-4 py-2 text-sm font-medium transition hover:bg-yellow-400"
      @click="searchPokemon"
    >
      Search
    </button>
  </div>

  <ul class="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="pokemon in filteredPokedex"
      class="m-2 mx-auto flex w-3/4 flex-col items-center gap-4 rounded-lg border-2 bg-red-500 p-2 shadow-md shadow-yellow-300 md:w-full"
    >
      <h3 class="text-center text-2xl font-bold">{{ pokemon.name.toUpperCase() }}</h3>
      <img :src="pokemon.image" :alt="pokemon.name" class="h-48 w-48 rounded border bg-white" />
      <button
        class="w-3/4 rounded bg-yellow-300 px-2 py-1 text-sm font-medium transition hover:bg-yellow-400"
      >
        Details
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      pokedex: []
    }
  },
  computed: {
    filteredPokedex() {
      if (!this.searchTerm) return this.pokedex
      return this.pokedex.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    async fetchPokedex() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      const pokedex = await Promise.all(
        data.results.map(async (pokemon) => {
          const image = await this.fetchPokemonImage(pokemon.name)
          return { ...pokemon, image }
        })
      )
      this.pokedex = pokedex
    },
    async fetchPokemonImage(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      return data.sprites.front_default
    },
    async searchPokemon() {
      if (!this.pokedex.length) {
        await this.fetchPokedex()
      }
    }
  },
  created() {
    this.searchPokemon()
  }
}
</script>
