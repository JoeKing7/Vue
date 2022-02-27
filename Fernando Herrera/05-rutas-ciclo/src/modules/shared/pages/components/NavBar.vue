<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokeid', params: { pokeid: 21 } }"
      >Pokemon by Id</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <custom-link v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
  },
  data() {
    return {
      links: [
        { to: 'poke-home', name: 'Pokemons' }, //to es el name en el router
        { to: 'poke-id', name: 'Poke ID', id: 100 },
        { to: 'poke-about', name: 'Pokemon About' },
        { to: 'dbz-characters', name: 'BDZ Personajes' },
        { to: 'dbz-about', name: 'DBZ About' },
        { to: 'https://google.com', name: 'Google' },
      ],
    }
  },
}
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

/* div .router-link-exact-active {
  color: #42b983;
} */
</style>
