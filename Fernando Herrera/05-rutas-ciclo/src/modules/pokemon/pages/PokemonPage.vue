<template>
  <h1>
    Pokemon <span>{{ id }}</span>
    <div v-if="message" class="error-message">
      {{ message }}
    </div>
    <div v-else>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  data() {
    return {
      pokemon: null,
      message: null,
    }
  },
  created() {
    //-- const { pokeid } = this.$route.params
    //-- this.id = pokeid
    this.getPokemon()
  },
  watch: {
    id() {
      this.getPokemon()
    },
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`,
        ).then((r) => r.json())
        this.pokemon = pokemon
      } catch (error) {
        this.message = 'Invalid Pokemon Id'
        setTimeout(() => {
          this.$router.push('/')
        }, 3000)
      }
    },
  },
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
