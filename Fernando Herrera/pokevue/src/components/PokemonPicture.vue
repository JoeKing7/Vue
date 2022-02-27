<template>
  <div class="pokemon-container">
    <img v-if="!showPoke" :src="imgSrc" class="hidden-pokemon" alt="pokemon" />
    <img v-else :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokeId: {
      type: Number,
      required: true,
    },
    showPoke: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`;
    },
  },
};
</script>

<style scoped>
.hidden-pokemon {
  filter: brightness(0);
}

.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
